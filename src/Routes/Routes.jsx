import { createBrowserRouter } from "react-router-dom";
// import "./index.css";
import Home from "../Pages/Home/Home/Home";
import Main from "../Layouts/Main";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/Login/SignUp";
import Secret from "../Pages/Shared/Secret/Secret";
import PrivateRoutes from "./PrivateRoutes";
// import CheckOut from "../Pages/CheckOut/CheckOut";
import Details from "../Pages/Details/Details";
// import Cart from "../Pages/Cart/Cart";
import Products from "../Pages/Home/Products/Products";
import Dashboard from "../Layouts/Dashboard";
import Cart from "../Pages/Dashboard/Cart/Cart";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import AddProduct from "../Pages/Dashboard/AddProduct/AddProduct";
import AdminRoutes from "./AdminRoutes";
import ManageItems from "../Pages/Dashboard/ManageItems/ManageItems";
import UpdateProduct from "../Pages/Dashboard/UpdateProduct/UpdateProduct";
// import Dashboard from "../Layouts/Dashboard";
// import Cart from "../Pages/Dashboard/Cart/Cart";
// import Cart from "../Pages/Dashboard/Cart/Cart";

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
            {
                path: 'detail/:id',
                element: <Details></Details>,
                loader: ({ params }) => fetch(`http://localhost:5000/products/${params.id}`)
            },
        ]
    },
    {
        path: 'dashboard',
        element: <PrivateRoutes><Dashboard></Dashboard></PrivateRoutes>,
        children: [
            {
                path: 'cart',
                element: <Cart></Cart>
            },
            // addmin routes
            {
                path: 'addProduct',
                // element:<AddProduct></AddProduct>
                element: <AdminRoutes><AddProduct></AddProduct></AdminRoutes>
            },
            {
                path: 'manageProduct',
                element: <AdminRoutes><ManageItems></ManageItems></AdminRoutes>
            },
            {
                path:'updateProduct/:id',
                element: <AdminRoutes><UpdateProduct></UpdateProduct></AdminRoutes>,
                loader: ({ params }) => fetch(`http://localhost:5000/products/${params.id}`)
            },
            {
                path: 'allUsers',
                // element:<AllUsers></AllUsers>
                element: <AdminRoutes><AllUsers></AllUsers></AdminRoutes>
            }
        ]
    }
]);