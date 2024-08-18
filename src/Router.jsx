import {
    createBrowserRouter
} from "react-router-dom";
import MainLayout from "./mainLayout/MainLayout";
import Login from "./authentication/Login";
import Register from "./authentication/Register";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
    },
    {
        path:'/login',
        element:<Login></Login>
    },
    {
        path:'/register',
        element:<Register></Register>
    }
]);