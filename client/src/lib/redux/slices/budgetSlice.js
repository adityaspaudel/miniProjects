import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  budget: 0,
  expenses: [],
};

const budgetSlice = createSlice({
  name: "budget",
  initialState,
  reducers: {
    setBudget: (state, action) => {
      state.budget = action.payload;
    },
    addExpense: (state, action) => {
      state.expenses.push(action.payload);
    },
    removeExpense: (state, action) => {
      state.expenses = state.expenses.filter(
        (expense) => expense.id !== action.payload
      );
    },
    clearExpenses: (state) => {
      state.expenses = [];
    },
  },
});

export const { setBudget, addExpense, removeExpense, clearExpenses } =
  budgetSlice.actions;

export default budgetSlice.reducer;
