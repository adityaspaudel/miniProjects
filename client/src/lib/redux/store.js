import { combineReducers, configureStore } from "@reduxjs/toolkit";

import counterReducer from "./slices/counterSlice"; // Example
import cartReducer from "./slices/cartSlice";
import themeReducer from "./slices/themeSlice";
import todosReducer from "./slices/todosSlice";
import notesReducer from "./slices/notesSlice";

import moviesReducer from "./slices/moviesSlice";
import authReducer from "./slices/authSlice";
import languageReducer from "./slices/languageSlice";

import wishlistReducer from "./slices/wishlistSlice";
import expenseReducer from "./slices/expenseSlice";
import budgetReducer from "./slices/budgetSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import readingListReducer from "./slices/readingListSlice";
import habitsReducer from "./slices/habitsSlice";

const persistConfig = {
  key: "root",
  storage,
  whitelist: [
    "cart",
    "wishlist",
    "todos",
    "notes",
    "expense",
    "budget",
    "readingList",
    "habits",
  ],
};
const rootReducer = combineReducers({
  counter: counterReducer,
  cart: cartReducer,
  theme: themeReducer,
  todos: todosReducer,
  notes: notesReducer,
  movies: moviesReducer,
  auth: authReducer,
  language: languageReducer,
  wishlist: wishlistReducer,
  expense: expenseReducer,
  budget: budgetReducer,
  readingList: readingListReducer,
  habits: habitsReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
