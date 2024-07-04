import React from "react";
import { FaUserAlt } from "react-icons/fa";
import { IoTrashBin } from "react-icons/io5";
const UserCard = ({item}) => {
  const handledelete = async () => {
    const response = await fetch(
      `${VITE_API_URL}/api/product/${product._id}`,
      {
        method: "DELETE",
      }
    );
    const data = await response.json();
    if (response.ok) {
      alert("product deleted");
      rerender()
      console.log("Product deleted successfully", data);
    } else {
      console.error("Failed to delete product", data);
    }
  };
  return (
    <div className="md:w-60 bg-slate-100 rounded-lg flex items-center  hover:bg-slate-200  shadow-md cursor-pointer text-sm gap-2 px-5 py-4 justify-between">
        <FaUserAlt size={30} />
      <div>
        <h1>{item.username}</h1>
        <h1>{item.email}</h1>
      </div>
      <IoTrashBin onClick={handledelete} size={20} className="hover:text-red-600"/>
    </div>
  );
};

export default UserCard;
