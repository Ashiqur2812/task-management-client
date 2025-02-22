import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../Home/Home";
import NotFound from "../NotFound/NotFound";
import Login from "../components/Login";
import SignUp from "../components/SignUp";
import Tasks from "../components/Tasks";;
import PrivateRoute from "./PrivateRoute";
import Profile from "../components/Profile";

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
                element: <PrivateRoute><Tasks /></PrivateRoute>
            },
            {
                path: '/profile',
                element: <PrivateRoute><Profile /></PrivateRoute>
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