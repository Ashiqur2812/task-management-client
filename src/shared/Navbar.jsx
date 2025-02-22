import { Link, NavLink } from 'react-router-dom';
import { useContext, useState } from 'react';
import logo from '../../src/assets/A professional logo.webp';
import './Navbar.css'; ;
import { AuthContext } from '../provider/AuthProvider';

const Navbar = () => {
    const { user, signOutUser } = useContext(AuthContext);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const links = <>
        <li><NavLink to='/' className="nav-link hover:scale-110 transition-transform duration-300">Home</NavLink></li>
        <li><NavLink to='/tasks' className="nav-link hover:scale-110 transition-transform duration-300">Tasks</NavLink></li>
        <li><NavLink to='/profile' className="nav-link hover:scale-110 transition-transform duration-300">Profile</NavLink></li>
    </>;

    return (
        <div className='mb-28'>
            <div className="navbar fixed w-full top-0 z-50 backdrop-blur-lg md:px-8 py-8 md:py-5">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow font-medium">
                            {links}
                        </ul>
                    </div>
                    <div className='flex items-center'>
                        <div>
                            <img className='w-8 lg:w-16 h-8 lg:h-16 object-cover rounded-xl hover:rotate-360 transition-transform duration-1000 invisible md:visible lg:invisible xl:visible' src={logo} alt="Logo" />
                        </div>
                        <div>
                            <Link to='/' className="btn btn-ghost text-lg md:text-3xl hover:text-rose-500 ">TaskMaster</Link>
                        </div>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 font-medium md:space-x-4">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end flex items-center gap-4">
                    {
                        user && user?.email ? <>
                            <img referrerPolicy='no-referrer' className="h-8 md:h-10 w-8 md:w-10 rounded-full object-cover" src={user?.photoURL} alt="User" />
                            <div className="text-sm text-center hidden md:block">
                                <p>{user?.displayName}</p>
                                <p>{user?.email}</p>
                            </div>
                            <button
                                onClick={signOutUser}
                                className="relative inline-flex items-center justify-center px-4 py-2 sm:px-6 sm:py-2.5 md:px-8 md:py-3 overflow-hidden tracking-tighter text-white bg-gray-800 rounded-md group hover:bg-gray-700 transition-colors duration-300"
                            >
                                {/* Background Animation */}
                                <span
                                    className="absolute w-0 h-0 transition-all duration-500 ease-out bg-orange-600 rounded-full group-hover:w-56 group-hover:h-56"
                                ></span>

                                {/* Left SVG */}
                                <span className="absolute bottom-0 left-0 h-full -ml-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-auto h-full opacity-100 object-stretch"
                                        viewBox="0 0 487 487"
                                    >
                                        <path
                                            fillOpacity=".1"
                                            fillRule="nonzero"
                                            fill="#FFF"
                                            d="M0 .3c67 2.1 134.1 4.3 186.3 37 52.2 32.7 89.6 95.8 112.8 150.6 23.2 54.8 32.3 101.4 61.2 149.9 28.9 48.4 77.7 98.8 126.4 149.2H0V.3z"
                                        ></path>
                                    </svg>
                                </span>

                                {/* Right SVG */}
                                <span className="absolute top-0 right-0 w-12 h-full -mr-3">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="object-cover w-full h-full"
                                        viewBox="0 0 487 487"
                                    >
                                        <path
                                            fillOpacity=".1"
                                            fillRule="nonzero"
                                            fill="#FFF"
                                            d="M487 486.7c-66.1-3.6-132.3-7.3-186.3-37s-95.9-85.3-126.2-137.2c-30.4-51.8-49.3-99.9-76.5-151.4C70.9 109.6 35.6 54.8.3 0H487v486.7z"
                                        ></path>
                                    </svg>
                                </span>

                                {/* Gradient Overlay */}
                                <span
                                    className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-200"
                                ></span>

                                {/* Button Text */}
                                <span className="relative text-xs font-medium">Log Out</span>
                            </button>
                        </>
                            : <>
                                <Link to='/login'>
                                    <button
                                        className="relative inline-flex items-center justify-center px-8 py-2.5 overflow-hidden tracking-tighter text-white bg-gray-800 rounded-md group"
                                    >
                                        {/* Background Animation */}
                                        <span
                                            className="absolute w-0 h-0 transition-all duration-500 ease-out bg-emerald-600 rounded-full group-hover:w-56 group-hover:h-56"
                                        ></span>

                                        {/* Left SVG */}
                                        <span className="absolute bottom-0 left-0 h-full -ml-2">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="w-auto h-full opacity-100 object-stretch"
                                                viewBox="0 0 487 487"
                                            >
                                                <path
                                                    fillOpacity=".1"
                                                    fillRule="nonzero"
                                                    fill="#FFF"
                                                    d="M0 .3c67 2.1 134.1 4.3 186.3 37 52.2 32.7 89.6 95.8 112.8 150.6 23.2 54.8 32.3 101.4 61.2 149.9 28.9 48.4 77.7 98.8 126.4 149.2H0V.3z"
                                                ></path>
                                            </svg>
                                        </span>

                                        {/* Right SVG */}
                                        <span className="absolute top-0 right-0 w-12 h-full -mr-3">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="object-cover w-full h-full"
                                                viewBox="0 0 487 487"
                                            >
                                                <path
                                                    fillOpacity=".1"
                                                    fillRule="nonzero"
                                                    fill="#FFF"
                                                    d="M487 486.7c-66.1-3.6-132.3-7.3-186.3-37s-95.9-85.3-126.2-137.2c-30.4-51.8-49.3-99.9-76.5-151.4C70.9 109.6 35.6 54.8.3 0H487v486.7z"
                                                ></path>
                                            </svg>
                                        </span>

                                        {/* Gradient Overlay */}
                                        <span
                                            className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-200"
                                        ></span>

                                        {/* Button Text */}
                                        <span className="relative text-base font-semibold">Login</span>
                                    </button>
                                </Link>
                            </>
                    }
                </div>
                {isMenuOpen && (
                    <div className="lg:hidden flex flex-col items-center space-y-4 py-4 font-medium bg-base-100 w-full mt-2 rounded-box shadow">
                        {links}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navbar;