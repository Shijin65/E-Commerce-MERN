import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { useNavigate } from "react-router-dom";

const ProductSection = () => {

  

  const [products ,setProducts]=useState([])

  useEffect(() => {
    handleproduct()
  }, [])
  
  const handleproduct =async()=>{
    const response = await fetch(`${import.meta.env.VITE_API_URL}/api/product`,
      {
        method: "GET",
      }
    )
    const userres = await response.json();
    if (!userres.error) {
      console.log(userres.AllProducts);
        setProducts(userres.AllProducts)
    }
  }
  const Navigate = useNavigate()
  return (
    <>
    
    <div className="w-full px-0 flex flex-col items-center ">
      <div>
        <span className="font-bold text-3xl  text-start w-full hidden md:block">Product</span>
        <span className="font-bold text-lg  text-start w-full  md:hidden">Recommended for you</span>

        <div className="grid grid-cols-2 lg:grid-cols-3 mt-6 ">
          {/* BIG CARD */}
          <div className="row-span-2 col-span-1  hidden lg:block relative">
            <ProductCard product={products[0]} bigOne />
          </div>
          
          {/* NORMAL CARDS */}
          <div className="grid grid-cols-2  col-span-4 lg:grid-cols-3  lg:col-span-2 ">
            {products.slice(1,7).map((product,index) => (
               <ProductCard key={index}  product={product}/>
            ))}
          </div>
        </div>
      </div>
    </div>
    <h1 onClick={()=>Navigate("/products",{replace:true})} className="text-end w-[90vw] text-blue-400 font-semibold text-sm">View All ----</h1>
    </>
  );
};

export default ProductSection;
