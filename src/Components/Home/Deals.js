import React from 'react';
import rice from '../../assets/images/rice.png';
import redMeat from '../../assets/images/red-meats.png';
import dairy from '../../assets/images/Dairy 1.png';
import vegetable from '../../assets/images/vegetable.png';

const Deals = () => {
    return (
        <div className='bg-red-50 py-12'>
            <h2 className='text-center text-3xl font-bold uppercase py-10'>limited-time deals</h2>
            <div className='grid grid-cols-1 md:grid-cols-4'>
                <div className='text-center text-2xl'>
                    <img className='mask mask-circle bg-slate-50 p-10 w-64 mx-auto' src={rice} alt="" />
                    <h3>Groceries</h3>
                </div>
                <div className='text-center text-2xl'>
                    <img className='mask mask-circle bg-slate-50 p-10 w-80 mx-auto' src={vegetable} alt="" />
                    <h3>Vegetables</h3>
                </div>
                <div className='text-center text-2xl'>
                    <img className='mask mask-circle bg-slate-50 p-10 w-80 mx-auto' src={redMeat} alt="" />
                    <h3>Meats</h3>
                </div>
                <div className='text-center text-2xl'>
                    <img className='mask mask-circle bg-slate-50 p-10 w-80 mx-auto' src={dairy} alt="" />
                    <h3>Dairy</h3>
                </div>
            </div>
        </div>
    );
};

export default Deals;