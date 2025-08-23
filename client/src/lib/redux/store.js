import { combineReducers, configureStore } from "@reduxjs/toolkit";

import counterReducer from "./slices/counterSlice"; // Example
import cartReducer from "./slices/cartSlice";
import themeReducer from "./slices/themeSlice";
import todosReducer from "./slices/todosSlice";

const rootReducer = combineReducers({
  counter: counterReducer,
  cart: cartReducer,
  theme: themeReducer,
  todos: todosReducer,
});
export const store = configureStore({
  reducer: rootReducer,
});
