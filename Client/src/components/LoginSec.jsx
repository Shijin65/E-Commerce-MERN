import React, { useContext, useState } from "react";
import AuthContext from "../context/Authcontext";

const LoginSec = () => {
  const [userData,setuserData]=useState({
    email:"",
    password:""
  })

  const {LoginUser}=useContext(AuthContext)


  const handleSubmit=(event)=>{
    event.preventDefault()
    console.log(import.meta.env.VITE_API_URL)
    LoginUser({...userData})
  }
  const handlechange=(event)=>{
    const {name,value}=event.target;
    setuserData({...userData,[name]:value})
  }
  return (
    <form
      onSubmit={handleSubmit}
      action=""
      className="logincontainer flex flex-col gap-2 w-full items-center "
    >
      {/* EMAIL */}
      <input
      name="email"
      value={userData.email}
        type="email"
        placeholder="Email ID"
        className="border-2 p-4 w-full  input-bordered  max-w-lg rounded-sm"
        onChange={handlechange}
      />

      {/* PASSWORD */}
      <input
      name="password"
      value={userData.password}
        type="password"
        placeholder="Password"
        className="border-2 p-4 w-full  input-bordered  md:max-w-lg rounded-sm"
        onChange={handlechange}
      />
      <button
        className=" btn  bg-sky-400 rounded-none px-16 mt-3"
        type="submit"
      >
        Login
      </button>
    </form>
  );
};

export default LoginSec;
