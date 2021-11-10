import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import ProductList from '../ProductList/ProductList';

const Products = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/products?_limit=6')
            .then(res => res.json())
            .then(data => {
                data = data.slice(0, 6);
                setItems(data);
            });
    }, [])
    return (
        <Container>
            <h2 style={{ textAlign: "center", marginTop: "100px" }}><span style={{ borderBottom: "5px solid black" }}>Our Products</span></h2>

            <Row>
                {
                    items.map(data => <ProductList key={data.id} data={data}></ProductList>)
                }
            </Row>
        </Container>
    );
};

export default Products;