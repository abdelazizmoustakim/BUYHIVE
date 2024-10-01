import React from 'react';
import Button from '../Shared/ButtonC';
import image1 from '../../assets/Category/camera-photographic-equipment-lens-technology-generative-ai.png'; 
import image2 from '../../assets/Category/smartwatch2-removebg-preview.png'; 
import image3 from '../../assets/Category/macbook.png'; 
import image4 from '../../assets/Category/gaming.png'; 
import image5 from '../../assets/Category/smart-watch.png'; 
import image6 from '../../assets/Category/iphone.png'; 

const Category = () => {
  return (
    <div className='py-12 '>
      <div className='container mx-auto px-4'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12'>
          
          {/* First column - Camera (Canon) */}
          <div data-aos="fade-up" className='relative bg-gradient-to-br from-black via-gray-900 to-black/70 text-white rounded-3xl p-8 h-[400px] flex flex-col justify-between shadow-lg hover:shadow-2xl transition-shadow duration-300'>
            <div className='mb-4'>
              <p className='text-gray-400'>Capture moments with</p>
              <p className='text-3xl font-semibold'>Canon EOS R5</p>
            </div>
            <Button text='Browse' bgColor='bg-primary' textColor='text-white' />
            <img src={image1} alt='Canon Camera' className='absolute bottom-14 right-[10%] w-[230px] -mb-4' />
          </div>

          {/* Second column - Apple Watch (green tint) */}
          <div data-aos="fade-up" data-aos-delay="100" className='relative bg-gradient-to-br from-green-700 via-gray-800 to-black/70 text-white rounded-3xl p-8 h-[400px] flex flex-col justify-between shadow-lg hover:shadow-2xl transition-shadow duration-300'>
            <div className='mb-4'>
              <p className='text-gray-400'>Monitor your health with</p>
              <p className='text-3xl font-semibold'>Apple Watch Series 7</p>
            </div>
            <Button text='Browse' bgColor='bg-primary' textColor='text-white' />
            <img src={image2} alt='Apple Watch' className='absolute bottom-14 right-[10%] w-[230px] -mb-4' />
          </div>

          {/* Third column - MacBook (gray tint) */}
          <div data-aos="fade-up" data-aos-delay="200" className='relative bg-gradient-to-br from-gray-500 via-gray-700 to-gray-900 text-white rounded-3xl p-8 h-[400px] flex flex-col justify-between shadow-lg hover:shadow-2xl transition-shadow duration-300'>
            <div className='mb-4'>
              <p className='text-gray-400'>Unleash power with</p>
              <p className='text-3xl font-semibold'>MacBook Pro M1</p>
            </div>
            <Button text='Browse' bgColor='bg-primary' textColor='text-white' />
            <img src={image3} alt='MacBook Pro' className='absolute bottom-14 right-[10%] w-[230px] -mb-4' />
          </div>

          {/* Fourth column - PS5 (white tint) */}
          <div data-aos="fade-up" data-aos-delay="300" className='relative bg-gradient-to-br from-white via-gray-100 to-white/80 text-black rounded-3xl p-8 h-[400px] flex flex-col justify-between shadow-lg hover:shadow-2xl transition-shadow duration-300'>
            <div className='mb-4'>
              <p className='text-gray-600'>Game in style with</p>
              <p className='text-3xl font-semibold'>PlayStation 5</p>
            </div>
            <Button text='Browse' bgColor='bg-primary' textColor='text-black' />
            <img src={image4} alt='PlayStation 5' className='absolute bottom-14 right-[10%] w-[230px] -mb-4' />
          </div>

          {/* Fifth column - Apple Watch (light blue tint) */}
          <div data-aos="fade-up" data-aos-delay="400" className='relative bg-gradient-to-br from-blue-200 via-gray-300 to-white text-black rounded-3xl p-8 h-[400px] flex flex-col justify-between shadow-lg hover:shadow-2xl transition-shadow duration-300'>
            <div className='mb-4'>
              <p className='text-gray-600'>Explore the new</p>
              <p className='text-3xl font-semibold'>Apple Watch SE</p>
            </div>
            <Button text='Browse' bgColor='bg-primary' textColor='text-black' />
            <img src={image5} alt='Apple Watch SE' className='absolute bottom-14 right-[10%] w-[250px] -mb-4' />
          </div>

          {/* Sixth column - iPhone 13 (dark blue tint) */}
          <div data-aos="fade-up" data-aos-delay="500" className='relative bg-gradient-to-br from-blue-900 via-gray-800 to-black text-white rounded-3xl p-8 h-[400px] flex flex-col justify-between shadow-lg hover:shadow-2xl transition-shadow duration-300'>
            <div className='mb-4'>
              <p className='text-gray-400'>Stay connected with</p>
              <p className='text-3xl font-semibold'>iPhone 13</p>
            </div>
            <Button text='Browse' bgColor='bg-primary' textColor='text-white' />
            <img src={image6} alt='iPhone 13' className='absolute bottom-14 right-[10%] w-[150px] -mb-4' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;