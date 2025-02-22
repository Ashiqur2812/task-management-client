import { useState } from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
import axios from "axios";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import { FaPlus, FaTrash, FaEdit } from "react-icons/fa";
import { motion } from "framer-motion";
import Swal from "sweetalert2";
import Loader from "../shared/Loader";

const Tasks = () => {
    const [newTask, setNewTask] = useState({ title: "", description: "", dueDate: "" });
    const [editTask, setEditTask] = useState(null);
    const [activityLog, setActivityLog] = useState([]);

    const { data: tasks = { todo: [], inProgress: [], done: [] }, isLoading, refetch } = useQuery({
        queryKey: ["tasks"],
        queryFn: async () => {
            const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/tasks`);
            return data;
        },
    });

    const addTaskMutation = useMutation({
        mutationFn: async (task) => {
            return axios.post(`${import.meta.env.VITE_API_URL}/tasks`, task);
        },
        onSuccess: () => {
            refetch();
            setActivityLog((prev) => [...prev, `Task "${newTask.title}" added.`]);
            Swal.fire({
                icon: "success",
                title: "Task Added!",
                text: "Your task has been added successfully.",
                showConfirmButton: false,
                timer: 4000,
            });
            setNewTask({ title: "", description: "", category: "todo", dueDate: "" });
        },
        onError: (error) => {
            Swal.fire({
                icon: "error",
                title: "Error",
                text: error.response?.data?.error || "Failed to add task",
            });
        },
    });
    


    const editTaskMutation = useMutation({
        mutationFn: async ({ id, updatedTask }) => {
            return axios.put(`${import.meta.env.VITE_API_URL}/tasks/update/${id}`, updatedTask);
        },
        onSuccess: () => {
            refetch();
            setActivityLog((prev) => [...prev, `Task "${editTask.title}" updated.`]);
            setEditTask(null);
            Swal.fire({
                icon: "success",
                title: "Task Updated!",
                text: "Your task has been updated successfully.",
                showConfirmButton: false,
                timer: 4000,
            });
        },
    });

    const deleteTaskMutation = useMutation({
        mutationFn: async (taskId) => {
            return axios.delete(`${import.meta.env.VITE_API_URL}/tasks/${taskId}`);
        },
        onSuccess: () => {
            refetch();
            setActivityLog((prev) => [...prev, `Task deleted.`]);
            Swal.fire({
                icon: "success",
                title: "Task Deleted!",
                text: "Your task has been removed successfully.",
                showConfirmButton: false,
                timer: 2000,
            });
        },
    });

    const handleAddTask = () => {
        if (!newTask.title.trim()) return;
        addTaskMutation.mutate({
            ...newTask,
            timestamp: new Date().toISOString(),
            category: "todo",
        });
    };

    const handleEditTask = () => {
        if (!editTask.title.trim()) return;
        editTaskMutation.mutate({ id: editTask._id, updatedTask: editTask });
    };

    const handleDeleteTask = async (taskId) => {
        const result = await Swal.fire({
            title: "Are you sure?",
            text: "This task will be permanently deleted.",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#3085d6",
            confirmButtonText: "Delete",
            cancelButtonText: "Cancel",
        });

        if (result.isConfirmed) {
            deleteTaskMutation.mutate(taskId);
        }
    };

    const onDragEnd = async (result) => {
        const { source, destination, draggableId } = result;

        if (!destination) return;
        if (source.droppableId === destination.droppableId && source.index === destination.index) return;

        const movedTask = tasks[source.droppableId][source.index];

        try {
            await axios.put(`${import.meta.env.VITE_API_URL}/tasks/${movedTask._id}`, {
                category: destination.droppableId,
            });
            setActivityLog((prev) => [...prev, `Task "${movedTask.title}" moved to ${destination.droppableId}.`]);
            refetch();
        } catch (error) {
            console.error("Error updating task category:", error);
        }
    };

    const getTaskColor = (dueDate) => {
        if (!dueDate) return "gray";
        const now = new Date();
        const due = new Date(dueDate);
        const timeDiff = due - now;
        const hoursDiff = timeDiff / (1000 * 60 * 60);

        if (hoursDiff < 0) return "red"; // Overdue
        if (hoursDiff < 24) return "yellow"; // Due soon
        return "green"; // On track
    };

    if (isLoading) return <Loader />;

    return (
        <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center pt-16 pb-20">
            <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl font-bold text-sky-400">
                Task Management System
            </motion.h1>

            {/* Add Task Form */}
            <div className="flex items-center gap-4 my-8">
                <input
                    type="text"
                    value={newTask.title}
                    onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
                    placeholder="Task Title (max 50 chars)"
                    className="px-4 py-2 text-black rounded-lg w-64"
                    maxLength={50}
                />
                <input
                    type="text"
                    value={newTask.description}
                    onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
                    placeholder="Task Description (max 200 chars)"
                    className="px-4 py-2 text-black rounded-lg w-64"
                    maxLength={200}
                />
                <input
                    type="date"
                    value={newTask.dueDate}
                    onChange={(e) => setNewTask({ ...newTask, dueDate: e.target.value })}
                    className="px-4 py-2 text-black rounded-lg w-64"
                />
                <button
                    onClick={handleAddTask}
                    className="px-4 py-2 rounded-lg bg-sky-500 hover:bg-sky-700 flex items-center gap-2"
                    disabled={!newTask.title.trim()}
                >
                    <FaPlus /> Add
                </button>
            </div>

            {/* Drag-and-Drop Task Boards */}
            <DragDropContext onDragEnd={onDragEnd}>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
                    {["todo", "inProgress", "done"].map((category) => (
                        <Droppable key={category} droppableId={category}>
                            {(provided) => (
                                <div {...provided.droppableProps} ref={provided.innerRef} className="bg-gray-800 p-4 rounded-lg shadow-lg">
                                    <h2 className="text-xl font-semibold text-sky-400 capitalize mb-4">{category}</h2>
                                    {tasks[category]?.map((task, index) => (
                                        <Draggable key={task._id} draggableId={task._id} index={index}>
                                            {(provided) => (
                                                <motion.div
                                                    {...provided.draggableProps}
                                                    {...provided.dragHandleProps}
                                                    ref={provided.innerRef}
                                                    className={`bg-gray-700 p-3 rounded-lg shadow mb-2 flex justify-between items-center border-l-4 border-${getTaskColor(task.dueDate)}-500`}
                                                >
                                                    <div>
                                                        <p className="font-bold">{task.title}</p>
                                                        <p className="text-sm text-gray-400">{task.description}</p>
                                                        <p className="text-sm text-gray-400">Due: {task.dueDate}</p>
                                                    </div>
                                                    <div className="flex gap-2">
                                                        <button onClick={() => setEditTask(task)} className="text-yellow-400 hover:text-yellow-600">
                                                            <FaEdit />
                                                        </button>
                                                        <button onClick={() => handleDeleteTask(task._id)} className="text-red-400 hover:text-red-600">
                                                            <FaTrash />
                                                        </button>
                                                    </div>
                                                </motion.div>
                                            )}
                                        </Draggable>
                                    ))}
                                    {provided.placeholder}
                                </div>
                            )}
                        </Droppable>
                    ))}
                </div>
            </DragDropContext>

            {/* Activity Log */}
            <div className="mt-8 w-full max-w-5xl">
                <h2 className="text-xl font-semibold text-sky-400 mb-4">Activity Log</h2>
                <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
                    {activityLog.map((log, index) => (
                        <p key={index} className="text-gray-400">{log}</p>
                    ))}
                </div>
            </div>

            {/* Edit Task Modal */}
            {editTask && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-96">
                        <h2 className="text-xl font-bold text-sky-400 mb-4">Edit Task</h2>
                        <input
                            type="text"
                            value={editTask.title}
                            onChange={(e) => setEditTask({ ...editTask, title: e.target.value })}
                            placeholder="Task Title"
                            className="px-4 py-2 text-black rounded-lg w-full mb-4"
                        />
                        <input
                            type="text"
                            value={editTask.description}
                            onChange={(e) => setEditTask({ ...editTask, description: e.target.value })}
                            placeholder="Task Description"
                            className="px-4 py-2 text-black rounded-lg w-full mb-4"
                        />
                        <input
                            type="date"
                            value={editTask.dueDate}
                            onChange={(e) => setEditTask({ ...editTask, dueDate: e.target.value })}
                            className="px-4 py-2 text-black rounded-lg w-full mb-4"
                        />
                        <div className="flex gap-4">
                            <button
                                onClick={handleEditTask}
                                className="px-4 py-2 bg-sky-500 hover:bg-sky-700 rounded-lg"
                            >
                                Save
                            </button>
                            <button
                                onClick={() => setEditTask(null)}
                                className="px-4 py-2 bg-gray-500 hover:bg-gray-700 rounded-lg"
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Tasks;