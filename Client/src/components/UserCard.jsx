import React from "react";
import { FaUserAlt } from "react-icons/fa";
import { IoTrashBin } from "react-icons/io5";
const UserCard = ({item}) => {
  return (
    <div className="md:w-60 bg-slate-100 rounded-lg flex items-center  hover:bg-slate-200  shadow-md cursor-pointer text-sm gap-2 px-5 py-4 justify-between">
        <FaUserAlt size={30} />
      <div>
        <h1>{item.username}</h1>
        <h1>{item.email}</h1>
      </div>
      <IoTrashBin size={20} className="hover:text-red-600"/>
    </div>
  );
};

export default UserCard;
