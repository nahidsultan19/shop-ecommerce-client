import React, { useEffect, useRef, useState } from 'react';
import { useContext } from 'react';
import { ContextProvider } from './CartContext';
import PopularProduct from './PopularProduct';
import Product from './Product';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

const Products = () => {
    const [cart, setCart] = useContext(ContextProvider);
    const [products, setProducts] = useState([]);
    const productFetchRef = useRef(false);
    const newProduct = products.slice(0, 8);
    const popularProduct = products.slice(7, 11);

    useEffect(() => {
        // only one time product render
        if (productFetchRef.current) return;
        productFetchRef.current = true;

        fetch('data.json')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
            })
    }, [])


    const handleAddToCart = (selectedItem) => {
        let exists = cart.find(item => item.id === selectedItem.id)
        if (!exists) {
            const newCart = [...cart, selectedItem];
            setCart(newCart);
        } else {
            alert('Already exist')
        }

    }

    return (
        <div className='bg-red-50'>
            <h2 className='text-center text-3xl font-bold py-12'>New Products</h2>
            <div className='grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-4 px-10'>
                {newProduct.map(product => <Product key={product.id} product={product}></Product>)}
            </div>
            <Link to="products" className='py-10 px-10 flex justify-end'>View All</Link>
            <h2 className='text-center text-3xl font-bold my-12'>Popular Products</h2>
            <div className='grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-4 px-10'>
                {popularProduct.map(product => <PopularProduct key={product.id} product={product} handleAddToCart={handleAddToCart}></PopularProduct>)}
            </div>
            <Link to="products" className='py-10 px-10 flex justify-end'>View All</Link>
        </div>
    );
};

export default Products;

