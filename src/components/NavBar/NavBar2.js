import React from 'react';
import { Container, Nav, Navbar, Stack, Button, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import image from '../img/logo.png';
import './NavBar.css';

const NavBar = () => {
    const { user, logout } = useAuth();
    return (
        <div>
            <Navbar collapseOnSelect expand="lg">
                {/* container */}
                <Container>
                    <Navbar.Brand href="/home">
                        <img
                            src={image}
                            width="50"
                            height="50"
                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            {/* stack */}
                            <Stack direction="horizontal" gap={3}>
                                {/* <i class="fas fa-shopping-cart"></i> */}
                                <NavLink to="/home" className="f-13" style={{ color: "black" }} activeStyle={{
                                    fontWeight: "bold",
                                    color: "black"
                                }}>Home</NavLink>

                                <NavLink to="/explore" className="f-13" style={{ color: "black" }} activeStyle={{
                                    fontWeight: "bold",
                                    color: "black"
                                }}>Explore</NavLink>

                                {
                                    user?.email ?
                                        <NavLink to="/dashBoard" className="f-13" style={{ color: "black" }} activeStyle={{
                                            fontWeight: "bold",
                                            color: "black"
                                        }}>Dashboard</NavLink>

                                        :
                                        " "
                                }
                                {/* <span>{user.displayName}</span> */}
                                {
                                    user?.email ?
                                        <NavLink to="" onClick={logout} className="f-13" style={{ color: "black" }} activeStyle={{
                                            fontWeight: "bold",
                                            color: "black"
                                        }}>
                                            <Button variant="dark" className="rounded-pill">LogOut({user.displayName})</Button>
                                        </NavLink>
                                        :
                                        <NavLink to="/login" className="f-13" style={{ color: "black" }} activeStyle={{
                                            fontWeight: "bold",
                                            color: "black"
                                        }}>Login</NavLink>
                                }
                            </Stack>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavBar;