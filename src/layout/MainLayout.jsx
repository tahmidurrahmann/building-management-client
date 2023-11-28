import { NavLink } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { MdApartment } from "react-icons/md";
import { CgLogIn } from "react-icons/cg";
import { CgLogOut } from "react-icons/cg";
import { LuLayoutDashboard } from "react-icons/lu";
import { FaRegUser } from "react-icons/fa";
import useAuth from "../hooks/useAuth";
import toast from "react-hot-toast";

const MainLayout = () => {

    const { user, logOut } = useAuth();

    const handleLogout = () => {
        logOut()
            .then(() => { })
            .catch(error => {
                toast.error(error?.message);
            })
    }

    const navLinks = <div className="flex flex-col lg:flex-row justify-center items-center gap-5">
        <NavLink
            to="/"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "lg:border-b-2  text-neutral-900 lg:text-white lg:border-b-white font-semibold" : "text-neutral-600 lg:text-white"
            }
        >
            <span className="flex justify-center items-center gap-1"><FaHome></FaHome>Home</span>
        </NavLink>
        <NavLink
            to="/apartment"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "lg:border-b-2  text-neutral-900 lg:text-white lg:border-b-white font-semibold" : "text-neutral-600 lg:text-white"
            }
        >
            <span className="flex justify-center items-center gap-1"><MdApartment />Apartment</span>
        </NavLink>
    </div>

    return (
        <div className="shadow fixed z-10 bg-[#151515] bg-opacity-30 w-full md:px-8">
            <div className="navbar">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[10] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>
                    <img className="w-[160px]" src="https://shantaholdings.com/admin/settings_images/Shanta-holdings-logo-white-1678170808.svg" alt="" />
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    {user?.email ? <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="m-1"><img className="w-[40px] rounded-full" referrerPolicy="no-referrer" src={user?.photoURL} alt="" /></label>
                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                            <h1 className="py-1 text-center text-neutral-600 font-semibold flex justify-center items-center gap-2"><FaRegUser /> {user?.displayName}</h1>
                            <NavLink
                                to="/dashboard"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "py-2 text-neutral-900 font-bold" : "text-neutral-900 font-bold py-2"
                                }
                            >
                                <span className="flex justify-center items-center gap-1"><LuLayoutDashboard /> Dashboard</span>
                            </NavLink>
                            <button className="bg-[#DD2955] px-2 py-1 rounded-full text-white font-semibold justify-center flex items-center gap-2" onClick={handleLogout}>Logout<CgLogOut /></button>
                        </ul>
                    </div> : <NavLink
                        to="/login"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "lg:border-b-2  text-neutral-900 md:text-white lg:border-b-white font-semibold" : "text-white"
                        }
                    >
                        <span className="flex justify-center items-center gap-1"><CgLogIn />Login</span>
                    </NavLink>}
                </div>
            </div>
        </div>
    );
};

export default MainLayout;