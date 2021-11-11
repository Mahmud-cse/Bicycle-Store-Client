import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import { NavLink } from 'react-router-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useRouteMatch,
    useHistory
} from "react-router-dom";

import useAuth from '../hooks/useAuth';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import Pay from '../Pay/Pay';
import Review from '../Review/Review';
import MyOrder from '../MyOrder/MyOrder';
import AddProduct from '../AddProduct/AddProduct';
import ManageOrders from '../ManageOrders/ManageOrders';
import ManageProducts from '../ManageProducts/ManageProducts';

const drawerWidth = 210;

function Dashboard(props) {
    const history = useHistory();

    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    let { path, url } = useRouteMatch();
    const { admin, logout } = useAuth();

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <Toolbar />
            <Divider />

            {!admin &&
                <Box style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                    {/* Normal User */}
                    <NavLink to={`${url}/pay`} style={{ color: 'black', textDecoration: 'none' }}><Button color="inherit" >Pay</Button></NavLink>
                    <NavLink to={`${url}/review`} style={{ color: 'black', textDecoration: 'none' }}><Button color="inherit" >Review</Button></NavLink>
                    <NavLink to={`${url}/myOrder`} style={{ color: 'black', textDecoration: 'none' }}><Button color="inherit" >My Orders</Button></NavLink>
                    <NavLink to="/" style={{ color: 'black', textDecoration: 'none' }}><Button color="inherit" onClick={logout}>LogOut</Button></NavLink>
                </Box>
            }
            {admin &&
                <Box style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                    <NavLink to={`${url}/makeAdmin`} style={{ color: 'black', textDecoration: 'none' }}><Button color="inherit" >Make Admin</Button></NavLink>
                    <NavLink to={`${url}/addProduct`} style={{ color: 'black', textDecoration: 'none' }}><Button color="inherit" >Add Product</Button></NavLink>
                    <NavLink to={`${url}/manageOrders`} style={{ color: 'black', textDecoration: 'none' }}><Button color="inherit" >Manage Orders</Button></NavLink>
                    <NavLink to={`${url}/manageProducts`} style={{ color: 'black', textDecoration: 'none' }}><Button color="inherit" >Manage Products</Button></NavLink>
                    <NavLink to="/" style={{ color: 'black', textDecoration: 'none' }}><Button color="inherit" onClick={logout}>LogOut</Button></NavLink>
                </Box>
            }

            <List>
                {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>
                            {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                        </ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
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
                    <Typography variant="h6" noWrap component="div">
                        Dashboard
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
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
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
                <Switch>
                    <Route exact path={`${path}/pay`}>
                        <Pay></Pay>
                    </Route>
                    <Route exact path={`${path}/review`}>
                        <Review></Review>
                    </Route>
                    <Route exact path={`${path}/myOrder`}>
                        <MyOrder></MyOrder>
                    </Route>
                    <Route exact path={`${path}/makeAdmin`}>
                        <MakeAdmin></MakeAdmin>
                    </Route>
                    <Route exact path={`${path}/addProduct`}>
                        <AddProduct></AddProduct>
                    </Route>
                    <Route exact path={`${path}/manageOrders`}>
                        <ManageOrders></ManageOrders>
                    </Route>
                    <Route exact path={`${path}/manageProducts`}>
                        <ManageProducts></ManageProducts>
                    </Route>
                </Switch>
            </Box>
        </Box>
    );
}

Dashboard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Dashboard;