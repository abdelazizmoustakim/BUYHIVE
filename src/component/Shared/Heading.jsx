import React from 'react';

const Heading = ({ title, subtitle }) => {
  return (
    <div className='text-center mb-12 max-w-[600px] mx-auto space-y-3'>
      <h1 className='text-3xl font-semibold lg:text-4xl text-gray-800 dark:text-gray-200 transition duration-300'>
        {title}
      </h1>
      <p className='text-sm lg:text-base text-gray-600 dark:text-gray-400 transition duration-300'>
        {subtitle}
      </p>
    </div>
  );
};

export default Heading;
