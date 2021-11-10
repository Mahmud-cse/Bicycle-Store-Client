import React from 'react';
import { Carousel } from 'react-bootstrap';
import img from '../img/pic1.png';
import img3 from '../img/pic3.png';

const Slider = () => {
    return (
        <div>
            <Carousel className="carousel">
                <Carousel.Item>
                    <img
                        className="d-block w-100 "
                        src={img}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 "
                        src={img3}
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 "
                        src={img}
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Slider;