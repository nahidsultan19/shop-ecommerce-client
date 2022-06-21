import React from 'react';
import safeFood from '../../assets/images/safe-food.png';
import shop from '../../assets/images/shop.png';
import delevery from '../../assets/images/delivery.png';
import safety from '../../assets/images/safety.png';
import loyalty from '../../assets/images/loyalty 1.png';

const Shopping = () => {
    return (
        <div class="hero min-h-screen bg-base-100">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <div data-aos="fade-up" data-aos-offset="200" data-aos-duration="3000">
                    <img src={shop} class="lg:max-w-lg rounded-lg" />
                </div>
                <div className='lg:p-16'>
                    <h1 class="lg:text-5xl font-bold text-[#EF6931] lg:text-left text-center">WHY SHOP WITH US?</h1>
                    <div className='safe-food mt-10 flex items-center'>
                        <img src={safeFood} alt="" className='bg-[#EF6931] mask mask-circle p-2 w-16' />
                        <div className='food-text px-4 text-[#EF6931]'>
                            <h3 className='font-bold'>Safe Food</h3>
                            <p>We focus on ensuring sound health by delivering adulteration, additives & chemical free pure food at consumers’ doorstep.</p>
                        </div>
                    </div>
                    <div className='safe-food mt-3 flex items-center'>
                        <img src={delevery} alt="" className='bg-[#EF6931] mask mask-circle p-2 w-16' />
                        <div className='food-text px-4 text-[#EF6931]'>
                            <h3 className='font-bold'>Quickest Delivery</h3>
                            <p>We would love to make our consumers feel like shop next to their door by ensuring quickest delivery service.</p>
                        </div>
                    </div>
                    <div className='safe-food mt-3 flex items-center'>
                        <img src={safety} alt="" className='bg-[#EF6931] mask mask-circle p-2 w-16' />
                        <div className='food-text px-4 text-[#EF6931]'>
                            <h3 className='font-bold'>Environmental safety</h3>
                            <p>We always work on keeping a healthy environment for our employees. We dump and recycle our wastes in proper manner.</p>
                        </div>
                    </div>
                    <div className='safe-food mt-3 flex items-center'>
                        <img src={loyalty} alt="" className='bg-[#EF6931] mask mask-circle p-2 w-16' />
                        <div className='food-text px-4 text-[#EF6931]'>
                            <h3 className='font-bold'>Honesty & Integrity</h3>
                            <p>Our aim is to earn halal income for our stakeholders through doing business with integrity & honestly in a fair manner.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shopping;