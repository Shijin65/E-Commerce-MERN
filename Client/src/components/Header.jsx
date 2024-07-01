import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg";
import { FaUserAlt } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";
import AuthContext from "../context/Authcontext";

export default function Header() {
  const { user } = useContext(AuthContext);
  console.log(user?.username);

  return (
    <div className="container p-5 lg:px-16 text-2xl font-serif flex justify-between  items-center min-w-full">
      <div>
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
      </div>
      <div className="flex justify-between items-center gap-10">
        <Link to="/login">
          <FaUserAlt size={15} />
        </Link>

        <Link to="/">
          <FaShoppingBag size={15} />
        </Link>
        {user && (
          <div className="avatar placeholder">
            <div className="bg-neutral text-neutral-content w-8 rounded-full">
              <span className="text-xs">{user.username.match(/\b(\w)/g)}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
