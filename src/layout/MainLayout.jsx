import { NavLink } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { MdApartment } from "react-icons/md";
import { CgLogIn } from "react-icons/cg";

const MainLayout = () => {

    const navLinks = <div className="flex justify-center items-center gap-5">
        <NavLink
            to="/"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "border-b-2 border-b-[#004477] font-semibold" : "text-neutral-700"
            }
        >
            <span className="flex justify-center items-center gap-1"><FaHome></FaHome>Home</span>
        </NavLink>
        <NavLink
            to="/apartment"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "border-b-2 border-b-[#004477] font-medium text-neutral-900" : "text-neutral-700"
            }
        >
            <span className="flex justify-center items-center gap-1"><MdApartment />Apartment</span>
        </NavLink>
    </div>

    return (
        <div className="shadow w-full md:px-8">
            <div className="navbar">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[10] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>
                    <div className="flex justify-center items-center px-2 mx-2 text-xl md:text-2xl font-bold"><img className="w-[60px]" src="https://i.ibb.co/0FWgkby/real-estate-building-construction-architecture-260nw-1995450515-removebg-preview.png" alt="" />Build<span className="text-[#004477]">Minder</span></div>
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
                            isPending ? "pending" : isActive ? "border-b-2 border-b-[#004477] font-medium text-neutral-900" : "text-neutral-700"
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