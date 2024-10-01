import React from 'react';
import Slider from 'react-slick';
import image1 from '../../assets/Hero/laptop-with-colorful-screen-white-background-3d-rendering.png';
import image2 from '../../assets/Hero/smart-watch.png';
import image3 from '../../assets/Hero/iPhone-16.png';
import image4 from '../../assets/Hero/applewatch1.png';
import Button from '../Shared/Button';

const HerData = [
  {
    id: 1,
    img: image1,
    subtitle: 'Beats Solo',
    title: 'MacBook Air',
    title2: 'Laptop',
    description: 'MacBook Air M2',
  },
  {
    id: 2,
    img: image2,
    subtitle: 'Beats Solo',
    title: 'Apple Watch',
    title2: 'Watch',
    description: 'Apple Watch Series 7',
  },
  {
    id: 3,
    img: image3,
    subtitle: 'apple',
    title: 'iphone',
    title2: 'Iphone16',
    description: 'H33',
  },
  {id: 4,
  img: image4,
  subtitle: 'Beats Solo',
  title: 'Wireless',
  title2: 'series10',
  description: 'H33',
},
];

const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Added autoplay option
    autoplaySpeed: 4000,
    cssEase: 'ease-in-out',
    pauseOnHover: false,
    pauseOnFocus: true,
  };

  return (
    <div className='container'>
      <div className='overflow-hidden rounded-3xl min-h-[550px] sm:min-h-[650px] hero-bg-color flex justify-center items-center'>
        <div className='container pb-8 sm:pb-0'>
          {/* Hero section */}
          <Slider {...settings}>
            {HerData.map((data) => (
              <div key={data.id}>
                <div className='grid grid-cols-1 sm:grid-cols-2'>
                  {/* Text content section */}
                  <div
                    className='flex flex-col justify-center gap-4 sm:pl-3 pt-12 sm:pt-0 text-center 
                    sm:text-left order-2 sm:order-1 relative z-10'>
                    <h1 data-aos="zoom-out" 
                    data-aos-duration="700"
                    data-aos-once="true"

                    className='text-2xl sm:text-6xl lg:text-2xl font-bold'>
                      {data.subtitle}
                    </h1>
                    <h1 data-aos="zoom-out"
                    data-aos-offset='0' 
                    data-aos-duration="700"
                    data-aos-delay="300" 
                    className='text-5xl sm:text-6xl lg:text-7xl font-bold'>
                      {data.title}
                    </h1>
                    <h1 
                    className='text-5xl uppercase text-white dark:text-white/50 sm:text-[80px] md:text-[100px] xl:text-[150px] font-bold'
                    data-aos="zoom-out" 
                    data-aos-duration="700"
                    data-aos-once="true">
                      {data.title2}
                    </h1>
                    <div 
                    data-aos="zoom-in" 
                    data-aos-duration="700"
                    data-aos-delay="300"
                    >
                      <Button text='Start Shopping' bgColor='bg-primary' textColor='text-white' />
                    </div>
                  </div>
                  {/* Image section */}
                  <div className='order-1 sm:order-2'>
                    <div 
                    data-aos="zoom-out" 
                    data-aos-once="true"
                    className='relative z-10'
                    >
                      <img
                      
                        src={data.img}
                        alt=''
                        className='w-[400px] h-[500px] sm:w-[500px] sm:scale-105 lg:scale-110 object-contain mx-auto drop-shadow-[-8px_4px_6px_rgba(0,0,0,.4)] relative z-40'
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}
export default Hero;