import React, { useEffect, useState } from 'react';
import Shop from '../Shop/Shop';
import Cart from '../Cart/Cart';
import { ToastContainer, toast } from 'react-toastify';

const Main = () => {
    const [products , setProducts] = useState([]);
    const [cart , setCart] = useState([]);
    const addBookmark = (product) => {
        const newCart = [...cart , product];
        if(newCart){
            if(cart.includes(product)){
                toast.error('You Have Already Bookmarked This Blog!');
            }
            else{
                const newBlog = [...cart , product]
                setCart(newBlog);
                toast.success('Bookmark Successful')
            }
        }
        else{
            setCart(newCart);
        }
      };
      const markAsRead = (pd) => {
        const newCart = [...cart , pd];
        setCart(newCart);
      };
    useEffect(() => {
        const loadData = async() => {
            const res = await fetch('../../../public/data.json');
            const data = await res.json();
            setProducts(data);
        };
        loadData();
    } , []);
    return (
        <div className='container mx-auto flex flex-col md:flex-row lg:flex-row p-2 gap-3'>
            <div className='w-full md:w-3/5'>
                {
                    products?.map(product => <Shop 
                        product={product} 
                        key={product.id}
                        addBookmark={addBookmark}
                        markAsRead={markAsRead}
                        ></Shop>)
                }
            </div>
            <div className='w-full md:w-2/5'>
                <Cart cart={cart}></Cart>
            </div>
            <ToastContainer />
        </div> 
    );
};

export default Main;