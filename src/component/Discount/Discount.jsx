import React from 'react';
import { MdShoppingCartCheckout } from "react-icons/md";

const Discount = () => {
  return (
    <div className="discount-banner bg-white dark:bg-black text-black dark:text-white py-4 text-center overflow-hidden">
      <p className="text-base sm:text-sm font-medium flex flex-wrap justify-center items-center animate-slide px-4">
        Limited time offer: 
        <span className="font-bold ml-1">Get 20% off</span> on all products! 
        Use code: 
        <span className="font-bold ml-1">SALE20</span>
        <MdShoppingCartCheckout className="ml-1 text-lg inline-block" />
      </p>
    </div>
  );
};

export default Discount;
