🚀 Task Management App

A powerful, real-time Task Management Application with a drag-and-drop interface, real-time sync, and authentication.

📌 Live Demo: 🔗 Click Here ```https://task-management-client-767h.vercel.app```
📌 Backend API: 🔗 Click Here ```https://task-management-server-wheat-gamma.vercel.app```

📜 Table of Contents <br/>
✨ Features<br/>
⚙️ Technologies Used<br/>
📦 Dependencies<br/>
🛠️ Installation<br/>
🚀 Usage<br/>
📝 API Endpoints<br/>
🐞 Troubleshooting<br/>
👨‍💻 Contributors<br/>
📄 License


✨ Features
✅ Authentication: Google sign-in with Firebase.
✅ Real-time Sync: WebSockets for instant updates.
✅ Task Management: Add, edit, delete, reorder, and drag tasks across categories.
✅ Categories: Tasks categorized into To-Do, In Progress, and Done.
✅ Database Persistence: Tasks saved in MongoDB via Express.js.
✅ Modern UI: Clean, minimal, and responsive interface.
✅ Optimistic UI Updates: Seamless user experience.
✅ Mobile Responsive: Works smoothly on all devices.



⚙️ Technologies Used
🏗️ Frontend (React + Vite)
React.js ⚛️
Vite ⚡
React Query 🔄
Framer Motion 🎭 (Smooth animations)
TailwindCSS + DaisyUI 🎨 (Beautiful styling)
React Router 🚏 (Navigation)
SweetAlert2 🍭 (Alerts & popups)
Firebase Authentication 🔑 (User login)
🏗️ Backend (Express + MongoDB)
Express.js 🚀 (Server framework)
MongoDB 🛢️ (Database)
Socket.io 🔗 (Real-time updates)
CORS & Morgan 📡 (Security & Logging)
Dotenv 🔐 (Environment variables)


🛠️ Installation
1️⃣ Clone the Repository

git clone: https://github.com/Ashiqur2812/task-management-client
cd task-management-app
2️⃣ Install Frontend Dependencies

cd frontend
npm install
3️⃣ Install Backend Dependencies

cd ../backend
npm install
4️⃣ Configure Environment Variables
Create a .env file in the backend directory:

PORT=4000
MONGO_URI=your_mongodb_connection_string
FIREBASE_API_KEY=your_firebase_api_key
5️⃣ Run the Application
🚀 Start Backend

cd backend
npm run dev
🌐 Start Frontend

cd frontend
npm run dev
Open http://localhost:5173/ in your browser! 🎉

🚀 Usage
1️⃣ Sign in with Google authentication.
2️⃣ Create, edit, and delete tasks with an intuitive UI.
3️⃣ Drag and drop tasks between categories.
4️⃣ Tasks sync instantly with MongoDB using WebSockets.

📝 API Endpoints
Method	Endpoint	Description
POST	/tasks	    Add a new task
GET	    /tasks	    Retrieve all tasks
PUT	    /tasks/:id	Update task details
DELETE	/tasks/:id	Delete a task


🐞 Troubleshooting
🚧 Common Issues & Fixes
❌ MongoDB not connecting? Check your .env file for correct MONGO_URI.
❌ CORS issue? Ensure the backend allows requests from your frontend origin.
❌ WebSockets not working? Make sure the frontend connects to the correct backend URL.

👨‍💻 Contributors
💡 Developed by : Muhammad Ashiqur Rahman
📬 Contact: ashiqur2812@gmail.com

📄 License
📝 This project is licensed under the MIT License.

🎯 Enjoy managing your tasks with ease! 🚀

