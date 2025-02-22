import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const testimonials = [
    {
        name: "John Doe",
        role: "Product Manager",
        quote: "TaskMaster has completely transformed how I manage my team's tasks. It's like having a personal assistant!",
        image: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
        name: "Jane Smith",
        role: "Freelance Designer",
        quote: "I love how intuitive and fun TaskMaster is. It makes task management feel like a game!",
        image: "https://randomuser.me/api/portraits/women/2.jpg",
    },
    {
        name: "Alice Johnson",
        role: "Software Developer",
        quote: "The progress analytics feature is a game-changer. I can finally see where my time goes!",
        image: "https://randomuser.me/api/portraits/women/3.jpg",
    },
];

const TestimonialCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextTestimonial = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <section className="py-16 bg-gradient-to-r from-teal-600 to-sky-500">
            <div className="container mx-auto px-4">
                {/* Section Heading */}
                <motion.h2
                    className="text-4xl sm:text-5xl font-bold text-center text-white mb-12"
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    What Our Users Say
                </motion.h2>

                {/* Testimonial Card */}
                <div className="relative flex justify-center items-center">
                    {/* Previous Button */}
                    <button
                        onClick={prevTestimonial}
                        className="absolute left-0 text-white text-4xl z-10"
                    >
                        &larr;
                    </button>

                    {/* Testimonial Content */}
                    <motion.div
                        key={currentIndex}
                        className="bg-white p-8 rounded-xl shadow-lg max-w-2xl mx-auto text-center"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <FaQuoteLeft className="text-4xl text-teal-500 mx-auto mb-4" />
                        <p className="text-gray-700 text-lg mb-6">{testimonials[currentIndex].quote}</p>
                        <FaQuoteRight className="text-4xl text-teal-500 mx-auto mb-4" />
                        <div className="flex items-center justify-center space-x-4">
                            <img
                                src={testimonials[currentIndex].image}
                                alt={testimonials[currentIndex].name}
                                className="w-16 h-16 rounded-full border-4 border-teal-500"
                            />
                            <div>
                                <h3 className="text-xl font-semibold text-gray-900">{testimonials[currentIndex].name}</h3>
                                <p className="text-gray-600">{testimonials[currentIndex].role}</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Next Button */}
                    <button
                        onClick={nextTestimonial}
                        className="absolute right-0 text-white text-4xl z-10"
                    >
                        &rarr;
                    </button>
                </div>
            </div>
        </section>
    );
};

export default TestimonialCarousel;