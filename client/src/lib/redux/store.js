import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "./slices/counterSlice"; // Example

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
