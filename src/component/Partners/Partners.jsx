import React from 'react';
import { IoLogoApple } from "react-icons/io5";
import { TfiAndroid } from "react-icons/tfi";
import { IoLogoPlaystation } from "react-icons/io5";
import { FaXbox } from "react-icons/fa6";
import { BsNintendoSwitch } from "react-icons/bs";
import { FaAws } from "react-icons/fa";

const PartnersData = [
  {
    id: 1,
    icon: <IoLogoApple className='text-6xl text-primary' />,
    name: "Apple",
  },
  {
    id: 2,
    icon: <TfiAndroid className='text-6xl text-primary' />,
    name: "Android",
  },
  {
    id: 3,
    icon: <IoLogoPlaystation className='text-6xl text-primary' />,
    name: "PlayStation",
  },
  {
    id: 4,
    icon: <FaXbox className='text-6xl text-primary' />,
    name: "Xbox",
  },
  {
    id: 5,
    icon: <BsNintendoSwitch className='text-6xl text-primary' />,
    name: "Nintendo Switch",
  },
  {
    id: 6,
    icon: <FaAws className='text-6xl text-primary' />,
    name: "AWS",
  },
];

const PartnersSection = () => {
  return (
    <div className="container mx-auto my-14 md:my-20">
      <h2 className='text-center text-4xl font-bold mb-10 text-gray-800 dark:text-white'>
        Our Partners
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 place-items-center">
        {PartnersData.map((partner) => (
          <div key={partner.id} className='flex flex-col items-center text-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg transition-transform transform hover:scale-105 duration-300'>
            {partner.icon}
            <h3 className='mt-4 text-lg font-semibold text-gray-800 dark:text-white'>{partner.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
export default PartnersSection;