import React from "react";

import { FaPlus } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
const ProductCard = ({ bigOne, item ,product}) => {
  const navigate = useNavigate();
  // console.log(product?.storageOptions[1])
  return (
    <div
      onClick={() =>
        navigate(`/productdetails/${product?._id}`,{replace:true})
      }
      className={` bg-base-100   border-2 hover:bg-gray-200 ${
        bigOne ? "h-full w-full p-16 " : " md:p-4 md:w-[300px] md:h-[375px] w-[196px] h-[281px] p-2"
      }`}
    >
      {bigOne ||<h1 className="text-[10px] font-medium  flex justify-center bg-green-700 text-white w-10 ">
        HOT
      </h1>}
      <figure className={`flex justify-center mt-6`}>
        <img src={product?.images[1]} alt="phone" className={`${bigOne ? "w-[224.53px] h-[300px]" : "md:w-[130.58px] md:h-[182.85px] w-[83px] h-[113px]"}`} />
      </figure>
      <div
        className={`flex flex-col  w-full   ${
          bigOne ? "gap-8  justify-center " : "justify-start"
        }`}
      >
        <div className="flex justify-between w-full mt-3">
          {bigOne ? (
            <h1 className="text-center font-bold font-mono text-[16px]  text-sky-500  items-end   w-full">
              {product?.features[0].feature} : {product?.features[0].value}
            </h1>
          ) : (
            <>
              <h1 className="flex font-semibold font-mono text-[10px] text-sky-500  items-end">
                SMART PHONE
              </h1>
              <button className="text-black border-2 rounded-full hover:border-sky-500 hover:bg-sky-500">
                <FaPlus size={15} className="m-2" />
              </button>{" "}
            </>
          )}
        </div>

        <h2
          className={`card-title  font-bold ${
            bigOne ? " text-[20px] flex justify-center w-full text-center" : "text-[14px] mt-3"
          }`}
        >
           {product?.name}  
           <div className="hidden md:block">  - {product?.colors[1]}</div>
        </h2>

        <div
          className={`flex  text-sm mt-2  text-gray-500  ${
            bigOne ? "justify-center gap-5" : "justify-between text-xs pe-16"
          }`}
        >
          <h3 className="text-[12px]">INR</h3>
          <h2 className="font-bold text-black">{product?.price.oldPrice}</h2>
          <h2 className="line">{product?.price.newPrice}</h2>
        </div>
        {bigOne ? (
          <div className="flex justify-center items-end">
            <button className="btn  bg-sky-600 text-white rounded-none font-semibold mt-10 py-[9px] px-[58px] text-[14px]">
            ADD TO CART
          </button>
          </div>
          
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default ProductCard;
