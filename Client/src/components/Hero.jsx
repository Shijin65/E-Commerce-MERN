import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import hero from "../assets/herobanner.png";
export default function Hero() {
  const items = [
    <div className="flex justify-center cursor-pointer">
      <img
        src={hero}
        alt="carousel"
        
        className=""
        role="presentation"
      />
    </div>,
    <div className="flex justify-center cursor-pointer">
      <img
        src={hero}
        alt="carousel"
        
        className=""
        role="presentation"
      />
    </div>,
    <div className="flex justify-center cursor-pointer">
      <img
        src={hero}
        alt="carousel"
        
        className=""
        role="presentation"
      />
    </div>,
  ];

  let carousel;

  const renderPrevButton = ({ isDisabled }) => {
    return (
      <button
        className=" absolute  top-1/2 transform -translate-y-1/2 left-4 bg-gray-800 text-white  rounded-full disabled:opacity-50 disabled:cursor-not-allowed"
        disabled={isDisabled}
        onClick={() => carousel.slidePrev()}
      >
<IoIosArrowBack  size={30} className="bg-slate-400 p-1 rounded-full md:size-8 size-6"/>      </button>
    );
  };

  const renderNextButton = ({ isDisabled }) => {
    return (
      <button
        className="absolute top-1/2 transform -translate-y-1/2 right-4  text-white  rounded-full disabled:opacity-50 disabled:cursor-not-allowed m-0 p-0"
        disabled={isDisabled}
        onClick={() => carousel.slideNext()}
      >
        <IoIosArrowForward   className="bg-slate-400 p-1 rounded-full md:size-8 size-6 "/>
      </button>
    );
  };
  return (
    <div className=" ">
      <AliceCarousel
      className="max-h-20"
        mouseTracking
        items={items}
        autoPlay
        autoPlayInterval={2000}
        infinite
        renderPrevButton={renderPrevButton}
        renderNextButton={renderNextButton}
        ref={(el) => (carousel = el)}
        disableDotsControls
      />
    </div>
  );
}
