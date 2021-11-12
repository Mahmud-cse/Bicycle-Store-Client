import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import logo from '../img/logo.png';
import './Footer.css';

const Footer = () => {
    return (
        <div className="customFooter">
            <Container className="pt-5">
                <Row>
                    <Col lg="6">
                        <Row>
                            <Col xs="4" lg="4">
                                <ul className="list-unstyled" style={{ color: "white" }}>
                                    <li>About Our Service</li>
                                    <li>Read Our Blog</li>
                                    <li>Sign up to Read</li>
                                    <li>Add your Account</li>
                                </ul>
                            </Col>
                            <Col xs="4" lg="4">
                                <ul className="list-unstyled" style={{ color: "white" }}>
                                    <li>Road Bike</li>
                                    <li>Mountain Bike</li>
                                    <li>BMX Bike</li>
                                    <li>City</li>
                                </ul>
                            </Col>
                            <Col xs="4" lg="4">
                                <ul className="list-unstyled" style={{ color: "white" }}>
                                    <li>Info</li>
                                    <li>Shipping</li>
                                    <li>2019 Catalog</li>
                                    <li>Search</li>
                                </ul>

                            </Col>
                        </Row>
                    </Col>
                    <Col lg="6">
                        <Row>
                            <Col xs="4" lg="4">
                                <ul className="list-unstyled" style={{ color: "white" }}>
                                    <li>Quick links</li>
                                    <li>Policy</li>
                                    <li>Term & Condition</li>
                                    <li>Return</li>
                                </ul>
                            </Col>
                            <Col xs="4" lg="4">
                                <ul className="list-unstyled" style={{ color: "white" }}>
                                    <li>Get Help</li>
                                    <li>Read FAQs</li>
                                    <li>View all cities</li>
                                    <li>Available Doctor's</li>
                                </ul>
                            </Col>
                            <Col xs="4" lg="4">
                                <ul className="list-unstyled" style={{ color: "white" }}>
                                    <li>Facebook</li>
                                    <li>Instragram</li>
                                    <li>Twitter</li>
                                    <li>Youtube</li>
                                </ul>

                            </Col>
                        </Row>
                        <br />
                        <br />

                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;