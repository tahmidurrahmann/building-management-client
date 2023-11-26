import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Error from "../error/Error";
import Home from "../pages/Home/Home/Home";
import Apartment from "../pages/Apartment/Apartment";
import Login from "../pages/Login/Login";
import Register from "../Register/Register";
import UserProfile from "../pages/Dashboard/UserInfo/UserProfile";
import Announcement from "../pages/Dashboard/Announcement/Announcement";
import AdminProfile from "../pages/Dashboard/Admin/AdminProfile";
import Dashboard from "../layout/Dashboard";
import MemberProfile from "../pages/Dashboard/MemberProfile/MemberProfile";
import AgreementRequest from "../pages/Dashboard/Admin/AgreementRequest";
import MakeAnnouncement from "../pages/Dashboard/Admin/MakeAnnouncement";

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
    {
        path : "dashboard",
        element : <Dashboard></Dashboard>,
        children : [
            // user
            {
                path : "userProfile",
                element : <UserProfile></UserProfile>
            },
            {
                path : "announcement",
                element : <Announcement></Announcement>
            },
            // member
            {
                path : "memberProfile",
                element : <MemberProfile></MemberProfile>
            },
            // admin
            {
                path : "adminProfile",
                element : <AdminProfile></AdminProfile>,
            },
            {
                path : "makeAnnouncement",
                element : <MakeAnnouncement></MakeAnnouncement>,
            },
            {
                path : "agreementRequest",
                element : <AgreementRequest></AgreementRequest>,
            },
        ]
    }
])

export default router;