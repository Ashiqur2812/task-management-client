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
📄 License<br/>


✨ Features<br/>
✅ Authentication: Google sign-in with Firebase.<br/>
✅ Real-time Sync: WebSockets for instant updates.<br/>
✅ Task Management: Add, edit, delete, reorder, and drag tasks across categories.<br/>
✅ Categories: Tasks categorized into To-Do, In Progress, and Done.<br/>
✅ Database Persistence: Tasks saved in MongoDB via Express.js.<br/>
✅ Modern UI: Clean, minimal, and responsive interface.<br/>
✅ Optimistic UI Updates: Seamless user experience.<br/>
✅ Mobile Responsive: Works smoothly on all devices.<br/>



⚙️ Technologies Used<br/>
🏗️ Frontend (React + Vite)<br/>
React.js ⚛️<br/>
Vite ⚡<br/>
React Query 🔄<br/>
Framer Motion 🎭 (Smooth animations)<br/>
TailwindCSS + DaisyUI 🎨 (Beautiful styling)<br/>
React Router 🚏 (Navigation)<br/>
SweetAlert2 🍭 (Alerts & popups)<br/>
Firebase Authentication 🔑 (User login)<br/>
🏗️ Backend (Express + MongoDB)<br/>
Express.js 🚀 (Server framework)<br/>
MongoDB 🛢️ (Database)<br/>
Socket.io 🔗 (Real-time updates)<br/>
CORS & Morgan 📡 (Security & Logging)<br/>
Dotenv 🔐 (Environment variables)<br/>


🛠️ Installation<br/>
1️⃣ Clone the Repository<br/>

git clone: https://github.com/Ashiqur2812/task-management-client
cd task-management-app<br/>
2️⃣ Install Frontend Dependencies<br/>

cd frontend<br/>
npm install<br/>
3️⃣ Install Backend Dependencies<br/>

cd ../backend<br/>
npm install<br/>
4️⃣ Configure Environment Variables<br/>
Create a .env file in the backend directory:<br/>

PORT=4000<br/>
MONGO_URI=your_mongodb_connection_string<br/>
FIREBASE_API_KEY=your_firebase_api_key<br/>
5️⃣ Run the Application<br/>
🚀 Start Backend<br/>

cd backend<br/>
npm run dev<br/>
🌐 Start Frontend<br/>

cd frontend<br/>
npm run dev<br/>
Open http://localhost:5173/ in your browser! 🎉<br/>

🚀 Usage<br/>
1️⃣ Sign in with Google authentication.<br/>
2️⃣ Create, edit, and delete tasks with an intuitive UI.<br/>
3️⃣ Drag and drop tasks between categories.<br/>
4️⃣ Tasks sync instantly with MongoDB using WebSockets.<br/>

📝 API Endpoints<br/>
<table>
    <tr>
        <th>Method</th>
        <th>Endpoint</th>
        <th>Description</th>
    </tr>
    <tr>
        <td>GET</td>
        <td>/api/tasks</td>
        <td>Get all tasks</td>
    </tr>
    <tr>
        <td>POST</td>
        <td>/api/tasks</td>
        <td>Create a new task</td>
    </tr>
    <tr>
        <td>PUT</td>
        <td>/api/tasks/:id</td>
        <td>Update a task</td>
    </tr>
    <tr>
        <td>DELETE</td>
        <td>/api/tasks/:id</td>
        <td>Delete a task</td>
    </tr>
</table>


🐞 Troubleshooting<br/>
🚧 Common Issues & Fixes<br/>
❌ MongoDB not connecting? Check your .env file for correct MONGO_URI.<br/>
❌ CORS issue? Ensure the backend allows requests from your frontend origin.<br/>
❌ WebSockets not working? Make sure the frontend connects to the correct backend URL.<br/>

👨‍💻 Contributors<br/>
💡 Developed by : Muhammad Ashiqur Rahman<br/>
📬 Contact: ashiqur2812@gmail.com<br/>

📄 License<br/>
📝 This project is licensed under the MIT License.<br/>

🎯 Enjoy managing your tasks with ease! 🚀

