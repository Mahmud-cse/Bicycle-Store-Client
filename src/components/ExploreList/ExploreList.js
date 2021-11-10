import React, { useEffect } from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './ExploreList.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ExploreList = (props) => {
    const { id, name, description, img, price } = props.data;
    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, [])
    return (
        <Col md={4} className="gap-5 mb-5 mt-5">
            <Card data-aos="fade-up" className="border-0 rounded-3 cardStyle">
                <Card.Img className="mt-3" variant="top" src={img} style={{ width: "90%", height: "90%", margin: "auto" }} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text className="text-muted">
                        {description}
                    </Card.Text>
                    <Card.Title className="text-center">
                        ${price}
                    </Card.Title>
                </Card.Body>
                <div className="mx-auto mb-3">
                    <Link to={`/serviceDetails/${id}`}>
                        <Button variant="outline-primary">Buy Now</Button>
                    </Link>
                </div>
            </Card>
        </Col>
    );
};

export default ExploreList;