import React from 'react'
import img1 from "../../assets/Product/p-1.jpeg";
import img2 from "../../assets/Product/p-2.jpeg";
import img3 from "../../assets/Product/p-3.jpeg";
import img4 from "../../assets/Product/p-4.jpeg";
import img5 from "../../assets/Product/p-5.jpeg";
import img6 from "../../assets/Product/p-6.jpeg";
import img7 from "../../assets/Product/p-7.jpeg";
import img8 from "../../assets/Product/p-8.jpeg";
import ProductCard from '../../component/Product/ProductCard';

const ProductsData = [
  {
      id:1,
      img: img1,
      title: "Boat Headphone",
      price: "120",
      aosDelay: "0"
  },
  {
      id:2,
      img: img2,
      title: "Macbook",
      price: "1200",
      aosDelay: "0"
  },
  {
      id:3,
      img: img3,
      title: "Iphone 16",
      price: "1400",
      aosDelay: "0"
  },
  {
      id:4,
      img: img4,
      title: "Ps4",
      price: "300",
      aosDelay: "0"
  },
]
const ProductsData2 = [
  {
      id:1,
      img: img5,
      title: "Airpods",
      price: "120",
      aosDelay: "0"
  },
  {
      id:2,
      img: img6,
      title: "Apple watch",
      price: "320",
      aosDelay: "0"
  },
  {
      id:3,
      img: img7,
      title: "Jbl speaker",
      price: "90",
      aosDelay: "0"
  },
  {
      id:4,
      img: img8,
      title: "Ps5",
      price: "600",
      aosDelay: "0"
  },
]
const shop1 = () => {
return (
  <div>
    <br />
    <br />
    <br />
    <div className='container' id='shop'>
      {/* Header section */}
      
      {/* Body section */}
      <ProductCard data={ProductsData}/>
      <ProductCard data={ProductsData2}/>

    </div>
  </div>
)
}
export default shop1;