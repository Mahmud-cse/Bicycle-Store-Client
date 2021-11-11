import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import { useForm } from 'react-hook-form';
import useAuth from '../hooks/useAuth';
import './Purchase.css';
import Footer from '../Footer/Footer';
import NavBar from '../NavBar/NavBar';

const Purchase = () => {

    const { id } = useParams();
    const [details, setDetails] = useState([]);
    const [specificDetail, setSpecificDetail] = useState({});

    useEffect(() =>
        fetch("http://localhost:5000/products")
            .then(res => res.json())
            .then(data => setDetails(data)), []);

    useEffect(() => {
        if (details.length > 0) {
            const matchedData = details.find(detail => detail.id == id);
            setSpecificDetail(matchedData);
        }
    }, [details]);

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { user } = useAuth();

    const onSubmit = data => {
        fetch('http://localhost:5000/addOrder', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert('Order processed Successfully');
                    // reset();
                }
            })
    };

    console.log(specificDetail?.price);

    return (
        <>
            <NavBar />
            <div style={{ marginBottom: "50px" }} >
                <Container >
                    <Row className="d-flex justify-content-center align-items-center">
                        <Col lg="6">
                            <img src={specificDetail?.img} alt="" style={{ width: "50%" }} />
                            <h2>{specificDetail?.name}</h2>
                            <h4>${specificDetail?.price}</h4>
                            <p>{specificDetail?.description}</p>
                        </Col>
                        <Col lg="6">
                            <form className="shipping-form" onSubmit={handleSubmit(onSubmit)}>

                                <input defaultValue={user.displayName} {...register("name")} />

                                <input defaultValue={user.email} {...register("email")} />
                                <input defaultValue="pending" {...register("status")} />
                                <input placeholder="Enter exact cycle name please" defaultValue="" {...register("cycleName", { validate: value => value === specificDetail?.name })} />
                                <input placeholder="Input original cycle price without dollar sign" defaultValue="" {...register("price", { validate: value => value === specificDetail?.price })} />
                                <input placeholder="Address" defaultValue="" {...register("address")} />
                                <input placeholder="phone number" defaultValue="" {...register("phone")} />

                                <input type="submit" />
                            </form>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Footer />
        </>
    );
};

export default Purchase;