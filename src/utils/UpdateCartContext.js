import { createContext, useReducer } from "react";

// ✅ Initial State
const initialState = {
  cart: [],
  count: 0
};

// ✅ Reducer Function
const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, action.payload], // Item add hoga
        count: state.count + 1 // Count update hoga
      };

    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter(item => item?.info?.id !== action.payload), // Remove item
        count: state.count > 0 ? state.count - 1 : 0, // Count decrement
        count: !(state.cart.length === 0) && 0
      };

    default:
      return state;
  }
};

// ✅ Create Context
export const CartContext = createContext();

// ✅ Provider Component
export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};
