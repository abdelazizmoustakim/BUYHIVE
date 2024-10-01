import React from 'react'
import Heading from "../Shared/Heading" ;
import img1 from "../../assets/Product/p-1.jpeg";
import img2 from "../../assets/Product/p-2.jpeg";
import img3 from "../../assets/Product/p-3.jpeg";
import img4 from "../../assets/Product/p-4.jpeg";
import img5 from "../../assets/Product/p-5.jpeg";
import img6 from "../../assets/Product/p-6.jpeg";
import img7 from "../../assets/Product/p-7.jpeg";
import img8 from "../../assets/Product/p-8.jpeg";
import ProductCard from './ProductCard';

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
        title: "Boat Headphone",
        price: "120",
        aosDelay: "0"
    },
    {
        id:3,
        img: img3,
        title: "Boat Headphone",
        price: "120",
        aosDelay: "0"
    },
    {
        id:4,
        img: img4,
        title: "Boat Headphone",
        price: "120",
        aosDelay: "0"
    },
]
const ProductsData2 = [
    {
        id:1,
        img: img5,
        title: "Boat Headphone",
        price: "120",
        aosDelay: "0"
    },
    {
        id:2,
        img: img6,
        title: "Boat Headphone",
        price: "120",
        aosDelay: "0"
    },
    {
        id:3,
        img: img7,
        title: "Boat Headphone",
        price: "120",
        aosDelay: "0"
    },
    {
        id:4,
        img: img8,
        title: "Boat Headphone",
        price: "120",
        aosDelay: "0"
    },
]
const Product = () => {
  return (
    <div>
      <div className='container' id='shop'>
        {/* Header section */}
        <Heading title="Our Products"
        subtitle={"Explore Our Product"}
        />
        {/* Body section */}
        <ProductCard data={ProductsData}/>
        <ProductCard data={ProductsData2}/>

      </div>
    </div>
  )
}
export default Product;