import React from 'react';

import { LuHeartHandshake } from "react-icons/lu";
import { FaEnvira } from "react-icons/fa6";
import { SiApachestorm } from "react-icons/si";
import { TbMoneybag } from "react-icons/tb";
import { FaShippingFast, FaTools, FaAward, FaRegLightbulb } from "react-icons/fa";
import { GiLoveLetter } from "react-icons/gi";

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
  {
    id: 5,
    icon: <FaShippingFast className='text-4xl md:text-5xl text-primary' />,
    text: "Fast Shipping",
    description: "We understand the importance of time, which is why we offer fast and reliable shipping services across Morocco and Africa, ensuring you get your products as quickly as possible."
  },
  {
    id: 6,
    icon: <FaTools className='text-4xl md:text-5xl text-primary' />,
    text: "Technical Support",
    description: "Our expert technical support team is available to help you with any issues or questions regarding your electronics, ensuring a seamless experience from purchase to setup."
  },
  {
    id: 7,
    icon: <FaAward className='text-4xl md:text-5xl text-primary' />,
    text: "Award-Winning Service",
    description: "BUYHIVE has been recognized with numerous industry awards for outstanding service and product quality, further demonstrating our commitment to excellence."
  },
  {
    id: 8,
    icon: <FaRegLightbulb className='text-4xl md:text-5xl text-primary' />,
    text: "Innovative Solutions",
    description: "We stay at the forefront of the latest technological advancements, offering innovative solutions that cater to the needs of modern consumers."
  }
];

const Whyus1 = () => {
  return (
    <div className="container my-14 md:my-20">
      {/* Services section */}
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

      {/* Letter section */}
      <div className="mt-20 p-8 border rounded-lg shadow-lg bg-gradient-to-r from-blue-50 to-blue-100 dark:from-gray-800 dark:to-gray-900">
        <div className="flex flex-col items-center text-center">
          <GiLoveLetter className="text-6xl text-blue-600 dark:text-blue-300 mb-6" />
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">A Letter from Our Team</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            Dear Valued Customer,
            <br /><br />
            At BUYHIVE, we believe in more than just selling products. We believe in building lasting relationships with our customers. 
            Each product we sell has been handpicked with care to ensure it meets the highest standards of quality and innovation. 
            We are dedicated to providing the best customer experience, from the moment you browse our website to the moment your purchase arrives at your doorstep.
            <br /><br />
            Thank you for trusting us with your electronics needs. We promise to continue delivering the best, because your satisfaction is our priority.
            <br /><br />
            Sincerely,
            <br />
            The BUYHIVE Team
          </p>
        </div>
      </div>

      <br />
      <br />
      <br />
    </div>
  );
}

export default Whyus1;
