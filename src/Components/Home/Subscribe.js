import React from 'react';

const Subscribe = () => {
    return (
        <div className='bg-base-200 py-10'>
            <div className='grid grid-cols-1 lg:grid-cols-3 px-20'>
                <div className=''>
                    <h3 className='text-xl'>Sign up for</h3>
                    <h2 className='text-xl font-bold'>exclusive offers</h2>
                </div>
                <div className='lg:mt-0 mt-5'>
                    <p>Sign up to receive exclusive email-only <br />saving & updates.</p>
                </div>
                <div className='lg:mt-0 mt-5'>
                    <div className="form-control">
                        <label className="input-group">
                            <input type="email" placeholder="enter your email address" className="input input-bordered" />
                            <button className='btn'>Go</button>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Subscribe;