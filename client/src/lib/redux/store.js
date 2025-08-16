import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "./slices/counterSlice"; // Example
import cartReducer from "./slices/cartSlice";

export const store = configureStore({
  reducer: {
    counter: { counter: counterReducer, cart: cartReducer },
  },
});
