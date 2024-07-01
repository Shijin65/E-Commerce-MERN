import React from "react";
import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";

const ProductSection = () => {
  const products = [
    {
      id: 1,
      name: "iPhone 14 Pro max 256GB - Deep Purple",
      price: "4,699.00",
      oldPrice: "4,699.00",
      category: "AUDIO AMPLIFIER, HDMI PROJECTORS",
      isHot: true,
    },
    {
      id: 2,
      name: "iPhone 13 Pro max 256GB - Deep Purple",
      price: "4,699.00",
      oldPrice: "4,699.00",
      category: "AUDIO AMPLIFIER, HDMI PROJECTORS",
      isHot: true,
    },
    {
      id: 3,
      name: "iPhone 12 Pro max 256GB - Deep Purple",
      price: "4,699.00",
      oldPrice: "4,699.00",
      category: "AUDIO AMPLIFIER, HDMI PROJECTORS",
      isHot: true,
    },
    {
      id: 4,
      name: "iPhone 11 Pro max 256GB - Deep Purple",
      price: "4,699.00",
      oldPrice: "4,699.00",
      category: "AUDIO AMPLIFIER, HDMI PROJECTORS",
      isHot: true,
    },
    {
      id: 3,
      name: "iPhone 12 Pro max 256GB - Deep Purple",
      price: "4,699.00",
      oldPrice: "4,699.00",
      category: "AUDIO AMPLIFIER, HDMI PROJECTORS",
      isHot: true,
    },
    {
      id: 4,
      name: "iPhone 11 Pro max 256GB - Deep Purple",
      price: "4,699.00",
      oldPrice: "4,699.00",
      category: "AUDIO AMPLIFIER, HDMI PROJECTORS",
      isHot: true,
    },
  ];
  return (
    <div className="lg: w-full   flex flex-col items-center">
      <div>
        <span className="font-bold text-3xl  text-start w-full ">Product</span>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 mt-6 ">
          <div className="row-span-2 col-span-1  hidden lg:block relative">
            <ProductCard bigOne />
          </div>
          <div className="grid grid-cols-2  col-span-4 md:grid-cols-3  lg:col-span-2 relative">
            {products.map((item,index) => (
               <ProductCard key={index} item={item}/>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSection;
