import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "./slices/counterSlice"; // Example
import cartReducer from "./slices/cartSlice";
import themeReducer from "./slices/themeSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    cart: cartReducer,
    theme: themeReducer,
  },
});
