import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const inventorySlice = createSlice({
  name: "inventory",
  initialState,
  reducers: {
    addItem: {
      reducer(state, action) {
        state.items.push(action.payload);
      },
      prepare(name, qty, price) {
        return {
          payload: {
            id: nanoid(),
            name,
            qty: Number(qty),
            price: Number(price),
          },
        };
      },
    },
    deleteItem(state, action) {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    updateItem(state, action) {
      const { id, changes } = action.payload;
      const index = state.items.findIndex((item) => item.id === id);
      if (index !== -1) {
        state.items[index] = { ...state.items[index], ...changes };
      }
    },
  },
});

export const { addItem, deleteItem, updateItem } = inventorySlice.actions;
export default inventorySlice.reducer;
