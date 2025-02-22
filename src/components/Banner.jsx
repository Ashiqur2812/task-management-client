import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Banner = () => {
    const navigate = useNavigate();

    const handleSignUp = () => {
        navigate("/signup");
    };

    return (
        <section className="relative h-[400px] sm:h-[500px] lg:h-[600px] bg-gradient-to-r from-teal-700 to-sky-500 overflow-hidden">
            {/* Background Animation */}
            <motion.div
                className="absolute inset-0 bg-[url('/src/assets/plant-5.svg')] bg-cover opacity-20"
                initial={{ scale: 1 }}
                animate={{ scale: 1.1 }}
                transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
            ></motion.div>

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
                {/* Heading */}
                <motion.h1
                    className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    Organize Your Tasks Effortlessly
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                    className="text-lg sm:text-xl text-gray-100 mb-8 max-w-2xl mx-auto"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    Stay productive and manage your tasks like a pro with TaskMaster. Whether it's work, personal goals, or team projects, we've got you covered.
                </motion.p>

                {/* Call to Action Button */}
                <motion.button
                    onClick={handleSignUp}
                    className="bg-white text-teal-700 px-8 py-3 text-lg font-semibold rounded-full shadow-lg hover:bg-gray-100 transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    Get Started Now
                </motion.button>
            </div>

            {/* Animated Circles */}
            <motion.div
                className="absolute w-24 h-24 bg-white/10 rounded-full top-20 left-20"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
            ></motion.div>
            <motion.div
                className="absolute w-16 h-16 bg-white/10 rounded-full bottom-10 right-20"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1, delay: 1 }}
            ></motion.div>

            {/* Floating Particles */}
            {[...Array(10)].map((_, index) => (
                <motion.div
                    key={index}
                    className="absolute w-4 h-4 bg-white/20 rounded-full"
                    style={{
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                    }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 2,
                        delay: Math.random() * 2,
                        repeat: Infinity,
                        repeatType: "reverse",
                    }}
                ></motion.div>
            ))}
        </section>
    );
};

export default Banner;