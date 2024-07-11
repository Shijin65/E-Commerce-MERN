import React, { useContext, useState } from "react";
import AuthContext from "../context/Authcontext";

const RegisterSec = () => {
  const [userData, setuserData] = useState({
    username: "",
    email: "",
    password: "",
    role:0
  });

  const { RegisterUser } = useContext(AuthContext);

  const onchangeHandler = (event) => {
    const { name, value } = event.target;
    setuserData({ ...userData, [name]: value });
  };

  const handleSubmite = (event) => {
    console.log(userData);
    event.preventDefault();
    RegisterUser({ ...userData });
  };
  return (
    <form
      onSubmit={handleSubmite}
      action=""
      className="logincontainer flex flex-col gap-2 w-full items-center "
    >

      {/* NAME */}
      <input
        name="username"
        type="text"
        placeholder="Name"
        className="border-2 p-4 w-full  input-bordered  max-w-lg rounded-sm"
        value={userData.username}
        onChange={onchangeHandler}
      />
      {/* EMAIL */}
      <input
        name="email"
        type="email"
        placeholder="Email ID"
        className="border-2 p-4 w-full  input-bordered  max-w-lg rounded-sm"
        value={userData.email}
        onChange={onchangeHandler}
      />

      {/* PASSWORD */}
      <input
        name="password"
        value={userData.password}
        type="password"
        placeholder="Password"
        className="border-2 p-4 w-full  input-bordered  md:max-w-lg rounded-sm"
        onChange={onchangeHandler}
      />
      <button
        className=" btn  bg-sky-400 rounded-none px-16 mt-3"
        type="submit"
      >
        REGISTER
      </button>
    </form>
  );
};

export default RegisterSec;
