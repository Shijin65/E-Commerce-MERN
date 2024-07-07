import React, { useEffect, useState } from "react";

const ShowAllOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchorder = async () => {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/admin/orders`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("auth")}`,
          },
        }
      );
      if (response.ok) {
        const data = await response.json();
        setOrders(data.AllOrders);
      } else {
        console.error("Failed to fetch orders");
      }
    };
    fetchorder();
  }, [localStorage.getItem("auth")]);

  return (
    <div className="flex flex-col items-center w-full gap-5 px-2">
      {orders.map((order) => (
        <div className="w-full bg-slate-300 rounded-md p-5">
          <div
            className=" w-full flex justify-between items-center flex-col md:flex-row"
            onClick={() => document.getElementById("my_modal_3").showModal()}
          >
            <h2>Order ID: {order._id}</h2>
            <h2>Status: {order.status}</h2>
            <h2>Amount: {order.totalAmount}</h2>
            <h2 className="btn">ViewMore</h2>
          </div>
          <dialog id="my_modal_3" className="modal w-full">
            <div className="modal-box w-11/12 max-w-5xl">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                  ✕
                </button>
              </form>

              <div>
                Route Not set
              </div>
            </div>
          </dialog>
        </div>
        
      ))}
    </div>
  );
};

export default ShowAllOrders;
