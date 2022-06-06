import React from 'react';
import petFood from '../../assets/images/per-food.png';

const Discount = () => {
    return (
        <div class="hero py-10 bg-base-200">
            <div class="hero-content flex-col lg:flex-row-reverse justify-between">
                <img src={petFood} class="lg:max-w-lg rounded-lg" />
                <div className='px-3 sm:flex-shrink-0'>
                    <h1 class="text-5xl font-bold">Get 10% off</h1>
                    <h2 class="py-6 text-3xl">in Pet Foods.</h2>
                </div>
            </div>
        </div>
    );
};

export default Discount;