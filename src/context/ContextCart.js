import { createContext, useContext, useState } from "react";

const ContextCart = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const removeFromCart = (item) => {
    setCartItems(cartItems.filter((apple) => apple !== item));
  };

  return (
    <ContextCart.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </ContextCart.Provider>
  );
};

export const useCart = () => {
  return useContext(ContextCart);
};
