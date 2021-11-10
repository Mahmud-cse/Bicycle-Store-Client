import React from 'react';
import Footer from '../Footer/Footer';
import News from '../News/News';
import Products from '../Products/Products';
import Slider from '../Slider/Slider';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Products></Products>
            <News></News>
            <Footer />
        </div>
    );
};

export default Home;