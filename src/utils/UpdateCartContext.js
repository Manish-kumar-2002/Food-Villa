import { createContext,useEffect, useReducer } from "react";

// ✅ Initial State
const initialState = {
  cart: JSON.parse(localStorage.getItem("cart")) || [],
  count: localStorage.getItem("count") || 0,
};

// ✅ Reducer Function
const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":{
      const updateCart = [...state.cart, action.payload]
      const updateCount = +(state.count) + 1
      // localStorage.setItem("cart",JSON.stringify(updateCart))
      // localStorage.setItem("count",updateCount) 
      return {
        ...state,
        cart: updateCart, // Item add hoga
        count: updateCount // Count update hoga
      }}

    case "REMOVE_FROM_CART":{
      const removeCart = state.cart.filter(item => item?.info?.id !== action.payload)
      const removeCount = state.count > 0 ? state.count - 1 : 0
      localStorage.setItem("cart",JSON.stringify(removeCart))
      localStorage.setItem("count",removeCount)
      return {
        ...state,
        cart: removeCart, // Remove item
        count: removeCount, // Count decrement  
      }}

    default:
      return state;
  }
};

// ✅ Create Context
export const CartContext = createContext();

// ✅ Provider Component
export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  // 🟢 Ensure localStorage updates on state change
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(state.cart));
    localStorage.setItem("count", state.count);
  }, [state.cart, state.count]);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};
