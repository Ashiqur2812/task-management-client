import { useState, useEffect, useContext } from "react";
import { motion } from "framer-motion";
import { FaUserCircle, FaEnvelope, FaClock, FaUser } from "react-icons/fa";
import { AuthContext } from "../provider/AuthProvider";

const Profile = () => {
    const { user } = useContext(AuthContext);
    const [loginTime, setLoginTime] = useState("");
    const [bio, setBio] = useState(localStorage.getItem("bio") || "Write something about yourself...");
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        let storedLoginTime = localStorage.getItem("loginTime");
        if (!storedLoginTime) {
            storedLoginTime = new Date().toLocaleTimeString();
            localStorage.setItem("loginTime", storedLoginTime);
        }
        setLoginTime(storedLoginTime);
    }, []);

    // Handle Bio Update
    const handleBioChange = (e) => setBio(e.target.value);

    const saveBio = () => {
        localStorage.setItem("bio", bio);
        setIsEditing(false);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={`min-h-[600px] flex items-center justify-center bg-gray-900 text-white relative overflow-hidden`}
        >
            {/* Profile Card */}
            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className={`relative bg-white/5 bg-opacity-10 backdrop-blur-md shadow-lg rounded-xl p-8 w-full max-w-md mx-4`}
            >
                {/* Profile Photo */}
                <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="flex justify-center"
                >
                    {user?.photoURL ? (
                        <motion.img
                            src={user.photoURL}
                            alt="Profile"
                            className="w-24 h-24 rounded-full border-4 border-sky-400 shadow-lg"
                            whileHover={{ scale: 1.1, rotate: 10 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        />
                    ) : (
                        <FaUserCircle className="text-gray-300 text-7xl" />
                    )}
                </motion.div>

                {/* User Info */}
                <div className="mt-6 text-center space-y-4">
                    <motion.h2
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="text-2xl font-bold text-sky-300"
                    >
                        {user?.displayName || "Anonymous User"}
                    </motion.h2>

                    {/* Email */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="flex items-center justify-between bg-white bg-opacity-20 p-3 rounded-lg"
                    >
                        <div className="flex items-center gap-3">
                            <FaEnvelope className="text-sky-400" />
                            <span>{user?.email || "No Email Available"}</span>
                        </div>
                    </motion.div>

                    {/* Account Role & Creation Time */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className="flex items-center justify-between bg-white bg-opacity-20 p-3 rounded-lg"
                    >
                        <div className="flex items-center gap-3">
                            <FaUser className="text-sky-400" />
                            <span>Role: {user?.email === "admin@example.com" ? "Admin" : "User"}</span>
                        </div>
                    </motion.div>

                    {/* Login Time (Persistent) */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.7 }}
                        className="flex items-center justify-between bg-white bg-opacity-20 p-3 rounded-lg"
                    >
                        <div className="flex items-center gap-3">
                            <FaClock className="text-sky-400" />
                            <span>Logged in at: {loginTime}</span>
                        </div>
                    </motion.div>

                    {/* Bio Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.8 }}
                        className="bg-white bg-opacity-20 p-4 rounded-lg"
                    >
                        <div className="flex justify-between">
                            <h3 className="text-sky-300 font-semibold">Bio</h3>
                            {!isEditing && (
                                <button
                                    onClick={() => setIsEditing(true)}
                                    className="text-xs bg-sky-500 text-white px-2 py-1 rounded-lg hover:bg-sky-600 transition"
                                >
                                    Edit
                                </button>
                            )}
                        </div>

                        {isEditing ? (
                            <div className="mt-2">
                                <textarea
                                    value={bio}
                                    onChange={handleBioChange}
                                    className="w-full bg-transparent border border-sky-400 p-2 rounded-md text-white"
                                    rows="3"
                                ></textarea>
                                <button
                                    onClick={saveBio}
                                    className="mt-2 bg-sky-500 text-white px-3 py-1 rounded-lg hover:bg-sky-600 transition"
                                >
                                    Save
                                </button>
                            </div>
                        ) : (
                            <p className="mt-2 text-sm">{bio}</p>
                        )}
                    </motion.div>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default Profile;
