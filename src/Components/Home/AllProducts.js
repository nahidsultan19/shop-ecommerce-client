import React, { useEffect, useState } from 'react';
import AllProduct from './AllProduct';

const AllProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <div className='grid grid-cols-1 md:grid-cols-4 gap-4 px-10 py-24'>
            {products.map(product => <AllProduct key={product.id} product={product}></AllProduct>)}
        </div>
    );
};

export default AllProducts;