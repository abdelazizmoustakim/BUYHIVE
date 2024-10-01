import React from 'react';
import { GiWallet } from "react-icons/gi";
import { FaRegCheckCircle } from "react-icons/fa";
import { LiaCarSideSolid } from "react-icons/lia";
import { FaHeadphonesAlt } from "react-icons/fa";

const ServiceData = [
  {
    id: 1,
    icon: <LiaCarSideSolid className='text-4xl md:text-5xl text-primary' />,
    text: "Free Shipping",
    description: "Free Shipping On All Orders"
  },
  {
    id: 2,
    icon: <GiWallet className='text-4xl md:text-5xl text-primary' />,
    text: "Secure Payment",
    description: "All Payment Secure"
  },
  {
    id: 3,
    icon: <FaRegCheckCircle className='text-4xl md:text-5xl text-primary' />,
    text: "Safe Money",
    description: "30 Days Money Back !"
  },
  {
    id: 4,
    icon: <FaHeadphonesAlt className='text-4xl md:text-5xl text-primary' />,
    text: "Online Support 24/7",
    description: "Technical Support 24/7"
  },
];

const Services = () => {
  return (
    <div className="container my-14 md:my-20">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 gap-y-8">
        {ServiceData.map((data) => (
          <div key={data.id} className='flex flex-col items-start sm:flex-row gap-4'>
            {data.icon}
            <div>
              <h1 className='lg:text-xl font-bold'>{data.text}</h1>
              <h1 className='text-gray-400 text-sm'>{data.description}</h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
