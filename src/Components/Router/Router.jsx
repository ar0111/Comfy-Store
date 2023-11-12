import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Products from "../Pages/Products";
import SingleProduct from "../Pages/SingleProduct";
import Cart from "../Pages/Cart";
import About from "../Pages/About";
import Checkout from "../Pages/Checkout";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Error from "../Pages/Error";
import Landing from "../Pages/Landing";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Order from "../Order/Order";
import Update from "../Pages/Update";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Landing></Landing>,
                loader: ()=>fetch('https://comfy-server-lweo6mwlf-arafat-rahmans-projects.vercel.app/services')
            },
            {
                path:'/home', 
                element:<Landing></Landing>,
                loader: ()=>fetch('https://comfy-server-lweo6mwlf-arafat-rahmans-projects.vercel.app/services')
            },
            {
                path:'/products', 
                element:<Products></Products>,
                loader: ()=>fetch('https://comfy-server-lweo6mwlf-arafat-rahmans-projects.vercel.app/services')
            },
            {
                path:'/products/:id', 
                element:<SingleProduct></SingleProduct>,
                loader: ({params})=>fetch(`https://comfy-server-lweo6mwlf-arafat-rahmans-projects.vercel.app/services/${params.id}`)
            },
            {
                path:'/cart', 
                element:<Cart></Cart>
            },
            {
                path:'/orders', 
                element:<Order></Order>
            },
            {
                path:'/about', 
                element:<About></About>
            },
            {
                path:'/checkout', 
                element:<PrivateRoute><Checkout></Checkout></PrivateRoute>
            },
            {
                path:'/orders/update/:id', 
                element:<Update></Update>,
                loader: ({params})=>fetch(`https://comfy-server-lweo6mwlf-arafat-rahmans-projects.vercel.app/orders/${params.id}`)
            },
            {
                path:'*', 
                element:<Error></Error>
            }
        ]
    },
    {
        path:'/login',
        element:<Login></Login>
    },
    {
        path:'/register',
        element:<Register></Register>
    }
])

export default router;