import React from 'react';
import { useDispatch } from 'react-redux';

import { addItemToCart } from "../Redux/cartSlice";
 const ProductCard = ({data}) => {
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addItemToCart(product));
  };

  return (
    <div className="mb-14">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 place-items-center">
        {data.map((product) => (
          <div
            key={product.id}
            className="relative group bg-white dark:bg-gray-800 rounded-lg shadow-lg transition-transform transform hover:scale-105 duration-300 overflow-hidden border border-gray-200 dark:border-gray-600 hover:shadow-2xl hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <div className="overflow-hidden rounded-t-lg">
              <img
                src={product.img}
                alt={product.title}
                className="h-[250px] w-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <div className="p-5 text-center">
              <h2 className="font-semibold text-lg text-gray-800 dark:text-gray-200">
                {product.title}
              </h2>
              <h2 className="font-bold text-xl text-primary mt-1 dark:text-primary-light">
                ${product.price}
              </h2>
              <button
                onClick={() => handleAddToCart(product)} // <-- Dispatch the action
                className="mt-4 bg-primary text-white py-2 px-4 rounded-lg shadow-md transition-all duration-300 hover:bg-primary-dark"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCard;
