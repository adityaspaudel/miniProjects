import { combineReducers, configureStore } from "@reduxjs/toolkit";

import counterReducer from "./slices/counterSlice"; // Example
import cartReducer from "./slices/cartSlice";
import themeReducer from "./slices/themeSlice";
import todosReducer from "./slices/todosSlice";
import notesReducer from "./slices/notesSlice";

import moviesReducer from "./slices/moviesSlice";

const rootReducer = combineReducers({
  counter: counterReducer,
  cart: cartReducer,
  theme: themeReducer,
  todos: todosReducer,
  notes: notesReducer,
  movies: moviesReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
