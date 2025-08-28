
import { createSlice } from "@reduxjs/toolkit";

let idCounter = 1; // Simple incremental ID generator

const readingListSlice = createSlice({
  name: "readingList",
  initialState: {
    books: [],
  },
  reducers: {
    addBook: {
      reducer(state, action) {
        state.books.push(action.payload);
      },
      prepare(title, author) {
        return {
          payload: {
            id: idCounter++,
            title: title?.trim() || "Untitled",
            author: author?.trim() || "Unknown",
            completed: false,
            addedAt: Date.now(),
          },
        };
      },
    },
    toggleBook(state, action) {
      const book = state.books.find((b) => b.id === action.payload);
      if (book) book.completed = !book.completed;
    },
    removeBook(state, action) {
      state.books = state.books.filter((b) => b.id !== action.payload);
    },
    clearList(state) {
      state.books = [];
      idCounter = 1; // Reset IDs when clearing list
    },
  },
});

export const { addBook, toggleBook, removeBook, clearList } =
  readingListSlice.actions;
export default readingListSlice.reducer;
