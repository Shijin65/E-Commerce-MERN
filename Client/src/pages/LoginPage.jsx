import React from "react";

function LoginPage() {
  return (
    <div className="flex flex-col  container h-[60vh] justify-center items-center gap-4 w-full p-2">
      <h1 className="text-2xl font-bold ">Login/Register to your account</h1>
      <h3 className="text-gray-600 text-sm mb-2">
        Lorem ipsum dolor sit amet consectetur. Sapien ut libero sed lacinia
        egestas placerat ut sagittionec.
      </h3>
     
        <form action="" className="logincontainer flex flex-col gap-2 w-full items-center ">
          <input
            type="text"
            placeholder="Email ID"
            className="border-2 p-4 w-full  input-bordered  max-w-lg rounded-sm"
          />
          <input
            type="text"
            placeholder="Password"
            className="border-2 p-4 w-full  input-bordered  md:max-w-lg rounded-sm"
          />
          <button className=" btn  bg-sky-400 rounded-none px-16 mt-3" type="submit">
            Login
          </button>
        </form>
      
    </div>
  );
}

export default LoginPage;
