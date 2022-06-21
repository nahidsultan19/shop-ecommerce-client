import React from 'react';

const PopularProduct = ({ product, handleAddToCart }) => {
    const { title, price, img } = product;
    return (
        <div class="card max-w-md bg-base-100 shadow-xl">
            <figure class="px-10 pt-10">
                <img src={img} alt="Shoes" class="rounded-xl bg-base-200 w-48 h-48 p-2" />
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title">{title}</h2>
                <p>${price}</p>
                <div class="card-actions">
                    <button onClick={() => handleAddToCart(title)} class="btn btn-primary">Add To Cart</button>
                </div>
                <button class="btn btn-active btn-ghost">Details</button>
            </div>
        </div>
    );
};

export default PopularProduct;