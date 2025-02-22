import React from "react";
import { motion } from "framer-motion";

const TaskProgressTracker = () => {
    const tasks = [
        {
            name: "To-Do",
            progress: 30,
            color: "bg-teal-500",
        },
        {
            name: "In Progress",
            progress: 60,
            color: "bg-sky-500",
        },
        {
            name: "Done",
            progress: 90,
            color: "bg-purple-500",
        },
    ];

    return (
        <section className="py-16 bg-gradient-to-r from-teal-100 to-sky-100">
            <div className="container mx-auto px-4">
                {/* Section Heading */}
                <motion.h2
                    className="text-4xl sm:text-5xl font-bold text-center text-[#313131] mb-12"
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    Track Your Progress
                </motion.h2>

                {/* Progress Bars */}
                <div className="space-y-8 max-w-2xl mx-auto">
                    {tasks.map((task, index) => (
                        <motion.div
                            key={index}
                            className="space-y-2"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                        >
                            <div className="flex justify-between">
                                <span className="text-lg font-semibold text-[#313131]">{task.name}</span>
                                <span className="text-lg font-semibold text-[#313131]">{task.progress}%</span>
                            </div>
                            <div className="w-full h-4 bg-gray-300 rounded-full overflow-hidden">
                                <motion.div
                                    className={`h-full ${task.color} rounded-full`}
                                    initial={{ width: 0 }}
                                    whileInView={{ width: `${task.progress}%` }}
                                    transition={{ duration: 1.5, delay: index * 0.3 }}
                                ></motion.div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TaskProgressTracker;