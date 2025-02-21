import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";

const Footer = () => {
    return (
        <motion.footer
            className="relative bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-12 px-6 md:px-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
        >
            {/* Floating Animated Elements */}
            <motion.div
                className="absolute inset-0 pointer-events-none"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2 }}
            >
                {[...Array(15)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-2 h-2 bg-white rounded-full opacity-30"
                        style={{
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                        }}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{
                            duration: Math.random() * 3 + 2,
                            repeat: Infinity,
                            repeatType: "reverse",
                            delay: Math.random() * 2,
                        }}
                    />
                ))}
            </motion.div>

            {/* Footer Content */}
            <div className="max-w-7xl mx-auto text-center">
                <motion.h2
                    className="text-3xl font-bold tracking-wide"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    Task Management Made Easy 🚀
                </motion.h2>
                <motion.p
                    className="text-gray-300 text-lg mt-2"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    Stay productive and organized with our seamless task management platform.
                </motion.p>

                {/* Social Media Icons */}
                <motion.div
                    className="flex justify-center space-x-6 mt-6"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    {[
                        { icon: FaFacebookF, link: "/facebook" },
                        { icon: FaTwitter, link: "/twitter" },
                        { icon: FaLinkedinIn, link: "/linkedin" },
                        { icon: FaGithub, link: "/github" },
                    ].map(({ icon: Icon, link }, i) => (
                        <motion.div
                            key={i}
                            className="p-3 bg-gray-700 rounded-full hover:bg-blue-600 transition-all duration-300 cursor-pointer"
                            whileHover={{ scale: 1.2, rotate: 10 }}
                        >
                            <Link to={link}>
                                <Icon className="text-white text-2xl" />
                            </Link>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Footer Links */}
                <motion.div
                    className="flex flex-wrap justify-center space-x-6 mt-6 text-gray-300 text-sm"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    {[
                        { text: "About", link: "/about" },
                        { text: "Contact", link: "/contact" },
                        { text: "Privacy Policy", link: "/privacy-policy" },
                        { text: "Terms of Service", link: "/terms-of-service" },
                    ].map(({ text, link }, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ scale: 1.1 }}
                        >
                            <Link to={link} className="hover:text-white transition-all duration-300">
                                {text}
                            </Link>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Copyright Section */}
                <motion.div
                    className="text-gray-400 text-xs mt-6"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    © {new Date().getFullYear()} Task Manager. All rights reserved.
                </motion.div>
            </div>
        </motion.footer>
    );
};

export default Footer;
