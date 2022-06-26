import React from 'react';
import Rating from '../../Shared/Rating';


const Product = ({ product }) => {
    const { title, price, img } = product;

    return (
        <div className=''>
            <div data-aos="fade-up" data-aos-offset="200" data-aos-duration="3000" className="card max-w-md bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={img} alt="Shoes" className="rounded-xl bg-base-200 w-48 h-48 p-2" />
                </figure>
                <div className="card-body items-center text-center">
                    <Rating />
                    <h2 className="card-title">{title}</h2>
                    <p>${price}</p>
                    <div className="card-actions">
                        <button className="btn bg-[#EF6931] border-0">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;