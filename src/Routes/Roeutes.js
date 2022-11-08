import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import AllServices from "../Pages/Home/Services/AllServices";
import ServiceInfo from "../Pages/ServiceInfo/ServiceInfo";

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
            }
        ]
    }
]);

export default router;