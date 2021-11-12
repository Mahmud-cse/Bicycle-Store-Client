import { Grid, Paper, Typography, Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const ManageOrdersList = (props) => {
    const { _id, cycleName, price, status } = props.data;
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch("https://shielded-shelf-30657.herokuapp.com/orders")
            .then(res => res.json())
            .then(data => setOrders(data));
    }, []);

    const handleDelete = (id) => {
        const confirm = window.confirm("are you sure ?");

        if (confirm === true) {
            const url = `https://shielded-shelf-30657.herokuapp.com/orders/${id}`
            fetch(url, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        alert("deleted successfully")
                        const remaining = orders.filter(order => order._id !== id);
                        setOrders(remaining);
                        window.location.reload();
                    }

                })
        }

    };

    const handleUpdate = (id) => {
        const url = `https://shielded-shelf-30657.herokuapp.com/orders/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('Updated successfully');
                    window.location.reload();
                }
            })
    }

    return (
        <Grid item xs={12} sm={6} md={4} >
            <Paper elevation={1} sx={{ p: 5 }} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <Typography sx={{ color: 'info.main', fontWeight: 600 }} variant="h5" gutterBottom component="div">
                    {cycleName}
                </Typography>
                <Typography variant="h6" gutterBottom component="div">
                    ${price}
                </Typography>
                <Typography variant="caption" display="block" gutterBottom>
                    <b>Status</b>: {status}
                </Typography>
                <div className="mb-3">
                    <Button variant="contained" color="error" style={{ marginLeft: "18px" }} onClick={() => handleDelete(_id)} >Delete</Button>
                    <Button variant="contained" color="success" style={{ marginLeft: "18px" }} onClick={() => handleUpdate(_id)}>Update</Button>
                </div>
            </Paper>
        </Grid>
    );
};

export default ManageOrdersList;