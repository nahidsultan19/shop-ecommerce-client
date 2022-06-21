import React from 'react';
import petFood from '../../assets/images/per-food.png';

const Discount = () => {
    return (
        <div class="hero py-10 bg-base-200">
            <div class="hero-content flex-col lg:flex-row-reverse justify-between">
                <img data-aos="zoom-in-up" data-aos-offset="200" data-aos-delay="300" data-aos-duration="3000" src={petFood} class="lg:max-w-lg rounded-lg" />
                <div data-aos="flip-right" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1000" className='px-3 sm:flex-shrink-0'>
                    <h1 class="text-5xl font-bold">Get 10% off</h1>
                    <h2 class="py-6 text-3xl">in Pet Foods.</h2>
                </div>
            </div>
        </div>
    );
};

export default Discount;