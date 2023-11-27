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
import ManageMembers from "../pages/Dashboard/Admin/ManageMembers";
import PrivateRoute from "../private/PrivateRoute";
import MemberRoute from "../private/MemberRoute";
import AdminRoute from "../private/AdminRoute";
import ManageCoupon from "../pages/Dashboard/Admin/ManageCoupon";
import MakePayment from "../pages/Dashboard/MemberProfile/MakePayment";
import PaymentHistory from "../pages/Dashboard/MemberProfile/PaymentHistory";
import MakePaymentById from "../pages/Dashboard/MemberProfile/MakePaymentById";

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
                element : <PrivateRoute><UserProfile></UserProfile></PrivateRoute>
            },
            {
                path : "announcement",
                element : <PrivateRoute><Announcement></Announcement></PrivateRoute>
            },
            // member
            {
                path : "memberProfile",
                element : <MemberRoute><MemberProfile></MemberProfile></MemberRoute>
            },
            {
                path : "makePayment",
                element : <MemberRoute><MakePayment></MakePayment></MemberRoute>
            },
            {
                path : "makePayments",
                element : <MemberRoute><MakePaymentById></MakePaymentById></MemberRoute>
            },
            {
                path : "paymentHistory",
                element : <MemberRoute><PaymentHistory></PaymentHistory></MemberRoute>
            },
            // admin
            {
                path : "adminProfile",
                element : <AdminRoute><AdminProfile></AdminProfile></AdminRoute>,
            },
            {
                path : "manageMembers",
                element : <AdminRoute><ManageMembers></ManageMembers></AdminRoute>,
            },
            {
                path : "makeAnnouncement",
                element : <AdminRoute><MakeAnnouncement></MakeAnnouncement></AdminRoute>,
            },
            {
                path : "agreementRequest",
                element : <AdminRoute><AgreementRequest></AgreementRequest></AdminRoute>,
            },
            {
                path : "manageCoupons",
                element : <AdminRoute><ManageCoupon></ManageCoupon></AdminRoute>,
            },
        ]
    }
])

export default router;