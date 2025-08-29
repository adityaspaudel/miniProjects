import { createSlice } from "@reduxjs/toolkit";

const habitsSlice = createSlice({
  name: "habits",
  initialState: {
    list: [],
  },
  reducers: {
    addHabit: (state, action) => {
      state.list.push({
        id: Date.now(),
        title: action.payload,
        completed: false,
      });
    },
    toggleHabit: (state, action) => {
      const habit = state.list.find((h) => h.id === action.payload);
      if (habit) habit.completed = !habit.completed;
    },
    removeHabit: (state, action) => {
      state.list = state.list.filter((h) => h.id !== action.payload);
    },
    clearHabits: (state) => {
      state.list = [];
    },
  },
});

export const { addHabit, toggleHabit, removeHabit, clearHabits } =
  habitsSlice.actions;

export default habitsSlice.reducer;
