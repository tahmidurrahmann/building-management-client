import { NavLink } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { MdApartment } from "react-icons/md";
import { CgLogIn } from "react-icons/cg";

const MainLayout = () => {

    const navLinks = <div className="flex justify-center items-center gap-5">
        <NavLink
            to="/"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "border-b-2 text-white border-b-white font-semibold" : "text-white"
            }
        >
            <span className="flex justify-center items-center gap-1"><FaHome></FaHome>Home</span>
        </NavLink>
        <NavLink
            to="/apartment"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "border-b-2 text-white border-b-white font-semibold" : "text-white"
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
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[10] p-2 shadow bg-[#151515] bg-opacity-30 rounded-box w-52">
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
                    <NavLink
                        to="/login"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "border-b-2 text-white border-b-white font-semibold" : "text-white"
                        }
                    >
                        <span className="flex justify-center items-center gap-1"><CgLogIn />Login</span>
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default MainLayout;