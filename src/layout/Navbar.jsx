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
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const drawerWidth = 240;

function Navbar(props) {

    const { user, logOut } = useAuth();

    const handleLogout = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error.message))
    }

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const navLinks = <div className="flex flex-col md:flex-row justify-center items-center gap-5">
        <NavLink
            to="/"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "md:py-5 md:border-b-2  text-neutral-900 md:text-white md:border-b-white font-semibold text-sm" : "text-neutral-600 md:text-white text-sm"
            }
        >
            <span className="flex justify-center items-center gap-1"><FaHome />Home</span>
        </NavLink>
        <NavLink
            to="/apartment"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "md:py-5 md:border-b-2  text-neutral-900 md:text-white md:border-b-white font-semibold text-sm" : "text-neutral-600 md:text-white text-sm"
            }
        >
            <span className="flex justify-center items-center gap-1"><MdApartment />Apartment</span>
        </NavLink>
        {user?.email ? <div>
            <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                <img className="w-[40px] rounded-full" referrerPolicy="no-referrer" src={user?.photoURL} alt="" />
            </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <h1 className="px-6 py-2 text-neutral-600 font-semibold flex justify-center items-center gap-2"><FaRegUser /> {user?.displayName}</h1>
                <MenuItem onClick={handleClose}><NavLink
                    to="/dashboard"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "" : "px-3 text-neutral-900 font-bold"
                    }
                >
                    <span className="flex justify-center items-center gap-1"><LuLayoutDashboard /> Dashboard</span>
                </NavLink></MenuItem>
                <MenuItem onClick={handleClose}><Button sx={{mx : 1.5}} variant="contained" color="error" onClick={handleLogout}>Logout<CgLogOut /></Button></MenuItem>
            </Menu>
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
                position="fixed" sx={{ backgroundColor: "#1515154D" }} component="nav">
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
