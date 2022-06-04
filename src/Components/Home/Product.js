import React from 'react';



const Product = ({ product }) => {
    const { title, price, img } = product;
    return (
        <div className=''>
            <div class="card max-w-md bg-base-100 shadow-xl">
                <figure class="px-10 pt-10">
                    <img src={img} alt="Shoes" class="rounded-xl bg-base-200 w-48 h-48 p-2" />
                </figure>
                <div class="card-body items-center text-center">
                    <h2 class="card-title">{title}</h2>
                    <p>${price}</p>
                    <div class="card-actions">
                        <button class="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;