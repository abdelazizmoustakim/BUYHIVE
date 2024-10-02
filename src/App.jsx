import React from 'react';
import { useEffect } from 'react';
import Navbar from './component/Navbar/Navbar'
import Hero from './component/Hero/Hero';
import Category from './component/Category/Category'
import Discount from "./component/Discount/Discount";
import Services from "./component/Services/Services"
import Banner from "./component/Banner/Banner";
import Partners from "./component/Partners/Partners";
import Air from "./assets/hero/mac.png";
import Air2 from "./assets/hero/airpods2.png";
import Air3 from "./assets/hero/smartwatch2-removebg-preview.png";
import iphone16 from './assets/Hero/iphone-16.png'
import iphonecol from "./assets/Hero/iphonecol.png"
import Footer from './Footer/Footer';
import AOS from "aos";
import "aos/dist/aos.css";
import Product from "./component/Product/Product";
import Whyus from './component/WhyUs/Whyus';
import BannerData1 from './component/Banner/BannerData-1';
const BannerData = {
  discount: "30% OFF",
  title: "Fine Smile",
  date: "10 Jan to 28 Jan",
  image: Air,
  title2: "Air pods",
  title3: "Winter Sale",
  title4:
    "Listen to the world",
  bgColor: "#492C69",
};

const BannerData3 = {
  discount: "30% OFF",
  title: "Fine Smile",
  date: "10 Jan to 28 Jan",
  image:  iphone16,
  title2: "Apple watch",
  title3: "Winter Sale",
  title4:
    "Listen to the world",
  bgColor: "#95a7e7",
};
const BannerData4 ={
  image:  iphonecol,
  bgColor: "#95a7e7",
  description: "You choose the color we deliver !",
  discount: "20% OFF with code Sale20",
  data: "10 Jan to 28 Jan"
}
const BannerData2 = {
  discount: "30% OFF",
  title: "Fine Smile",
  date: "10 Jan to 28 Jan",
  image: Air2,
  title2: "MacBook M2",
  title3: "Winter Sale",
  title4:
    "Listen to the world",
  bgColor: "#e893a1",
};


const App = () => {

  useEffect(() => {
    AOS.init(
      {
        duration:700,
        easing: "ease-in-sine",
        delay:100,
        offset: 100,
      }
    );
    AOS.refresh()  }
    ,[])
  return (
    <div className='bg-white dark:bg-gray-900 dark:text-white
    duration-200 overflow-hidden'>
      <Discount/>
      <Navbar/>
      <Hero/>
      <BannerData1 data={BannerData4}/>
      <Services/>      
      <Category/>
      <Banner data={BannerData}/>
      <Product/>
      <Banner data={BannerData3}/>
      <Product/>
      <Whyus/>
      <Banner data={BannerData2}/>
      <Partners/>
      <Footer/>
    </div>
  )
}
export default App;