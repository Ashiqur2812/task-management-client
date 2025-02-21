import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../Home/Home";
import NotFound from "../NotFound/NotFound";
import Login from "../components/Login";
import SignUp from "../components/SignUp";
import Tasks from "../components/Tasks";
import AddTask from "../components/AddTask";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: '/tasks',
                element: <Tasks />
            },
            {
                path: 'add-tasks',
                element: <AddTask />
            }
        ]
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/signup',
        element: <SignUp />
    },
    {
        path: '*',
        element: <NotFound />
    }
]);