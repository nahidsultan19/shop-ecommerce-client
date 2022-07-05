import React from 'react';
import client1 from '../../assets/images/client1.png';
import client2 from '../../assets/images/client2.png';
import client3 from '../../assets/images/client3.png';

const ClientReviews = () => {
    return (
        <div className='lg:min-h-screen bg-gradient-to-r from-orange-300 to-orange-500 py-10'>
            <h2 className='text-center text-4xl text-white font-bold py-10 uppercase'>What our clients are saying</h2>
            <div className='grid grid-cols-1 md:grid-cols-3'>
                <div className='bg-white mask lg:mask-circle lg:p-24 p-10 rounded-md'>
                    <h3 className='text-xl font-bold '>Delivered as promised! </h3>
                    <p className=''>Loved the service! I urgently needed some stuffs and ordered it here and they delivered in less than an hour as promised! Thanks a lot for that.</p>
                    <div className='flex items-center max-w-sm bg-white mt-5'>
                        <img src={client1} alt="" />
                        <div className='px-4'>
                            <h2 className='text-xl font-bold'>Yolanda H. Jones</h2>
                            <p>Administrative project coordinator</p>
                        </div>
                    </div>
                </div>
                <div className='bg-white mask lg:mask-circle lg:p-24 p-10 rounded-md'>
                    <h3 className='lg:text-xl text-sm font-bold'>Delivered as promised! </h3>
                    <p>Loved the service! I urgently needed some stuffs and ordered it here and they delivered in less than an hour as promised! Thanks a lot for that.</p>
                    <div className='flex items-center max-w-sm mt-5'>
                        <img src={client2} alt="" />
                        <div className='px-4'>
                            <h2 className='text-xl font-bold'>Vicki J. Labrie</h2>
                            <p>Telephone station repairer</p>
                        </div>
                    </div>
                </div>
                <div className='bg-white mask lg:mask-circle lg:p-24 p-10 rounded-md'>
                    <h3 className='text-xl font-bold'>Delivered as promised! </h3>
                    <p>Loved the service! I urgently needed some stuffs and ordered it here and they delivered in less than an hour as promised! Thanks a lot for that.</p>
                    <div className='flex items-center mt-5 lg:max-w-lg'>
                        <img src={client3} alt="" />
                        <div className='px-4'>
                            <h2 className='text-xl font-bold'>Nicole P. Byrum</h2>
                            <p>Textile cutting machine operator</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClientReviews;