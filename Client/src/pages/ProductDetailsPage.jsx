import React, { useState } from "react";
import productImage from "../assets/productImage.png";
import { FaCheck } from "react-icons/fa";
const ProductDetailsPage = () => {
  const ProductData = {
    name: "iPhone 12 Pro max",

    colors: [
      {
        name: "black",
        class: "bg-black checked:bg-black",
        selectedClass: "ring-gray-400",
      },
      {
        name: "Red",
        class: "bg-red-500 checked:bg-red-500",
        selectedClass: "ring-gray-400",
      },
      {
        name: "Green",
        class: "bg-green-800 checked:bg-green-800",
        selectedClass: "ring-gray-900",
      },
      {
        name: "Gray",
        class: "bg-gray-400 checked:bg-gray-400",
        selectedClass: "ring-gray-900",
      },
      {
        name: "Blue",
        class: "bg-blue-600 checked:bg-blue-800",
        selectedClass: "ring-gray-900",
      },
    ],
    storage: [
      { name: "128GB", inStock: false },
      { name: "256GB", inStock: true },
      { name: "514GB", inStock: true },
      { name: "1TB", inStock: true },
    ],
  };

  const [Product, setProduct] = useState({
    count:0,
    color: "",
    storage: "",
  });
  console.log(Product);
  const handleColorChange = (event) => {
    const { name, value } = event.target;
    setProduct({ ...Product, [name]: value });
  };
  const handleStorageChange = (event) => {
    const { name, value } = event.target;
    setProduct({ ...Product, [name]: value });
  };

  return (
    <div className="grid grid-cols-1 gap-10 md:grid-cols-2  w-full h-full  p-10">
      {/* <!-- Image gallery --> */}
      <div className="flex flex-col justify-center items-center w-full gap-8">
        <img className="w-1/3 " src={productImage} alt="device image" />
        {/* small images */}
        <div className="flex gap-8 ">
          <div>
            <img className="w-28" src={productImage} alt="device image" />
          </div>
          <div>
            <img className="w-28" src={productImage} alt="device image" />
          </div>
          <div>
            <img className="w-28" src={productImage} alt="device image" />
          </div>
        </div>
      </div>

      {/* DETAILS */}
      <div className="flex flex-col gap-5 justify-center">
        {/* heading */}
        <h1 className="text-2xl font-semibold text-black">
          {" "}
          iPhone 12 Pro max 256GB Deep Purple
        </h1>

        {/* rating */}
        <div className="flex gap-4 text-gray-500 items-center justify-start">
          <div className="rating rating-sm gap-2 -ms-4">
            <input
              type="radio"
              name="rating-1"
              className="rating-hidden "
              defaultChecked
            />
            <input type="radio" name="rating-1" className="mask mask-star  " />
            <input type="radio" name="rating-1" className="mask mask-star" />
            <input type="radio" name="rating-1" className="mask mask-star" />
            <input type="radio" name="rating-1" className="mask mask-star" />
            <input type="radio" name="rating-1" className="mask mask-star" />
          </div>
          <h1 className="text-sm md:text:lg">( There are no reviews yet )</h1>
        </div>

        {/* price */}
        <div className={`flex  text-sm mt-2  text-gray-500   gap-8 `}>
          <h3 className="text-[12px]">INR</h3>
          <h2 className="font-bold text-black">4,699.00</h2>
          <h2 className="line">4,699.00</h2>
        </div>
        <h1 className="text-gray-400 text- w-full">
          Pellentesque habitant morbi tristique senectus et netus et malesuada
          fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae,
          ultricies eget, tempor sit amet, ante.
        </h1>
        <form action="">
          <h2 className="my-5">
            <span className="font-bold  ">Colour : </span> {Product.color}
          </h2>
          <div className="flex  md:gap-14  gap-6 mt-8">
            {ProductData.colors.map((color) => (
              <label
                key={color.name}
                className="flex items-center cursor-pointer"
              >
                <input
                  type="radio"
                  name="color"
                  value={color.name}
                  className="hidden"
                  checked={Product.color === color.name}
                  onChange={handleColorChange}
                />
                <div
                  className={`md:w-10 md:h-10 w-6 h-6 rounded-full flex items-center justify-center ${color.class}`}
                >
                  {Product.color === color.name && (
                    <div>
                      <FaCheck className="font-thin" color="white" />
                    </div>
                  )}
                </div>
              </label>
            ))}
          </div>

          {/* Memory */}
          <h2 className="my-5 font-semibold">Internal Memory</h2>
          <div className="flex  md:gap-14 gap-6 mt-8 ">
            {ProductData.storage.map((space) => (
              <label
                key={space.name}
                className="flex items-center cursor-pointer outline outline-2  outline-slate-400"
              >
                <input
                  type="radio"
                  name="storage"
                  value={space.name}
                  className="hidden"
                  checked={Product.storage === space.name}
                  onChange={handleStorageChange}
                />
                <div
                  className={`flex items-center justify-center border-2 rounded-none w-16 md:min-w-20 hover:none p-2 ${Product.storage === space.name&&"bg-black text-white "}`}
                >
                  {space.name}
                </div>
              </label>
            ))}
          </div>

          <div className="flex justify-start mt-10 py-6 items-center gap-10 border-y-2">
              <div className="flex  text-xl">
                 <div className="border-2 p-3 cursor-pointer"
                 onClick={()=>setProduct({...Product,count:Product.count-1})} >-</div> 
                 <div className="border-y-2 p-3">{Product.count}</div> 
                 <div className="border-2 p-3 cursor-pointer"
                 onClick={()=>{setProduct({...Product,count:Product.count+1})}}
                 >+</div> 
              </div>
              <button className="btn bg-black hover:bg-black rounded-none text-white">ADD TO CART</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
