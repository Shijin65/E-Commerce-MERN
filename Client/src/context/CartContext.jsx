import React, { createContext, useState, useContext } from 'react';

// Create Context
const CartContext = createContext();

// Custom hook to use the Cart Context
export const useCart = () => useContext(CartContext);

// Provider component to wrap the application
export const CartProvider = ({ children }) => {

  const [cartItems, setCartItems] = useState([]);
  console.log(cartItems)

  const addToCart = (item) => {
    const existingItemIndex = cartItems.findIndex((cartItem) => cartItem.id === item.id);
  
    if (existingItemIndex >= 0) {
      console.log('Item already exists in cart, updating quantity');
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingItemIndex].count += item.count;
      updatedCartItems[existingItemIndex].subtotal = updatedCartItems[existingItemIndex].quantity * updatedCartItems[existingItemIndex].price;

      setCartItems(updatedCartItems); // Update the state with updated items
    } else {
      console.log('Adding new item to cart', item);

      const newItem = {
        ...item,
        subtotal: item.quantity * item.price, // Calculate subtotal for new item
      };
      setCartItems([...cartItems, newItem]); // Add new item to cartItems array
    }
  };



  const editCartItem = (itemIdToEdit, newQuantity) => {
    console.log(itemIdToEdit, newQuantity)
    const updatedCartItems = cartItems.map((item) => {
      console.log(item._id)
      if (item._id === itemIdToEdit) {
        console.log(item._id ,"try")
        return { ...item, quantity: newQuantity ,subtotal: newQuantity* item.price};
      }
      return item;
    });
    setCartItems(updatedCartItems);
  };



  const removeFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item._id !== id)); //Remove the item from the cart
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart ,editCartItem}}>
      {children}
    </CartContext.Provider>
  );
};