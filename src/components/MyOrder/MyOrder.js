import { Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import useAuth from '../hooks/useAuth';
import MyOrderList from '../MyOrderList/MyOrderList';

// import axios from 'axios';

const MyOrder = () => {
    const { user } = useAuth();
    const [orders, setOrders] = useState([]);
    const [specificDetail, setSpecificDetail] = useState([]);

    useEffect(() => {
        fetch("https://shielded-shelf-30657.herokuapp.com/orders")
            .then(res => res.json())
            .then(data => setOrders(data));
    }, []);

    useEffect(() => {
        if (orders.length > 0) {
            const matchedData = orders.filter(order => order.email == user.email);
            setSpecificDetail(matchedData);
        }
    }, [orders]);

    return (
        <div>
            <Grid container spacing={5} >
                {
                    specificDetail.map(data => <MyOrderList key={data._id} data={data} />)
                }
            </Grid>
        </div>
    );
};

export default MyOrder;