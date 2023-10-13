import React, { useEffect, useState } from 'react';
import Shop from '../Shop/Shop';
import Cart from '../Cart/Cart';

const Main = () => {
    const [products , setProducts] = useState([]);
    useEffect(() => {
        const loadData = async() => {
            const res = await fetch('../../../public/data.json');
            const data = await res.json();
            console.log(data)
            setProducts(data);
        };
        loadData();
    } , []);
    return (
        <div className='container mx-auto flex flex-col md:flex-row lg:flex-row p-2 gap-3'>
            {
                products?.map(product => <Shop product={product} key={product.id}></Shop>)
            }
            <Cart></Cart>
        </div>
    );
};

export default Main;