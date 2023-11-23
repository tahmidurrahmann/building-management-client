import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Error from "../error/Error";
import Home from "../pages/Home/Home/Home";
import Apartment from "../pages/Apartment/Apartment";
import Login from "../pages/Login/Login";
import Register from "../Register/Register";

const router = createBrowserRouter([
    {
        path : "/",
        element : <App></App>,
        errorElement : <Error></Error>,
        children : [
            {
                path : "/",
                element : <Home></Home>,
            },
            {
                path : "/apartment",
                element : <Apartment></Apartment>,
            },
        ]
    },
    {
        path : "/login",
        element : <Login></Login>
    },
    {
        path : "/register",
        element : <Register></Register>,
    },
])

export default router;