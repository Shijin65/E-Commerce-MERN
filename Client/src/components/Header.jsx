import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.jpg";
import { FaUserAlt } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";
import AuthContext from "../context/Authcontext";

export default function Header() {
  const { user, setUser } = useContext(AuthContext);
  const Navigate = useNavigate();
  return (
    <div className="container p-5 lg:px-16 text-2xl font-serif flex justify-between  items-center min-w-full">
    {/* LOGO */}
      <div>
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
      </div>

      {/* LOGIN / REGISTER */}
      <div className="flex justify-between items-center gap-10">
        <Link to="/login">
          <FaUserAlt size={15} />
        </Link>

      {/* ORDER */}
        <Link to="/orders">
          <FaShoppingBag size={15} />
        </Link>

      {/* ADMIN PORTAL */}
        {user?.role === "1"?<Link to="/admin">
          <button className="btn">Admin Portal</button>{" "}
        </Link>:""}
        {user && (
          <div
            className="avatar placeholder "
            onClick={() => {
              setUser(null);
              localStorage.clear();
              Navigate("/login", { replace: true });
            }}
          >
            {/* AVATAR */}
            <div className="bg-neutral text-neutral-content w-8 rounded-full">
              <span className="text-xs">{user.username.match(/\b(\w)/g)}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
