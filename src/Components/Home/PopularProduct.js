import React from 'react';
import Rating from '../../Shared/Rating';

const PopularProduct = ({ product, handleAddToCart }) => {
    const { id, title, price, img } = product;
    return (
        <div className="card max-w-md bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl bg-base-200 w-48 h-48 p-2" />
            </figure>
            <div className="card-body items-center text-center">
                <Rating />
                <h2 className="card-title">{title}</h2>
                <p>${price}</p>
                <div className="card-actions">
                    <button onClick={() => handleAddToCart(id, price, title, img)} className="btn bg-[#EF6931] border-0 w-full">Add To Cart</button>
                </div>
                <button className="btn btn-active btn-ghost">Details</button>
            </div>
        </div>
    );
};

export default PopularProduct;