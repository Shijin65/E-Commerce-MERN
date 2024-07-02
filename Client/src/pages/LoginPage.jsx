import React, { useContext, useState } from "react";
import RegisterSec from "../components/RegisterSec";
import LoginSec from "../components/LoginSec";
import AuthContext from "../context/Authcontext";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function LoginPage() {
  const { user } = useContext(AuthContext);
  const Navigate = useNavigate();

  useEffect(() => {
    if (user) {
      console.log(user);
      Navigate("/", { replace: true });
    }
  }, [user]);

  return (
    <div className="flex flex-col  container h-[60vh] justify-center items-center gap-4 w-full p-2">
      <h1 className="text-2xl font-bold ">Login/Register to your account</h1>
      <h3 className="text-gray-600 text-sm mb-2">
        Lorem ipsum dolor sit amet consectetur. Sapien ut libero sed lacinia
        egestas placerat ut sagittionec.
      </h3>
      <div className="lg:w-2/4 w-full">
        <div role="tablist" className="tabs tabs-bordered w-full">
          <input
            type="radio"
            name="my_tabs_1"
            role="tab"
            className="tab"
            aria-label="LOGIN"
            defaultChecked
          />
          {/* LOGIN SECTION */}
          <div role="tabpanel" className="tab-content p-10 w-full ">
            <LoginSec />
          </div>

          <input
            type="radio"
            name="my_tabs_1"
            role="tab"
            className="tab"
            aria-label="REGISTER"
          />
          <div role="tabpanel" className="tab-content p-10">
            {/* REGISTER SECTION */}
            <RegisterSec />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
