import React from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";

const FunFacts = () => {
    const facts = [
        {
            number: 10000,
            label: "Tasks Completed",
            icon: "📝",
        },
        {
            number: 5000,
            label: "Happy Users",
            icon: "😊",
        },
        {
            number: 200,
            label: "Teams Onboarded",
            icon: "👥",
        },
        {
            number: 99,
            label: "Satisfaction Rate",
            icon: "🌟",
        },
    ];

    return (
        <section className="py-16 bg-gradient-to-br from-sky-100 to-teal-100 lg:py-40">
            <div className="container mx-auto px-4 lg:mx-4">
                {/* Section Heading */}
                <motion.h2
                    className="text-4xl sm:text-5xl font-extrabold text-center text-gray-900 mb-12"
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    🎉 Fun Facts About <span className="text-teal-600">TaskMaster</span> 🎯
                </motion.h2>

                {/* Fun Fact Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {facts.map((fact, index) => (
                        <motion.div
                            key={index}
                            className="bg-white p-8 rounded-xl shadow-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex flex-col items-center"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                            whileHover={{ rotate: [0, 2, -2, 2, 0], transition: { duration: 0.4 } }}
                        >
                            {/* Animated Icon with Glow */}
                            <motion.div
                                className="text-6xl mb-4"
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                            >
                                {fact.icon}
                            </motion.div>

                            {/* Animated Counter */}
                            <CountUp start={0} end={fact.number} duration={5}>
                                {({ countUpRef }) => (
                                    <motion.div
                                        className="text-5xl font-extrabold text-teal-600 drop-shadow-md"
                                        initial={{ scale: 0.9 }}
                                        whileInView={{ scale: 1 }}
                                        transition={{ duration: 0.5 }}
                                    >
                                        <span ref={countUpRef} />
                                        {fact.label === "Satisfaction Rate" && <span>%</span>}
                                    </motion.div>
                                )}
                            </CountUp>

                            {/* Label with a Fun Animation */}
                            <motion.p
                                className="text-gray-700 mt-4 text-lg font-medium"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 0.8, delay: 0.5 }}
                            >
                                {fact.label}
                            </motion.p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FunFacts;
