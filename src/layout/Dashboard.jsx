import { NavLink, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useAdmin from "../hooks/useAdmin";
import useMember from "../hooks/useMember";
import { IoHomeOutline } from "react-icons/io5";
import Loading from "../Loading/Loading";

const Dashboard = () => {

    const { user } = useAuth();
    const [isAdmin, pending] = useAdmin();
    const [isMember, isPending] = useMember();

    if(isPending){
        return <Loading></Loading>
    }

    if(pending){
        return <Loading></Loading>
    }

    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-12">
                <div className="col-span-1 md:col-span-3 xl:col-span-2">
                    <div className="bg-gray-50 md:min-h-screen">
                        <h1 className="text-center md:text-xl xl:text-2xl font-bold py-4">THE GLASS HOUSE</h1>
                        <div>
                            {
                                user && isAdmin && <div className="flex flex-col  space-y-4 pt-4 justify-center items-center">
                                    <NavLink
                                        to="/dashboard/adminProfile"
                                        className={({ isActive, isPending }) =>
                                            isPending ? "pending" : isActive ? "text-blue-500 bg-white w-full text-xl font-semibold py-3 text-center" : "text-black text-xl font-semibold text-center"
                                        }
                                    >
                                        Admin Profile
                                    </NavLink>
                                    <NavLink
                                        to="/dashboard/manageMembers"
                                        className={({ isActive, isPending }) =>
                                            isPending ? "pending" : isActive ? "text-blue-500 bg-white w-full text-xl font-semibold py-3 text-center" : "text-black text-xl font-semibold text-center"
                                        }
                                    >
                                        Manage Members
                                    </NavLink>
                                    <NavLink
                                        to="/dashboard/makeAnnouncement"
                                        className={({ isActive, isPending }) =>
                                            isPending ? "pending" : isActive ? "text-blue-500 bg-white w-full text-xl font-semibold py-3 text-center" : "text-black text-xl font-semibold text-center"
                                        }
                                    >
                                        Make Announcement
                                    </NavLink>
                                    <NavLink
                                        to="/dashboard/agreementRequest"
                                        className={({ isActive, isPending }) =>
                                            isPending ? "pending" : isActive ? "text-blue-500 bg-white w-full text-xl font-semibold py-3 text-center" : "text-black text-xl font-semibold text-center"
                                        }
                                    >
                                        Agreement Request
                                    </NavLink>
                                    <NavLink
                                        to="/dashboard/manageCoupons"
                                        className={({ isActive, isPending }) =>
                                            isPending ? "pending" : isActive ? "text-blue-500 bg-white w-full text-xl font-semibold py-3 text-center" : "text-black text-xl font-semibold"
                                        }
                                    >
                                        Manage Coupons
                                    </NavLink>
                                </div>
                            }
                            {
                                user && !isAdmin && isMember && <div className="flex flex-col  space-y-4 pt-4 justify-center items-center">
                                    <NavLink
                                        to="/dashboard/memberProfile"
                                        className={({ isActive, isPending }) =>
                                            isPending ? "pending" : isActive ? "text-blue-500 bg-white w-full text-xl font-semibold py-3 text-center" : "text-black text-xl font-semibold text-center"
                                        }
                                    >
                                        My Profile
                                    </NavLink>
                                    <NavLink
                                        to="/dashboard/makePayment"
                                        className={({ isActive, isPending }) =>
                                            isPending ? "pending" : isActive ? "text-blue-500 bg-white w-full text-xl font-semibold py-3 text-center" : "text-black text-xl font-semibold text-center"
                                        }
                                    >
                                        Make Payment
                                    </NavLink>
                                    <NavLink
                                        to="/dashboard/paymentHistory"
                                        className={({ isActive, isPending }) =>
                                            isPending ? "pending" : isActive ? "text-blue-500 bg-white w-full text-xl font-semibold py-3 text-center" : "text-black text-xl font-semibold text-center"
                                        }
                                    >
                                        Payment History
                                    </NavLink>
                                    <NavLink
                                        to="/dashboard/announcement"
                                        className={({ isActive, isPending }) =>
                                            isPending ? "pending" : isActive ? "text-blue-500 bg-white w-full text-xl font-semibold py-3 text-center" : "text-black text-xl font-semibold text-center"
                                        }
                                    >
                                        Announcements
                                    </NavLink>
                                </div>
                            }
                            {
                                user && !isAdmin && !isMember && <div className="flex flex-col  space-y-4 pt-4 justify-center items-center">
                                    <NavLink
                                        to="/dashboard/userProfile"
                                        className={({ isActive, isPending }) =>
                                            isPending ? "pending" : isActive ? "text-blue-500 bg-white w-full text-xl font-semibold py-3 text-center" : "text-black text-xl font-semibold text-center"
                                        }
                                    >
                                        My Profile
                                    </NavLink>
                                    <NavLink
                                        to="/dashboard/announcement"
                                        className={({ isActive, isPending }) =>
                                            isPending ? "pending" : isActive ? "text-blue-500 bg-white w-full text-xl font-semibold py-3 text-center" : "text-black text-xl font-semibold text-center"
                                        }
                                    >
                                        Announcements
                                    </NavLink>
                                </div>
                            }
                        </div>
                        <br />
                        <div className="divider w-3/4 mx-auto"></div>
                        <br />
                        <div className="flex justify-center items-center pb-3 md:pb-0">
                            <NavLink
                                to="/"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-blue-500 bg-white w-full text-xl font-semibold py-3" : "text-black text-xl font-semibold"
                                }
                            >
                               <span className="flex justify-center items-center gap-2"><IoHomeOutline /> Home</span>
                            </NavLink>
                        </div>
                    </div>
                </div>
                <div className="col-span-1 md:col-span-9 xl:col-span-10">
                    <Outlet></Outlet>
                </div>
            </div>
        </div >
    );
};

export default Dashboard;