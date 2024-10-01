import React from 'react';
import { WiSleet } from "react-icons/wi";

const BannerData1 = ({ data }) => {
  return (
    <div className="min-h-[400px] flex justify-center items-center py-12">
      <div className="container px-4">
        <div
          style={{ backgroundColor: data.bgColor }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center text-white rounded-3xl"
        >
          {/* First column */}
          <div data-aos="zoom-in" className="h-full flex justify-center items-center">
            <img
              src={data.image}
              alt=""
              className="scale-125 w-full md:w-[840px] mx-auto drop-shadow-2xl object-cover"
            />
          </div>

          {/* Second column */}
          <div className="p-6 sm:p-8">
            <p data-aos="slide-right" className="text-sm sm:text-base">{data.discount}</p>
            <h1 data-aos="zoom-out" className="uppercase text-3xl sm:text-4xl lg:text-7xl font-bold">
              {data.description}
            </h1>
            <p data-aos="fade-up" className="text-sm sm:text-base">{data.date}</p>
          </div>

          {/* Third column */}
          <div className="p-6 sm:p-8 flex flex-col justify-center items-center text-center space-y-4">
            <WiSleet className="text-6xl sm:text-7xl md:text-8xl text-blue-200 animate-spin-slow" data-aos="slide-right" />
            <p className="text-base sm:text-lg md:text-xl font-semibold">
              Winter with us is like a storm of offers
            </p>
            <p className="text-sm sm:text-base italic opacity-75">
              Stay cozy, stay warm, and enjoy the best deals!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerData1;
