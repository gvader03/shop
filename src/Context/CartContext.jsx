import { createContext, useContext, useState } from "react";

export const CartContext = createContext();

export function useShoppingCart() {
  return useContext(CartContext);
}

export function ShoppingCartProvider({ children }) {
  const [cart, setCartItems] = useState([]);


  return (
    <CartContext.Provider
      value={{
        cart,
        setCartItems
      }}
    >
      {children}
    </CartContext.Provider>
  );
}