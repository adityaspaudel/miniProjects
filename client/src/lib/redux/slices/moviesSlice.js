"use client";

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favorites: [], // { id, title, year }
};

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addFavorite: (state, action) => {
      const exists = state.favorites.find(
        (movie) => movie.id === action.payload.id
      );
      if (!exists) state.favorites.push(action.payload);
    },
    removeFavorite: (state, action) => {
      state.favorites = state.favorites.filter(
        (movie) => movie.id !== action.payload
      );
    },
    clearFavorites: (state) => {
      state.favorites = [];
    },
  },
});

export const { addFavorite, removeFavorite, clearFavorites } =
  moviesSlice.actions;
export default moviesSlice.reducer;
