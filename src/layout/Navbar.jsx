import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { NavLink } from 'react-router-dom';
import { FaHome } from "react-icons/fa";
import { MdApartment } from "react-icons/md";
import useAuth from '../hooks/useAuth';
import { CgLogIn } from "react-icons/cg";
import { CgLogOut } from "react-icons/cg";
import { LuLayoutDashboard } from "react-icons/lu";
import { FaRegUser } from "react-icons/fa";
import { Button, Container } from '@mui/material';

const drawerWidth = 240;

function Navbar(props) {

    const { user, logOut } = useAuth();

    const handleLogout = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error.message))
    }

    const navLinks = <div className="flex flex-col md:flex-row justify-center items-center gap-5">
        <NavLink
            to="/"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "md:py-8 md:border-b-2  text-neutral-900 md:text-white md:border-b-white font-semibold text-sm" : "text-neutral-600 md:text-white text-sm"
            }
        >
            <span className="flex justify-center items-center gap-1"><FaHome></FaHome>Home</span>
        </NavLink>
        <NavLink
            to="/apartment"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "md:py-8 md:border-b-2  text-neutral-900 md:text-white md:border-b-white font-semibold text-sm" : "text-neutral-600 md:text-white text-sm"
            }
        >
            <span className="flex justify-center items-center gap-1"><MdApartment />Apartment</span>
        </NavLink>
        {user?.email ? <div className="dropdown dropdown-end">
            <label tabIndex={0} className="p-1"><img className="w-[40px] rounded-full" referrerPolicy="no-referrer" src={user?.photoURL} alt="" /></label>
            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-32 md:w-52">
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
            <Button sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 1 }} variant="contained"><CgLogIn /> Login</Button>
        </NavLink>}
    </div>

    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ my: 2 }}>
                THE GLASS HOUSE
            </Typography>
            <Divider />
            <List>
                {navLinks}
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed" sx={{ backgroundColor: "#1515154D", zIndex: { appBar: 1100 } }} component="nav">
                <Container maxWidth="2xl">
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{ mr: 2, display: { sm: 'none' } }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography
                            variant="h6"
                            component="div"
                            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                        >
                            <img className='w-[160px]' src="https://shantaholdings.com/admin/settings_images/Shanta-holdings-logo-white-1678170808.svg" alt="" />
                        </Typography>
                        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                            {navLinks}
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
            <nav>
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
            </nav>
            <Box component="main">
                <Toolbar />
            </Box>
        </Box>
    );
}

export default Navbar;
