import { Link, useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { TbFidgetSpinner } from 'react-icons/tb';
import Swal from 'sweetalert2';
import { motion } from 'framer-motion';
import bgImg from '../assets/register.jpg';
import { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';

const SignUp = () => {
    const { createUser, googleAuth, loading} = useContext(AuthContext)
    const navigate = useNavigate();

    // Form Submit Handler
    const handleSubmit = async e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
       const registerUser = { name, email, password};
       console.log(registerUser)

        try {
            const result = await createUser(email, password);
            // if (result?.user) {
            //     userSetToDb({ displayName: name, photoURL, email });
            // }

            // await updateUserProfile(name, photoURL);

            // 🎉 Gorgeous Animated SweetAlert
            Swal.fire({
                title: 'Welcome to Task management app!',
                text: "You're now a proud member... 🎊",
                imageUrl: 'https://media.giphy.com/media/3o7bu3XilJ5BOiSGic/giphy.gif',
                imageWidth: 200,
                imageHeight: 200,
                imageAlt: 'Funny house gif',
                showConfirmButton: false,
                timer: 4000,
                background: '#fff8e1'
            });

            navigate('/');
        } catch (err) {
            Swal.fire({
                title: `Oops! ${err?.message}`,
                icon: "error",
                showClass: {
                    popup: "animate__animated animate__shakeX"
                },
                hideClass: {
                    popup: "animate__animated animate__fadeOut"
                },
                backdrop: `rgba(0,0,0,0.4) url("https://media.giphy.com/media/l2SpZkQ0XT0j6vCko/giphy.gif") left top no-repeat`
            });
        }
    };

    // Handle Google Sign-in
    const handleGoogleSignIn = async () => {
        try {
            const data = await googleAuth();
            // if (data?.user) {
            //     userSetToDb({ displayName: data.user?.displayName, photoURL: data.user?.photoURL, email: data.user?.email });
            // }

            Swal.fire({
                title: '🌍 Signed Up with Google!',
                text: "Welcome to Task Management App!",
                icon: "success",
                showConfirmButton: false,
                timer: 4000
            });

            navigate('/');
        } catch (err) {
            Swal.fire({
                title: `${err?.message}`,
                icon: "error"
            });
        }
    };

    return (
        <div className='relative min-h-screen flex items-center justify-center bg-cover bg-center'
            style={{
                backgroundImage: `url(${bgImg})`
            }}>

            {/* Overlay Effect */}
            <div className="absolute inset-0 bg-black/40 bg-opacity-40"></div>

            {/* Main Content */}
            <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="relative z-10 max-w-md p-4 md:px-20 bg-opacity-90 backdrop-blur-2xl shadow-2xl rounded-lg"
            >
                <div className='text-center mb-6'>
                    <h1 className='text-4xl font-extrabold text-white animate__animated animate__bounce pb-4'>
                        Sign Up 🎊
                    </h1>
                    <p className='text-sm text-white'>Create Your Account</p>
                </div>

                <form onSubmit={handleSubmit} className='space-y-5'>
                    <motion.div initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.5 }}>
                        <label className='block text-sm font-medium text-white'>Name</label>
                        <input type='text' name='name' className='w-full p-3 border rounded-lg focus:outline-teal-500 bg-gray-200' />
                    </motion.div>

                    <motion.div initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.5 }}>
                        <label className='block text-sm font-medium text-white'>Email</label>
                        <input type='email' name='email' className='w-full p-3 border rounded-lg focus:outline-teal-500 bg-gray-200' />
                    </motion.div>

                    <motion.div initial={{ x: 50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.5 }}>
                        <label className='block text-sm font-medium text-white'>Password</label>
                        <input type='password' name='password' className='w-full p-3 border rounded-lg focus:outline-teal-500 bg-gray-200' />
                    </motion.div>

                    <motion.button
                        type='submit'
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className='w-full bg-gradient-to-r from-teal-500 to-green-400 text-white py-3 rounded-lg shadow-md flex items-center justify-center'
                    >
                        {loading ? <TbFidgetSpinner className='animate-spin text-2xl' /> : "Sign Up 🚀"}
                    </motion.button>
                </form>

                <div className='text-center mt-4'>
                    <p className='text-sm text-white'>Or sign up with</p>
                    <motion.div
                        onClick={handleGoogleSignIn}
                        className="flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 rounded-md cursor-pointer hover:bg-gray-50 transition-all duration-300 "
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 1.6 }}
                    >
                        <FcGoogle size={32} />
                        <p className='text-white hover:text-black hover:font-semibold'>Continue with Google</p>
                    </motion.div>
                </div>

                <p className='mt-4 text-center text-sm text-white'>Already have an account?
                    <Link to='/login' className='hover:text-teal-600 hover:underline'>
                        Login
                    </Link>
                    <br />
                    <Link to='/' className='hover:text-teal-600 hover:underline'>
                        Go Home
                    </Link>
                </p>
            </motion.div>
        </div>
    );
};

export default SignUp;
