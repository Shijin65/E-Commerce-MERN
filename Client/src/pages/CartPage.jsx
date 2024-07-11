import React, { useContext, useEffect, useState } from "react";
import productImage from "../assets/productImage.png";
import { useLocation, useNavigate } from "react-router-dom";
import AuthContext from "../context/Authcontext";
import { useCart } from "../context/CartContext";
const CartPage = () => {
  const [count, setcount] = useState(1);
  const Navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const location = useLocation();
  const { cartItems, editCartItem } = useCart();

  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.subtotal, 0);
  };
  const handleCheckOut = async () => {
    const orderData = {
      userId: user._id,
      products: cartItems,
      totalAmount: calculateTotalPrice(),
    };
    console.log(orderData);
    const response = await fetch(`${import.meta.env.VITE_API_URL}/api/order`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(orderData),
    });
    const orderres =await response.json()
    if (!orderres.error) {
      Navigate("/ordersuccess", { replace: true });
    } else {
      alert("something went wrong")
    }
  };
  return (
    <div className=" bg-white-100 py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-10">Cart</h1>
        <div className="flex flex-col md:flex-row justify-between gap-10">
          <div className="w-full md:w-2/3 bg-white p-6  mb-6 md:mb-0">
            <table className="min-w-full">
              <thead>
                <tr>
                  <th className="py-2 text-start font-semibold">Product</th>
                  <th className="py-2 ">Price</th>
                  <th className="py-2">Quantity</th>
                  <th className="py-2">Subtotal</th>
                </tr>
              </thead>
              <tr className="border "></tr>
              <tbody>
                {cartItems.map((item) => (
                  <tr className="">
                    <td className="py-8 flex justify-evenly items-center ">
                      <div className="w-20 h-20 ">
                        {/* PRODUCT IMAGE */}
                        <img src={item.image} alt="Product" className="h-16" />
                      </div>
                      <span className="text-center">{item.name}</span>
                    </td>
                    <td className="py-8  text-center">INR {item.price}.00</td>
                    <td className="py-8  ">
                      <div className="flex items-center  justify-center">

                        {/* MINUS BUTTON */}
                        <button
                          className="px-2 py-1 bg-transparent border text-gray-700 rounded-l"
                          onClick={() =>
                            editCartItem(
                              item._id,
                              item.quantity > 1 ? item.quantity - 1 : 1
                            )
                          }
                        >
                          -
                        </button>
                        {/* QUANTITY */}
                        <input
                          type="text"
                          value={item.quantity}
                          className=" py-1 w-12 text-center border-t border-b border-gray-300"
                          readOnly
                        />

                        {/*PLUS BUTTON */}
                        <button
                          className="px-2 py-1 bg-transparent border text-gray-700 rounded-r"
                          onClick={() =>
                            editCartItem(item._id, item.quantity + 1)
                          }
                        >
                          +
                        </button>
                      </div>
                    </td>
                    <td className="py-8 text-center">
                      INR {item.price * item.quantity}.00
                    </td>
                  </tr>
                ))}

                <tr className="border "></tr>
              </tbody>
            </table>
            <div className="mt-8 flex items-center justify-between">
              <div>
                <input
                  type="text"
                  placeholder="Coupon code"
                  className="p-2 border w-[30]"
                />
                <button className="p-2 bg-black text-white ">
                  APPLY COUPON
                </button>
              </div>
              <div>
                <button
                  className="p-2 text-black border"
                  onClick={() => editCartItem(cartItems._id, count)}
                >
                  UPDATE CART
                </button>
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-1/3 bg-white p-6 shadow-lg my-14">
            <h2 className="text-2xl font-bold mb-4 ">Cart Totals</h2>
            <div className=" border-b border-gray-300 py-5">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>INR {calculateTotalPrice()}.00</span>
              </div>
            </div>
            <div className=" border-gray-300 py-10">
              <div className="flex justify-between">
                <span>Total</span>
                <span className="font-bold text-lg">
                  INR {calculateTotalPrice()}.00
                </span>
              </div>
            </div>
            <button
              className="w-full bg-cyan-500 text-white p-4 mt-4 rounded"
              onClick={handleCheckOut}
            >
              PROCEED TO CHECKOUT
            </button>
          </div>
        </div>
      </div>
          
    </div>
  );
};

export default CartPage;
