import React from "react";
import { motion } from "framer-motion";
import { FaUsers, FaComments, FaShareAlt, FaChartPie } from "react-icons/fa";

const TeamCollaborationShowcase = () => {
    const features = [
        {
            icon: <FaUsers className="text-5xl sm:text-6xl text-teal-500 drop-shadow-lg" />,
            title: "Team Members",
            description: "Invite and manage team members effortlessly. Assign roles and permissions with ease.",
        },
        {
            icon: <FaComments className="text-5xl sm:text-6xl text-sky-500 drop-shadow-lg" />,
            title: "Real-Time Chat",
            description: "Communicate with your team in real-time. Share updates and feedback instantly.",
        },
        {
            icon: <FaShareAlt className="text-5xl sm:text-6xl text-purple-500 drop-shadow-lg" />,
            title: "File Sharing",
            description: "Share files and documents securely. Collaborate on projects without any hassle.",
        },
        {
            icon: <FaChartPie className="text-5xl sm:text-6xl text-orange-500 drop-shadow-lg" />,
            title: "Progress Reports",
            description: "Generate detailed progress reports. Keep everyone on the same page.",
        },
    ];

    return (
        <section className="relative py-12 md:py-16 lg:py-32 bg-gradient-to-br from-teal-50 to-sky-100 overflow-hidden">
            <div className="container mx-auto px-4 sm:px-8 lg:px-16 relative">
                {/* Section Heading */}
                <motion.h2
                    className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-gray-900 mb-10 md:mb-12"
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    🚀 Collaborate Like Never Before
                </motion.h2>

                {/* Feature Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            className="relative bg-white p-6 sm:p-8 rounded-2xl shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl text-center"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                            whileHover={{ rotate: [0, 1, -1, 1, 0], transition: { duration: 0.4 } }}
                        >
                            {/* Floating Icon */}
                            <motion.div
                                className="absolute -top-0 left-28 transform -translate-x-1/2 py-4"
                                initial={{ y: -20, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.6, delay: index * 0.3 }}
                            >
                                {feature.icon}
                            </motion.div>

                            {/* Title */}
                            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mt-12 mb-3">
                                {feature.title}
                            </h3>

                            {/* Description */}
                            <p className="text-gray-600 text-sm sm:text-base">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Floating Background Elements */}
                <motion.div
                    className="absolute w-32 sm:w-48 h-32 sm:h-48 bg-teal-300/20 rounded-full top-5 left-5 blur-2xl"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1.5 }}
                    transition={{ duration: 1.5 }}
                ></motion.div>
                <motion.div
                    className="absolute w-24 sm:w-36 h-24 sm:h-36 bg-sky-300/20 rounded-full bottom-5 right-5 blur-2xl"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1.5 }}
                    transition={{ duration: 1.5, delay: 0.5 }}
                ></motion.div>
            </div>
        </section>
    );
};

export default TeamCollaborationShowcase;
