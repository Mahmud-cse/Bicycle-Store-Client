import { Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import useAuth from '../hooks/useAuth';
import ManageOrdersList from '../ManageOrdersList/ManageOrdersList';

// import axios from 'axios';

const ManageOrders = () => {
    const { user } = useAuth();
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch("https://shielded-shelf-30657.herokuapp.com/orders")
            .then(res => res.json())
            .then(data => setOrders(data));
    }, []);

    return (
        <div>
            <Grid container spacing={5} >
                {
                    orders.map(data => <ManageOrdersList key={data._id} data={data} />)
                }
            </Grid>
        </div>
    );
};

export default ManageOrders;