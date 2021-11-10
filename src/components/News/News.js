import React from 'react';
import { Card, Col, Container, Row, Button } from 'react-bootstrap';
import img from '../img/news-1.jpg';
import img2 from '../img/news-2.jpg';
import img3 from '../img/news-3.jpg';

const News = () => {
    return (
        <Container style={{ marginBottom: "100px" }}>
            <h2 style={{ textAlign: "center", marginTop: "100px" }}><span style={{ borderBottom: "5px solid black" }}>News</span></h2>
            <Row>
                <Col md={4} className="gap-5 mb-5 mt-5">
                    <Card data-aos="fade-right" className="border-0 rounded-3 cardStyle">
                        <Card.Img className="mt-3" variant="top" src={img} style={{ width: "100%", height: "100%", margin: "auto" }} />
                        <Card.Body>
                            <Card.Title>Top Racer 2021</Card.Title>
                            <Card.Text className="text-muted">
                                Dutch researchers are saying that riding a bicycle literally help you live longer. People that cycle live an average of six months longer than those that don’t ride bikes.
                            </Card.Text>
                        </Card.Body>
                        <div className="mx-auto mb-3">
                            <Button variant="outline-success">Read More</Button>
                        </div>
                    </Card>
                </Col>
                <Col md={4} className="gap-5 mb-5 mt-5">
                    <Card data-aos="fade-up" className="border-0 rounded-3 cardStyle">
                        <Card.Img className="mt-3" variant="top" src={img2} style={{ width: "100%", height: "100%", margin: "auto" }} />
                        <Card.Body>
                            <Card.Title>Top Racer 2020</Card.Title>
                            <Card.Text className="text-muted">
                                Dutch researchers are saying that riding a bicycle literally help you live longer. People that cycle live an average of six months longer than those that don’t ride bikes.
                            </Card.Text>
                        </Card.Body>
                        <div className="mx-auto mb-3">
                            <Button variant="outline-success">Read More</Button>
                        </div>
                    </Card>
                </Col>
                <Col md={4} className="gap-5 mb-5 mt-5">
                    <Card data-aos="fade-left" className="border-0 rounded-3 cardStyle">
                        <Card.Img className="mt-3" variant="top" src={img3} style={{ width: "100%", height: "100%", margin: "auto" }} />
                        <Card.Body>
                            <Card.Title>Top Racer 2019</Card.Title>
                            <Card.Text className="text-muted">
                                Dutch researchers are saying that riding a bicycle literally help you live longer. People that cycle live an average of six months longer than those that don’t ride bikes.
                            </Card.Text>
                        </Card.Body>
                        <div className="mx-auto mb-3">
                            <Button variant="outline-success">Read More</Button>
                        </div>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default News;