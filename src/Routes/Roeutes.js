import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import AddService from "../Pages/Addservice/AddService";
import Home from "../Pages/Home/Home/Home";
import AllServices from "../Pages/Home/Services/AllServices";
import Login from "../Pages/Login/Login";
import MyReview from "../Pages/MyReview/MyReview";
import ServiceInfo from "../Pages/ServiceInfo/ServiceInfo";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRoutes from "./PrivateRoutes";

const router = createBrowserRouter([
    {
        path:'/',
        element: <Main></Main>,
        children: [
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/services',
                element: <AllServices></AllServices>,
                loader: () => fetch('http://localhost:5000/allservices')
            },
            {
                path: '/services/services/:id',
                element: <ServiceInfo></ServiceInfo>,
                loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path:'/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element:<SignUp></SignUp>
            },
            {
                path:'/myreview',
                element: <PrivateRoutes><MyReview></MyReview></PrivateRoutes>
            },
            {
                path:'/addservice',
                element: <PrivateRoutes><AddService></AddService></PrivateRoutes>
            }
        ]
    }
]);

export default router;