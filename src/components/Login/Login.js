import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import Footer from '../Footer/Footer';
import useAuth from '../hooks/useAuth';
import img from '../img/login.png';

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { user, loginUser, loading, authError } = useAuth();
    const location = useLocation();
    const history = useHistory();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleLoginSubmit = e => {
        e.preventDefault();
        loginUser(loginData.email, loginData.password, location, history);
    }

    return (
        <>
            <Container style={{ marginTop: "20px" }}>
                <Grid container spacing={2}>
                    <Grid item sx={{ mt: 8 }} xs={12} md={6}>
                        <Typography sx={{ fontWeight: 'medium', ml: 1 }} vaiant="body1" gutterBottom>
                            Login
                        </Typography>
                        <form onSubmit={handleLoginSubmit}>
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                id="standard-basic"
                                name="email"
                                onChange={handleOnChange}
                                label="Your Email"
                                variant="standard" />

                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                id="standard-basic"
                                name="password"
                                onChange={handleOnChange}
                                label="Your Password"
                                type="password"
                                variant="standard" />
                            <NavLink
                                to="/register" style={{ textDecoration: 'none' }}><Button variant="text">New User? Please Register</Button>
                            </NavLink>

                            <Button sx={{ width: '75%', m: 1 }} variant="contained" type="submit" style={{ backgroundColor: "#5CE7ED", color: 'black' }}>Login</Button>



                            {user.email && !authError && <Alert severity="success">Login Successfully!</Alert>}
                            {authError && <Alert severity="error">{authError}</Alert>}
                        </form>
                        <br></br>
                        {loading && <CircularProgress />}
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <img style={{ width: '100%' }} src={img} alt="" />
                    </Grid>
                </Grid>
            </Container>
            <Footer />
        </>
    );
};

export default Login;