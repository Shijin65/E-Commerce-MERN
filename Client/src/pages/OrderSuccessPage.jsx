import React, { useEffect } from "react";
import tickImage from "../assets/tickimage.jpg";
import { useNavigate } from "react-router-dom";
const OrderSuccessPage = () => {
    const navigate = useNavigate()
  useEffect(() => {
    setTimeout(() => {
        navigate({pathname:"/orders"})
    }, 5000);
  }, []);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-transparent rounded-lg p-8 w-full  text-center">
        <div className="mb-4">
          <img src={tickImage} alt="Green tick" className="mx-auto h-12 w-12" />
        </div>
        <h1 className="text-2xl font-bold mb-4">
          Your order has been placed successfully.
        </h1>
        <p className="text-gray-600">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus nobis
          repellat placeat.
        </p>
      </div>  
    </div>
  );
};

export default OrderSuccessPage;
