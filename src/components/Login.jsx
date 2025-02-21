import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { TbFidgetSpinner } from 'react-icons/tb';
import Swal from 'sweetalert2';
import { motion } from 'framer-motion';
import bgImage from '../assets/login.jpg';
import { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import Loader from '../shared/Loader';

const Login = () => {
    const { signInUser, googleAuth, loading, user } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname || '/';

    if (user) return <Navigate to={from} replace={true} />;
    if (loading) return <Loader />;

    // Form submit handler
    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        try {
            // User Login
            await signInUser(email, password);
            Swal.fire({
                title: 'Welcome Back! 🎉',
                text: 'Login Successful! Ready to find your dream home? 🏡',
                icon: 'success',
                imageUrl: 'https://media.giphy.com/media/3o7abAHdYvZdBNnGZq/giphy.gif', // Add a fun GIF
                imageWidth: 200,
                imageHeight: 200,
                background: '#f0f8ff', // Light blue background
                color: '#ff6f61', // Coral text color
                confirmButtonText: 'Let’s Go! 🚀',
                confirmButtonColor: '#ff6f61', // Coral button color
                showClass: {
                    popup: 'animate__animated animate__bounceIn' // Animate.css for bounce-in effect
                },
                hideClass: {
                    popup: 'animate__animated animate__bounceOut' // Animate.css for bounce-out effect
                },
                timer: 4000,
                timerProgressBar: true,
                willClose: () => {
                    navigate(from, { replace: true });
                }
            });
        } catch (err) {
            Swal.fire({
                title: 'Oops! 😅',
                text: `${err?.message}`,
                icon: 'error',
                imageUrl: 'https://media.giphy.com/media/3o7aD2X9H6xz7M7hG8/giphy.gif',
                imageWidth: 150,
                imageHeight: 150,
                background: '#fff3e6',
                color: '#ff6f61',
                confirmButtonText: 'Try Again 🔄',
                confirmButtonColor: '#ff6f61',
                showClass: {
                    popup: 'animate__animated animate__shakeX'
                }
            });
        }
    };

    // Handle Google Signin
    const handleGoogleSignIn = async () => {
        try {
            // User Registration using Google
            const data = await googleAuth();
            Swal.fire({
                title: 'Welcome! 🎉',
                text: 'Login Successful! Ready to explore amazing properties? �',
                icon: 'success',
                imageUrl: 'https://media.giphy.com/media/3o7abAHdYvZdBNnGZq/giphy.gif',
                imageWidth: 200,
                imageHeight: 200,
                background: '#f0f8ff',
                color: '#ff6f61',
                confirmButtonText: 'Let’s Go! 🚀',
                confirmButtonColor: '#ff6f61',
                showClass: {
                    popup: 'animate__animated animate__bounceIn'
                },
                hideClass: {
                    popup: 'animate__animated animate__bounceOut'
                },
                timer: 4000,
                timerProgressBar: true,
                willClose: () => {
                    navigate(from, { replace: true });
                }
            });
        } catch (err) {
            Swal.fire({
                title: 'Oops! 😅',
                text: `${err?.message}`,
                icon: 'error',
                imageUrl: 'https://media.giphy.com/media/3o7aD2X9H6xz7M7hG8/giphy.gif',
                imageWidth: 150,
                imageHeight: 150,
                background: '#fff3e6',
                color: '#ff6f61',
                confirmButtonText: 'Try Again 🔄',
                confirmButtonColor: '#ff6f61',
                showClass: {
                    popup: 'animate__animated animate__shakeX'
                }
            });
        }
    };

    return (
        <div
            className="flex justify-center items-center min-h-screen bg-cover bg-center "
            style={{
                backgroundImage: `url(${bgImage})`,
            }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-opacity-50"></div>

            {/* Login Form */}
            <motion.div
                className="flex flex-col max-w-md p-6 rounded-md sm:p-10 xl:p-16  bg-opacity-90 backdrop-blur-xl text-gray-900 relative z-10"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div className="mb-8 text-center">
                    <motion.h1
                        className="my-3 text-4xl font-bold text-teal-600"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        TaskMaster
                    </motion.h1>
                    <motion.p
                        className="text-sm text-white"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        Your Ultimate Task Management Solution
                    </motion.p>
                </div>

                {/* Login Form */}
                <form
                    onSubmit={handleSubmit}
                    noValidate=""
                    action=""
                    className="space-y-6"
                >
                    <div className="space-y-4">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                        >
                            <label className="block mb-2 text-sm text-white">
                                Email address
                            </label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                required
                                placeholder="Enter Your Email Here"
                                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-teal-500 bg-gray-100 text-gray-900"
                            />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.8 }}
                        >
                            <div className="flex justify-between">
                                <label className="text-sm mb-2 text-white">
                                    Password
                                </label>
                            </div>
                            <input
                                type="password"
                                name="password"
                                autoComplete="current-password"
                                id="password"
                                required
                                placeholder="*******"
                                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-teal-500 bg-gray-100 text-gray-900"
                            />
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 1 }}
                    >
                        <button
                            type="submit"
                            className="bg-teal-500 w-full rounded-md py-3 text-white hover:bg-teal-600 transition-all duration-300"
                        >
                            {loading ? (
                                <TbFidgetSpinner className="animate-spin m-auto" />
                            ) : (
                                'Continue'
                            )}
                        </button>
                    </motion.div>
                </form>

                {/* Social Login Divider */}
                <motion.div
                    className="flex items-center pt-4 space-x-1"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.4 }}
                >
                    <div className="flex-1 h-px sm:w-16 bg-gray-200"></div>
                    <p className="px-3 text-sm text-white">Login with social accounts</p>
                    <div className="flex-1 h-px sm:w-16 bg-gray-200"></div>
                </motion.div>

                {/* Google Login Button */}
                <motion.div
                    onClick={handleGoogleSignIn}
                    className="flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 rounded-md cursor-pointer transition-all duration-300 hover:animate-pulse"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.6 }}
                >
                    <FcGoogle size={32} />
                    <p className='text-white '>Continue with Google</p>
                </motion.div>

                {/* Sign Up Link */}
                <motion.p
                    className="px-6 text-sm text-center text-white"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.8 }}
                >
                    Don&apos;t have an account yet?{' '}
                    <Link
                        to="/signup"
                        className="hover:underline hover:text-rose-500 text-white"
                    >
                        Sign up
                    </Link>
                    <br />
                    <Link
                        to="/"
                        className="hover:underline hover:text-pink-500 text-white"
                    >
                        Go Home
                    </Link>
                    .
                </motion.p>
            </motion.div>
        </div>
    );
};

export default Login;