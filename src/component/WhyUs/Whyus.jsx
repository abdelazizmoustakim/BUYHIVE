import React from 'react';
import { LuHeartHandshake } from "react-icons/lu";
import { FaEnvira } from "react-icons/fa6";
import { SiApachestorm } from "react-icons/si";
import { TbMoneybag } from "react-icons/tb";

const ServiceData = [
  {
    id: 1,
    icon: <LuHeartHandshake className='text-4xl md:text-5xl text-primary' />,
    text: "So Why Us?",
    description: "At BUYHIVE, we proudly stand as the premier electronics business in Morocco and throughout Africa. Our dedication to quality, innovation, and customer satisfaction sets us apart in the industry. We offer a wide range of cutting-edge products, ensuring that our customers have access to the best technology available."
  },
  {
    id: 2,
    icon: <FaEnvira className='text-4xl md:text-5xl text-primary' />,
    text: "Our Values?",
    description: "Integrity, quality, and innovation are the core values at BUYHIVE. We strive to create a positive impact through our products and services, ensuring our customers receive the best experience possible."
  },
  {
    id: 3,
    icon: <SiApachestorm className='text-4xl md:text-5xl text-primary' />,
    text: "Our Stuff",
    description: "We offer a diverse range of the latest electronics, from smartphones to home appliances. Each product is selected to meet the highest standards of performance and quality."
  },
  {
    id: 4,
    icon: <TbMoneybag className='text-4xl md:text-5xl text-primary' />,
    text: "Cost-Effective Solutions",
    description: "At BUYHIVE, we believe in providing high-quality products at affordable prices. Our cost-effective solutions ensure that you get the best value for your money without compromising on quality."
  },
];
const Whyus = () => {
  return (
    <div className="container my-14 md:my-20">
      <h1 id="Whyus" className='text-center text-3xl font-bold mb-8 text-white-800'>Why Choose Us?</h1>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {ServiceData.map((data) => (
          <div key={data.id} className='flex flex-col items-start p-4 border rounded-lg shadow-lg transition-transform transform hover:scale-105 duration-300 bg-white dark:bg-gray-800'>
            {data.icon}
            <div className='mt-4'>
              <h1 className='text-lg font-bold text-gray-800 dark:text-white'>{data.text}</h1>
              <p className='text-gray-600 dark:text-gray-300 text-sm mt-2'>{data.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Whyus;