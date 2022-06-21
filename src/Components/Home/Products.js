import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { ContextProvider } from './CartContext';
import PopularProduct from './PopularProduct';
import Product from './Product';
import { toast } from 'react-toastify';

const Products = () => {
    const [cart, setCart] = useContext(ContextProvider);
    const [products, setProducts] = useState([]);
    const newProduct = products.slice(0, 8);
    const popularProduct = products.slice(7, 11);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])


    const handleAddToCart = (selectedItem) => {
        console.log('product', selectedItem);
        const newCart = [...cart, selectedItem];
        setCart(newCart);
        toast('Item successfully added')
    }

    return (
        <div className='bg-red-50'>
            <h2 className='text-center text-3xl font-bold py-12'>New Products</h2>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-4 px-10'>
                {newProduct.map(product => <Product key={product.id} product={product}></Product>)}
            </div>
            <h2 className='py-10 px-10 flex justify-end'>View All</h2>
            <h2 className='text-center text-3xl font-bold my-12'>Popular Products</h2>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-4 px-10'>
                {popularProduct.map(product => <PopularProduct product={product} handleAddToCart={handleAddToCart}></PopularProduct>)}
            </div>
            <h2 className='py-10 px-10 flex justify-end'>View All</h2>
        </div>
    );
};

export default Products;

