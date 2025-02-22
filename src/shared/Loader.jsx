import React from 'react';

const Loader = () => {
    return (
        <div>
            <div class="flex-col min-h-screen gap-4 w-full flex items-center justify-center">
                <div
                    class="w-32 h-32 border-4 border-transparent text-blue-400 text-4xl animate-spin flex items-center justify-center border-t-blue-400 rounded-full"
                >
                    <div
                        class="w-28 h-28 border-4 border-transparent text-red-400 text-2xl animate-spin flex items-center justify-center border-t-red-400 rounded-full"
                    ></div>
                </div>
            </div>
        </div>
    );
};

export default Loader;