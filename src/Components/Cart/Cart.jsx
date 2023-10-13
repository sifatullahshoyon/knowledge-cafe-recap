import React from "react";

const Cart = (props) => {
  return (
    <>
      <div className="text-center bg-indigo-100 mb-6 mx-auto">
        <p className="border rounded border-indigo-500 p-5 font-exo text-2xl text-indigo-600 font-bold">
          Spent time on read : 177 min
        </p>
      </div>
      <div className="bg-slate-100 p-7 rounded">
        <h1 className="text-2xl text-black font-exo font-bold">
          Bookmarked Blogs : {props.cart.length}
        </h1>
        {props.cart?.map((product) => (
          <div key={product.id} className="my-4 bg-white p-5 rounded">
            <p className="font-exo font-semibold text-lg leading-7">
              {product.title}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Cart;
