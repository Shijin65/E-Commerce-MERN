import React, { useEffect, useState } from "react";

const OrderStatusPage = () => {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    const fetchorder = async () => {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/order`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("auth")}`,
          },
        }
      );
      if (response.ok) {
        const data = await response.json();
        setOrders(data);
        console.log(data);
      } else {
        console.error("Failed to fetch orders");
      }
    };
    fetchorder();
  }, [localStorage.getItem("auth")]);

  return (
    <div className="w-full px-5 flex flex-col gap-5 ">
      {orders.map((order) => {
        console.log(order)
        return(
        <div className="bg-slate-200 p-4 rounded-md">
          <h1 className="mb-3">OrderId : {order._id}</h1>

          <div className="flex flex-col gap-4 ">{order.products.map((product)=>(<div className="flex items-center bg-slate-100 gap-6">
            <img src={product.image} alt="product image" className="h-20"/>
            <div className="flex flex-col md:flex-row gap-6">
                <h1>{product.name}</h1>
            <h1>{product.color}</h1>
            <h1>{order.status}</h1>
            <h1>{product.price}</h1>
            <h1>{product.quantity}</h1>
            <h1>{product.subtotal}</h1>
            </div>    
            </div>))}
            </div>
            <div className="mt-4">Total Amount  :  {order.totalAmount}</div>
        </div>
      )})}
    </div>
  );
};

export default OrderStatusPage;
