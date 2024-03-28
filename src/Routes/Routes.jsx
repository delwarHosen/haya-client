import { createBrowserRouter } from "react-router-dom";
// import "./index.css";
import Home from "../Pages/Home/Home/Home";
import Main from "../Layouts/Main";

export const router = createBrowserRouter([
    {
        path: "/",
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element: <Home></Home>
            }
        ]
    },
]);