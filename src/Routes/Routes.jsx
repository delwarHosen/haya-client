import { createBrowserRouter } from "react-router-dom";
// import "./index.css";
import Home from "../Pages/Home/Home/Home";
import Main from "../Layouts/Main";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/Login/SignUp";
import Secret from "../Pages/Shared/Secret/Secret";
import PrivateRoutes from "./PrivateRoutes";
import CheckOut from "../Pages/CheckOut/CheckOut";
import Details from "../Pages/Details/Details";
import Cart from "../Pages/Cart/Cart";
import Products from "../Pages/Home/Products/Products";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/shop',
                element: <Products></Products>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: 'signup',
                element: <SignUp></SignUp>
            },
            {
                path: 'secret',
                element: <PrivateRoutes> <Secret></Secret></PrivateRoutes>
            },
            // {
            //     path: 'checkout/:id',
            //     element: <CheckOut></CheckOut>,
            //     loader: ({params})=>fetch(`http://localhost:5000/products/${params.id}`)
            // },
            {
                path: 'detail/:id',
                element: <Details></Details>,
                loader: ({ params }) => fetch(`http://localhost:5000/products/${params.id}`)
            },
            {
                path: 'cart',
                element: <Cart></Cart>
            }
        ]
    },
]);