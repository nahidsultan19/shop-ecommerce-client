import React, { useEffect, useState } from 'react';
import PopularProduct from './PopularProduct';
import Product from './Product';

const Products = () => {
    const [products, setProducts] = useState([]);
    const newProduct = products.slice(0, 8);
    const popularProduct = products.slice(7, 11);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div className='bg-red-50'>
            <h2 className='text-center text-3xl font-bold py-12'>New Products:{products.length}</h2>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-4 px-10'>
                {newProduct.map(product => <Product key={product.id} product={product}></Product>)}
            </div>
            <h2 className='text-center text-3xl font-bold my-12'>Popular Products</h2>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
                {popularProduct.map(product => <PopularProduct product={product}></PopularProduct>)}
            </div>
        </div>
    );
};

export default Products;

