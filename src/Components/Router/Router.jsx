import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Products from "../Pages/Products";
import SingleProduct from "../Pages/SingleProduct";
import Cart from "../Pages/Cart";
import About from "../Pages/About";
import Checkout from "../Pages/Checkout";
import Orders from "../Pages/Orders";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Error from "../Pages/Error";
import Landing from "../Pages/Landing";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Landing></Landing>,
                loader: ()=>fetch('https://strapi-store-server.onrender.com/api/products?featured=true')
            },
            {
                path:'/home', 
                element:<Landing></Landing>,
                loader: ()=>fetch('https://strapi-store-server.onrender.com/api/products?featured=true')
            },
            {
                path:'/products', 
                element:<Products></Products>,
                loader: ()=>fetch('https://strapi-store-server.onrender.com/api/products')
            },
            {
                path:'/products/:id', 
                element:<SingleProduct></SingleProduct>,
                loader: ({params})=>fetch(`https://strapi-store-server.onrender.com/api/products/${params.id}`)
            },
            {
                path:'/cart', 
                element:<Cart></Cart>
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