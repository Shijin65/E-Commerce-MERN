import React from 'react'

const CartPage = () => {
    return (
        <div className="min-h-screen bg-white-100 py-10">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold text-center mb-10">Cart</h1>
            <div className="flex flex-col md:flex-row justify-between gap-10">
              <div className="w-full md:w-2/3 bg-white p-6  mb-6 md:mb-0">
                <table className="min-w-full">
                  <thead>
                    <tr>
                      <th className="py-2">Product</th>
                      <th className="py-2">Price</th>
                      <th className="py-2">Quantity</th>
                      <th className="py-2">Subtotal</th>
                    </tr>
                  </thead>
                  <tr className='border '></tr>
                  <tbody>
                    <tr>
                      <td className="py-4 flex items-center">
                        <div className="w-20 h-20 ">
                          {/* Placeholder for product image */}
                          <img src={tickImage} alt="Product" className="w-full h-full object-cover"/>
                        </div>
                        <span className="ml-4">iPhone 12 Pro max...</span>
                      </td>
                      <td className="py-4">INR 107.00</td>
                      <td className="py-4">
                        <div className="flex items-center">
                          <button className="px-2 py-1 bg-transparent border text-gray-700 rounded-l">-</button>
                          <input type="text" value="1" className= " py-1 w-12 text-center border-t border-b border-gray-300" readOnly/>
                          <button className="px-2 py-1 bg-transparent border text-gray-700 rounded-r">+</button>
                        </div>
                      </td>
                      <td className="py-4">INR 107.00</td>
                    </tr>
                    <tr className='border '></tr>
                  </tbody>
                </table>
                <div className="mt-8 flex items-center justify-between">
                  <div>
                  <input type="text" placeholder="Coupon code" className="p-2 border w-[30]"/>
                  <button className="p-2 bg-black text-white ">APPLY COUPON</button>
                  </div>
                <div >
                  <button className="p-2 text-black border  ">UPDATE CART</button>
               </div>
                </div>
              </div>
              <div className="w-full md:w-1/3 bg-white p-6 shadow-lg my-14">
                <h2 className="text-2xl font-bold mb-4 ">Cart Totals</h2>
                <div className=" border-b border-gray-300 py-5">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>INR 107.00</span>
                  </div>
                </div>
                <div className=" border-gray-300 py-10">
                  <div className="flex justify-between">
                    <span>Total</span>
                    <span className="font-bold text-lg">INR 107.00</span>
                  </div>
                </div>
                <button className="w-full bg-cyan-500 text-white p-4 mt-4 rounded">PROCEED TO CHECKOUT</button>
              </div>
            </div>
          </div>
        </div>
      );
}

export default CartPage