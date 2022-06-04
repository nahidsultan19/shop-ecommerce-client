import React from 'react';
import Banner from './Banner';
import BannerBottom from './BannerBottom';
import Deals from './Deals';
import Products from './Products';

const Home = () => {
    return (
        <div>
            <Banner />
            <Deals />
            <BannerBottom />
            <Products />
        </div>
    );
};

export default Home;