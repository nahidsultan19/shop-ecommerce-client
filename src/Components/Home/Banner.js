import React from 'react';
import vegetables from '../../assets/images/vegetables.png';

const Banner = () => {
    return (
        <div className="hero min-h-screen bg-gradient-to-r from-orange-500 to-orange-300">
            <div className="hero-content flex-col lg:flex-row-reverse pt-10">
                <img src={vegetables} className="w-96 rounded-full shadow-2xl mask mask-circle p-20 bg-slate-50" />
                <div className='text-white'>
                    <h1 className="text-5xl font-bold uppercase">fresh vegetables everyday!</h1>
                    <p className="py-2">24/7 Customer Support</p>
                    <p className="py-2">Doorstep Home Delivery</p>
                    <p className="py-2">Well-equipped & Well-prepared Specialists to Prevent COVID-19</p>
                    <button className="btn glass mt-3">shop now</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;