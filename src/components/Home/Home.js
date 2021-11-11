import React from 'react';
import Footer from '../Footer/Footer';
import NavBar from '../NavBar/NavBar';
import News from '../News/News';
import Products from '../Products/Products';
import Slider from '../Slider/Slider';
import UserReview from '../UserReview/UserReview';

const Home = () => {
    return (
        <div>
            <NavBar />
            <Slider></Slider>
            <Products></Products>
            <UserReview></UserReview>
            <News></News>
            <Footer />
        </div>
    );
};

export default Home;