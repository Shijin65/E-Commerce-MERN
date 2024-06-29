import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg";
import { FaUserAlt } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";
export default function Header() {
  return (
    <div className="container p-5 lg:px-16 text-2xl font-serif flex justify-between  items-center min-w-full">
      <div><Link to="/">
        <img src={logo} alt="" />
      </Link></div>
      <div className="flex justify-between gap-10">
        <Link to="/login">
          <FaUserAlt size={15}/>
        </Link>
        <Link to="/">
          <FaShoppingBag size={15}/>
        </Link>
      </div>
    </div>
  );
}
