import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import ProductList from '../ProductList/ProductList';

const Products = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('/data.json')
            .then(res => res.json())
            .then(data => setItems(data));
    }, [])
    return (
        <Container>
            <h2 style={{ textAlign: "center", marginTop: "100px" }}><span style={{ borderBottom: "5px solid black" }}>Our Services</span></h2>

            <Row>
                {
                    items.map(data => <ProductList key={data.id} data={data}></ProductList>)
                }
            </Row>
        </Container>
    );
};

export default Products;