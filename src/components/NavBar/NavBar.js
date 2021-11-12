import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import { useTheme } from '@mui/material';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import image from '../img/logo.png';
import useAuth from '../hooks/useAuth';


export default function NavBar() {
    const { user, logout } = useAuth();
    const theme = useTheme();
    const useStyle = makeStyles({
        navItem: {
            color: 'black',
            textDecoration: 'none'
        },
        navIcon: {
            [theme.breakpoints.up('sm')]: {
                display: 'none !important'
            }
        },
        navItemContainer: {
            [theme.breakpoints.down('sm')]: {
                display: 'none !important'
            }
        },
        navLogo: {
            [theme.breakpoints.down('sm')]: {
                textAlign: 'right !important'
            }
        },
        mobileNavItem: {
            textDecoration: 'none',
            color: '#000'
        }
    })
    const { navItem, navIcon, navItemContainer, navLogo, mobileNavItem } = useStyle();


    const [state, setState] = React.useState(false);

    const list = (
        <Box
            sx={{ width: 250 }}
            role="presentation"
        >
            <List>
                <ListItem button >
                    <ListItemText>
                        <Link className={mobileNavItem} to="/">Home</Link>
                    </ListItemText>
                </ListItem>
                <Divider />
                <ListItem button >
                    <ListItemText>
                        <Link className={mobileNavItem} to="/explore">Explore</Link>
                    </ListItemText>
                </ListItem>
                <Divider />
                <ListItem button >
                    <ListItemText>
                        <Link className={mobileNavItem} to="/dashBoard">Dashboard</Link>
                    </ListItemText>
                </ListItem>
                <Divider />

                <ListItem button >
                    <ListItemText>
                        <span>{user.displayName}</span>
                    </ListItemText>
                </ListItem>
                <Divider />
                {
                    user?.email ?
                        <ListItem button >
                            <ListItemText>
                                <Link className={mobileNavItem} to="/" onClick={logout}>Logout</Link>
                            </ListItemText>
                        </ListItem>
                        :
                        <ListItem button >
                            <ListItemText>
                                <Link className={mobileNavItem} to="/login">Login</Link>
                            </ListItemText>
                        </ListItem>
                }
                <Divider />
            </List>
        </Box>
    );
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar sx={{ bgcolor: "white" }} elevation={0} position="static">
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="success"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                            className={navIcon}
                            onClick={() => setState(true)}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography className={navLogo} variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            <img src={image} alt="" style={{ width: "50px", height: "50px" }} />
                        </Typography>
                        <Box className={navItemContainer}>
                            <Link className={navItem} to="/"><Button color="inherit">Home</Button></Link>
                            <Link className={navItem} to="/explore"><Button color="inherit">Explore</Button></Link>
                            {
                                user?.email ?
                                    <Link className={navItem} to="/dashBoard"><Button color="inherit">Dashboard</Button></Link>
                                    :
                                    ""
                            }
                            <span style={{ color: "black" }}>{user.displayName}</span>
                            {user?.email ?
                                <Link className={navItem} to="/" onClick={logout}><Button color="inherit">Logout</Button></Link>
                                :
                                <Link className={navItem} to="/login"><Button color="inherit">Login</Button></Link>
                            }
                        </Box>
                    </Toolbar>
                </AppBar>
            </Box>
            <div>
                <React.Fragment>
                    <Drawer
                        open={state}
                        onClose={() => setState(false)}
                    >
                        {list}
                    </Drawer>
                </React.Fragment>
            </div>
        </>
    );
}
