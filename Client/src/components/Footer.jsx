import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaPhoneAlt,
} from "react-icons/fa";
import logo from "../assets/logo.jpg";
export default function Footer() {
  return (
    <footer className=" py-8 px-8 sm:px-16 mt-auto">
      {/* LOGO */}
      <div className="w-full md:w-auto mb-20 hidden md:block ">
        <img src={logo} alt="" />
      </div>

      <div className="container mx-auto  flex  gap-3 flex-wrap-reverse justify-between ">
        <div className="  w-full md:w-auto mb-4 md:mb-0">
          <h3 className="text-sm font-Poppins font-bold text-black mb-5">
            CONNECTED WITH US
          </h3>
          <div className="flex space-x-4 mt-2 ">
            <a
              href="https://www.facebook.com"
              className="  bg-slate-200 p-2 rounded-full text-black mr-2 hover:bg-slate-300"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.twitter.com"
              className="  bg-slate-200 p-2 rounded-full text-black mr-2 hover:bg-slate-300"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.linkedin.com"
              className="  bg-slate-200 p-2 rounded-full text-black mr-2 hover:bg-slate-300"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://www.youtube.com"
              className="  bg-slate-200 p-2 rounded-full text-black mr-2 hover:bg-slate-300"
            >
              <FaYoutube />
            </a>
          </div>
        </div>
        <div className="w-full   md:w-auto mb-4 md:mb-0">
          <h3 className="text-sm font-Poppins font-bold text-black mb-5">
            IMPORTANT LINKS
          </h3>
          <div className="flex flex-col md:flex-row gap-4 text-sm">
            <a href="#" className="text-gray-600 hover:text-gray-800">
              Terms & Conditions
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800">
              Privacy & Policy
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800">
              Help & FAQs
            </a>
          </div>
        </div>

        <div className="w-full   md:w-auto mb-4 md:mb-0 ">
          <div className="flex items-start flex-col gap-2  justify-center ">
            <div className="bg-sky-500 p-2 rounded-full text-white  ">
              <FaPhoneAlt size={20} />
            </div>

            <h3 className="text-sm font-Poppins font-bold text-black">
              Helpline
            </h3>
            <p className="text-gray-800">1800 456 84788</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-8 border-t pt-4">
        <p className="text-center text-gray-600">
          Arab Deals © 2023. All Rights Reserved
        </p>
      </div>
    </footer>
  );
}
