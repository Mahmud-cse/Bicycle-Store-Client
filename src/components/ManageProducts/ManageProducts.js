import { Grid, Paper, Typography, Button } from '@mui/material';
import React, { useEffect, useState } from 'react';

const ManageProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("https://shielded-shelf-30657.herokuapp.com/products")
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);

    const handleDelete = (id) => {
        const confirm = window.confirm("are you sure ?");

        if (confirm === true) {
            const url = `https://shielded-shelf-30657.herokuapp.com/products/${id}`
            fetch(url, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        alert("deleted successfully")
                        const remaining = products.filter(product => product._id !== id);
                        setProducts(remaining);
                        window.location.reload();
                    }

                })
        }

    }

    return (
        <div>
            <Grid container spacing={5} >
                {
                    products.map(data =>
                        <Grid item xs={12} sm={6} md={4} key={data._id}>
                            <Paper elevation={1} sx={{ p: 5 }} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                <img src={data.img} alt="" style={{ width: "90%", height: "90%", margin: "auto" }} />
                                <Typography sx={{ color: 'info.main', fontWeight: 600 }} variant="h5" gutterBottom component="div">
                                    {data.name}
                                </Typography>
                                <Typography variant="h6" gutterBottom component="div">
                                    ${data.price}
                                </Typography>
                                <Button onClick={() => handleDelete(data._id)} variant="contained" color="error">Delete</Button>
                            </Paper>
                        </Grid>
                    )
                }
            </Grid>
        </div>
    );
};

export default ManageProducts;