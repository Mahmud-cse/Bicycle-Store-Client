import { Alert, Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import useAuth from '../hooks/useAuth';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);
    const { token } = useAuth();

    const handleOnBlur = (e) => {
        setEmail(e.target.value);
    }

    const handleAdminSubmit = e => {
        e.preventDefault();

        const user = { email };

        fetch('https://shielded-shelf-30657.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${token}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    setSuccess(true);
                }
            })
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: '50px' }}>
            <div>
                <h2>Make an Admin</h2>
            </div>
            <br />
            <div>
                <form onSubmit={handleAdminSubmit}>
                    <TextField
                        sx={{ width: '100% ' }}
                        label="Email"
                        type="email"
                        onBlur={handleOnBlur}
                        variant="standard" />
                    <Button type="submit" variant="contained" style={{ backgroundColor: "#5CE7ED", color: 'black', marginTop: 18 }}>Make Admin</Button>
                </form>
            </div>
            {success && <Alert severity="success" style={{ marginTop: "15px" }}>Made Admin Successfully!</Alert>}
        </div>
    );
};

export default MakeAdmin;