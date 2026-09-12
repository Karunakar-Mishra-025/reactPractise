import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
    const [id, setid] = useState(0)
  const totalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };
  const addProductToCart = (product, quantity) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(
        (item) => item.product.title === product.title,
      );
      if (existingItem) {
        return prevCart.map((item) =>
          item.product.id === product.id
            ? {
                ...item,
                quantity: item.quantity + quantity,
              }
            : item,
        );
      }

      return [
        ...prevCart,
        {
          product,
          quantity: quantity,
        },
      ];
    });
  };
  const getId = () =>{
    return id
  }
  const totalAmount = () => {
    return cart.reduce(
      (total, item) => total + item.product.price * item.quantity,
      0,
    );
  };
  const isAddedToCart = (title) => {
    return cart.some((item) => item.product.title === title);
  }
  const removeProduct = (productId) => {
    setCart((prevCart) =>
      prevCart.filter((item) => item.product.id !== productId),
    );
  };
  const updateId = ()=>{
    setid((prev)=>prev+1)
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addProductToCart,
        totalItems,
        totalAmount,
        isAddedToCart,
        removeProduct,
        getId,
        updateId,
        id
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
