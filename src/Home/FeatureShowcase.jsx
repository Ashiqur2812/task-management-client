import React from "react";
import { motion } from "framer-motion";
import { FaTasks, FaCalendarAlt, FaUsers, FaChartLine } from "react-icons/fa";

const FeatureShowcase = () => {
    const features = [
        {
            icon: <FaTasks className="text-6xl text-teal-500" />,
            title: "Task Management",
            description: "Easily create, organize, and prioritize tasks. Stay on top of your to-do list with intuitive drag-and-drop functionality.",
        },
        {
            icon: <FaCalendarAlt className="text-6xl text-sky-500" />,
            title: "Deadline Tracking",
            description: "Set due dates and receive reminders. Never miss a deadline with our smart notification system.",
        },
        {
            icon: <FaUsers className="text-6xl text-purple-500" />,
            title: "Team Collaboration",
            description: "Collaborate seamlessly with your team. Assign tasks, share updates, and track progress in real-time.",
        },
        {
            icon: <FaChartLine className="text-6xl text-orange-500" />,
            title: "Progress Analytics",
            description: "Visualize your progress with detailed charts and reports. Gain insights to improve productivity.",
        },
    ];

    return (
        <section className="py-16 bg-gradient-to-r from-teal-100 to-sky-100 lg:py-28">
            <div className="container mx-auto px-4">
                {/* Section Heading */}
                <motion.h2
                    className="text-4xl sm:text-5xl font-bold text-center text-gray-900 mb-12"
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    Why Choose TaskMaster?
                </motion.h2>

                {/* Feature Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                        >
                            {/* Icon */}
                            <div className="flex justify-center mb-6">
                                <motion.div
                                    whileHover={{ scale: 1.1, rotate: 10 }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    {feature.icon}
                                </motion.div>
                            </div>

                            {/* Title */}
                            <h3 className="text-2xl font-semibold text-gray-900 mb-4 text-center">
                                {feature.title}
                            </h3>

                            {/* Description */}
                            <p className="text-gray-600 text-center">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Animated Background Elements */}
                <motion.div
                    className="absolute w-32 h-32 bg-teal-500/10 rounded-full top-0 left-0"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                ></motion.div>
                <motion.div
                    className="absolute w-24 h-24 bg-sky-500/10 rounded-full bottom-0 right-0"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 1, delay: 0.7 }}
                ></motion.div>
            </div>
        </section>
    );
};

export default FeatureShowcase;