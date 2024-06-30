import React from "react";
import AliceCarousel from "react-alice-carousel";
import apple from "../assets/apple.png";
import dell from "../assets/dell.png";
import redmi from "../assets/redmi.png";
import samsung from "../assets/samsung.png";
import sony from "../assets/sony.png";
import lg from "../assets/lg.png";
import realme from "../assets/realme.png";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const TopBrandCarosel = () => {
  const items = [
    {
      brandname: "apple",
      src:apple,
    },
    {
      brandname: "dell",
      src: dell,
    },
    {
      brandname: "redmi",
      src: redmi,
    },
    {
      brandname: "samsung",
      src: samsung,
    },
    {
      brandname: "sony",
      src: sony,
    },
    {
      brandname: "lg",
      src: lg,
    },
    {
      brandname: "realme",
      src: realme,
    },
    {
      brandname: "dell",
      src: dell,
    },
    {
      brandname: "dell",
      src: dell,
    },
    {
      brandname: "dell",
      src: dell,
    },
    {
      brandname: "dell",
      src: dell,
    },
    {
      brandname: "dell",
      src: dell,
    },
  ];

  let carousel;

  const renderPrevButton = ({ isDisabled }) => {
    return (
      <button
        className="hidden md:block absolute pb-7 top-1/2 transform -left-8 -translate-y-1/2   text-white  rounded-full disabled:opacity-50 disabled:cursor-not-allowed"
        disabled={isDisabled}
        onClick={() => carousel.slidePrev()}
      >
        <IoIosArrowBack
          size={30}
          className="bg-slate-400 p-1 rounded-full md:size- size-6"
        />{" "}
      </button>
    );
  };

  const renderNextButton = ({ isDisabled }) => {
    return (
      <button
        className="hidden pb-7 md:block absolute top-1/2 transform -translate-y-1/2 -right-4  text-white  rounded-full disabled:opacity-50 disabled:cursor-not-allowed m-0 p-0"
        disabled={isDisabled}
        onClick={() => carousel.slideNext()}
      >
        <IoIosArrowForward className="bg-slate-400 p-1 rounded-full md:size-6 size-6" />
      </button>
    );
  };
  return (
    <div className="mt-8 p-0  flex items-center justify-center">
      <AliceCarousel
        mouseTracking
        items={items.map((item) =><div className=" h-10 w-10 md:h-16 md:w-16 lg:h-24 lg:w-24" onClick={()=>console.log(item.brandname)}>
            <img src={item.src} alt=""/>
          </div>
        )}
        // infinite
        renderPrevButton={renderPrevButton}
        renderNextButton={renderNextButton}
        ref={(el) => (carousel = el)}
        disableDotsControls
        responsive={{
          0: { items: 8 },
          600: { items: 8 },
          1024: { items: 8 },
        }}
      />
    </div>
  );
};

export default TopBrandCarosel;
