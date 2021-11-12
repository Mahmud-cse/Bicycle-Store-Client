import React, { useEffect, useState } from 'react';
import Carousel from 'react-material-ui-carousel'
import { Container } from 'react-bootstrap';
import Rating from 'react-rating';
import './UserReview.css';

const UserReview = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('https://shielded-shelf-30657.herokuapp.com/review')
            .then(res => res.json())
            .then(data => setItems(data));
    }, []);

    return (

        <div style={{ marginBottom: "150px" }}>
            <Container>
                <h2 style={{ textAlign: "center", marginTop: "100px", marginBottom: "80px" }}><span style={{ borderBottom: "5px solid black" }}>Top Reviews</span></h2>
                <Carousel>
                    {
                        items.map(value =>
                            <div style={{ textAlign: "center" }}>
                                <h4 style={{}}>{value.name}</h4>
                                <Rating
                                    initialRating={value.rating}
                                    emptySymbol="fas fa-star"
                                    fullSymbol="fas fa-star icon-color"
                                    readonly
                                ></Rating>
                                <h6>"{value.comment}"</h6>
                            </div>
                        )
                    }
                </Carousel>
            </Container>
        </div>
    );
};

export default UserReview;