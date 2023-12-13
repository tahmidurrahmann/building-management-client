import { NavLink, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useAdmin from "../hooks/useAdmin";
import useMember from "../hooks/useMember";
import { IoHomeOutline } from "react-icons/io5";
import Loading from "../Loading/Loading";
import { FaUser } from "react-icons/fa";
import { FaHistory } from "react-icons/fa";
import { MdPayment } from "react-icons/md";
import { MdAnnouncement } from "react-icons/md";
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import { TfiAnnouncement } from "react-icons/tfi";
import { RiCoupon2Line } from "react-icons/ri";
import { RiPassPendingLine } from "react-icons/ri";
import { MdOutlineManageAccounts } from "react-icons/md";
import { MdEvent } from "react-icons/md";

const Dashboard = () => {

    const { user } = useAuth();
    const [isAdmin, pending] = useAdmin();
    const [isMember, isPending] = useMember();

    if (isPending) {
        return <Loading></Loading>
    }

    if (pending) {
        return <Loading></Loading>
    }

    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-12">
                <div className="col-span-1 md:col-span-4 xl:col-span-2">
                    <div className="bg-gray-50 md:min-h-screen">
                        <h1 className="text-center text-xl xl:text-2xl font-extrabold py-4">SHANTA HOLDINGS</h1>
                        <div>
                            {
                                user && isAdmin && <div className="flex flex-col  space-y-4 pt-4 justify-center items-center">
                                    <NavLink
                                        to="/dashboard/adminProfile"
                                        className={({ isActive, isPending }) =>
                                            isPending ? "pending" : isActive ? "text-blue-500 bg-white w-full text-xl font-semibold py-3 text-center" : "text-black text-xl font-semibold text-center"
                                        }
                                    >
                                        <span className="flex justify-center items-center gap-2 md:gap-0.5 lg:gap-2"><MdOutlineAdminPanelSettings /> Admin Profile</span>
                                    </NavLink>
                                    <NavLink
                                        to="/dashboard/manageMembers"
                                        className={({ isActive, isPending }) =>
                                            isPending ? "pending" : isActive ? "text-blue-500 bg-white w-full text-xl font-semibold py-3 text-center" : "text-black text-xl font-semibold text-center"
                                        }
                                    >
                                        <span className="flex justify-center items-center gap-2 md:gap-0.5 lg:gap-2"><MdOutlineManageAccounts /> Manage Members</span>
                                    </NavLink>
                                    <NavLink
                                        to="/dashboard/makeAnnouncement"
                                        className={({ isActive, isPending }) =>
                                            isPending ? "pending" : isActive ? "text-blue-500 bg-white w-full text-xl font-semibold py-3 text-center" : "text-black text-xl font-semibold text-center"
                                        }
                                    >
                                        <span className="flex justify-center items-center gap-2 md:gap-0.5 lg:gap-2"><TfiAnnouncement /> Make Announcement</span>
                                    </NavLink>
                                    <NavLink
                                        to="/dashboard/agreementRequest"
                                        className={({ isActive, isPending }) =>
                                            isPending ? "pending" : isActive ? "text-blue-500 bg-white w-full text-xl font-semibold py-3 text-center" : "text-black text-xl font-semibold text-center"
                                        }
                                    >
                                        <span className="flex justify-center items-center gap-2 md:gap-0.5 lg:gap-2"><RiPassPendingLine /> Agreement Request</span>
                                    </NavLink>
                                    <NavLink
                                        to="/dashboard/manageCoupons"
                                        className={({ isActive, isPending }) =>
                                            isPending ? "pending" : isActive ? "text-blue-500 bg-white w-full text-xl font-semibold py-3 text-center" : "text-black text-xl font-semibold"
                                        }
                                    >
                                        <span className="flex justify-center items-center gap-2 md:gap-0.5 lg:gap-2"><RiCoupon2Line /> Manage Coupons</span>
                                    </NavLink>
                                    <NavLink
                                        to="/dashboard/addEvent"
                                        className={({ isActive, isPending }) =>
                                            isPending ? "pending" : isActive ? "text-blue-500 bg-white w-full text-xl font-semibold py-3 text-center" : "text-black text-xl font-semibold text-center"
                                        }
                                    >
                                        <span className="flex justify-center items-center gap-2 md:gap-0.5 lg:gap-2"><MdEvent /> Add Event</span>
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
                                        <span className="flex justify-center items-center gap-2 md:gap-0.5 lg:gap-2"><FaUser /> My Profile</span>
                                    </NavLink>
                                    <NavLink
                                        to="/dashboard/makePayment"
                                        className={({ isActive, isPending }) =>
                                            isPending ? "pending" : isActive ? "text-blue-500 bg-white w-full text-xl font-semibold py-3 text-center" : "text-black text-xl font-semibold text-center"
                                        }
                                    >
                                        <span className="flex justify-center items-center gap-2 md:gap-0.5 lg:gap-2"><MdPayment /> Make Payment</span>
                                    </NavLink>
                                    <NavLink
                                        to="/dashboard/paymentHistory"
                                        className={({ isActive, isPending }) =>
                                            isPending ? "pending" : isActive ? "text-blue-500 bg-white w-full text-xl font-semibold py-3 text-center" : "text-black text-xl font-semibold text-center"
                                        }
                                    >
                                        <span className="flex justify-center items-center gap-2 md:gap-0.5 lg:gap-2"><FaHistory /> Payment History</span>
                                    </NavLink>
                                    <NavLink
                                        to="/dashboard/announcement"
                                        className={({ isActive, isPending }) =>
                                            isPending ? "pending" : isActive ? "text-blue-500 bg-white w-full text-xl font-semibold py-3 text-center" : "text-black text-xl font-semibold text-center"
                                        }
                                    >
                                        <span className="flex justify-center items-center gap-2 md:gap-0.5 lg:gap-2"><MdAnnouncement /> Announcements</span>
                                    </NavLink>
                                    <NavLink
                                        to="/dashboard/events"
                                        className={({ isActive, isPending }) =>
                                            isPending ? "pending" : isActive ? "text-blue-500 bg-white w-full text-xl font-semibold py-3 text-center" : "text-black text-xl font-semibold text-center"
                                        }
                                    >
                                        <span className="flex justify-center items-center gap-2 md:gap-0.5 lg:gap-2"><MdEvent />All Events</span>
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
                                        <span className="flex justify-center items-center gap-2 md:gap-0.5 lg:gap-2"><FaUser /> My Profile</span>
                                    </NavLink>
                                    <NavLink
                                        to="/dashboard/announcement"
                                        className={({ isActive, isPending }) =>
                                            isPending ? "pending" : isActive ? "text-blue-500 bg-white w-full text-xl font-semibold py-3 text-center" : "text-black text-xl font-semibold text-center"
                                        }
                                    >
                                        <span className="flex justify-center items-center gap-2 md:gap-0.5 lg:gap-2"><MdAnnouncement /> Announcements</span>
                                    </NavLink>
                                </div>
                            }
                        </div>
                        <div className="divider w-3/4 mx-auto"></div>
                        <div className="flex justify-center items-center pb-3 md:pb-0">
                            <NavLink
                                to="/"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-blue-500 bg-white w-full text-xl font-semibold md:py-3" : "text-black text-xl font-semibold"
                                }
                            >
                                <span className="flex justify-center items-center gap-2 md:gap-0.5 lg:gap-2"><IoHomeOutline /> Home</span>
                            </NavLink>
                        </div>
                    </div>
                </div>
                <div className="col-span-1 md:col-span-8 xl:col-span-10">
                    <Outlet></Outlet>
                </div>
            </div>
        </div >
    );
};

export default Dashboard;