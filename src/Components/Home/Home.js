import React, { useEffect } from 'react';
import Banner from './Banner';
import BannerBottom from './BannerBottom';
import ClientReviews from './ClientReviews';
import Deals from './Deals';
import Discount from './Discount';
import Products from './Products';
import Shopping from './Shopping';
import Subscribe from './Subscribe';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
    useEffect(() => {
        Aos.init()
    }, [])
    return (
        <div>
            <Banner />
            <Deals />
            <BannerBottom />
            <Products />
            <Discount />
            <Shopping />
            <ClientReviews />
            <Subscribe />
        </div>
    );
};

export default Home;