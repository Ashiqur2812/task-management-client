import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';

const ThemeToggle = () => {
    const { theme, toggleTheme } = useContext(AuthContext);

    return (
        <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white"
        >
            {theme === 'light' ? '🌙' : '☀️'}
        </button>
    );
};

export default ThemeToggle;