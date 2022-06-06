import React from 'react';
import Banner from './Banner';
import BannerBottom from './BannerBottom';
import ClientReviews from './ClientReviews';
import Deals from './Deals';
import Discount from './Discount';
import Products from './Products';
import Shopping from './Shopping';

const Home = () => {
    return (
        <div>
            <Banner />
            <Deals />
            <BannerBottom />
            <Products />
            <Discount />
            <Shopping />
            <ClientReviews />
        </div>
    );
};

export default Home;