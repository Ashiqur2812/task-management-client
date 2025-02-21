import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const AddTask = () => {
    const [task, setTask] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const title = form.title.value.trim();
        const description = form.description.value.trim();
        const category = form.category.value.trim();

        if (!title || !description || !category) {
            Swal.fire({
                icon: "warning",
                title: "Oops...",
                text: "Please fill in all fields!",
            });
            return;
        }

        const taskData = { title, description, category };
        console.log("Task Data:", taskData);

        try {
            const response = await axios.post(`${import.meta.env.VITE_API_URL}/tasks`, taskData);

            if (response.data.insertedId) {
                Swal.fire({
                    icon: "success",
                    title: "Success!",
                    text: "Task added successfully!",
                    showConfirmButton: false,
                    timer: 3000, 
                });
                setTask(""); // Reset the task state
                form.reset(); // Clear input fields
            }
        } catch (error) {
            console.error("❌ Error adding task:", error);
            Swal.fire({
                icon: "error",
                title: "Error!",
                text: "Something went wrong. Please try again later.",
            });
        }
    };

    return (
        <div className="max-w-md mx-auto p-6 my-12 bg-white shadow-2xl rounded-lg">
            <h2 className="text-2xl font-bold text-center mb-4">Add New Task</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    type="text"
                    name="title"
                    placeholder="Task Title"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <textarea
                    name="description"
                    placeholder="Task Description"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <input
                    type="text"
                    name="category"
                    placeholder="Category (e.g., Work, Personal, Urgent)"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
                >
                    Add Task
                </button>
            </form>
        </div>
    );
};

export default AddTask;
