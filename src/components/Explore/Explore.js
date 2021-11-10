import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import ExploreList from '../ExploreList/ExploreList';

const Explore = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setItems(data));
    }, [])
    return (
        <Container>
            <Row>
                {
                    items.map(data => <ExploreList key={data.id} data={data}></ExploreList>)
                }
            </Row>
        </Container>
    );
};

export default Explore;