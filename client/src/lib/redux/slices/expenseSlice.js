import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  expenses: [],
};

const expenseSlice = createSlice({
  name: "expense",
  initialState,
  reducers: {
    addExpense: (state, action) => {
      state.expenses.push({
        id: Date.now(),
        title: action.payload.title,
        amount: action.payload.amount,
      });
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

export const { addExpense, removeExpense, clearExpenses } =
  expenseSlice.actions;
export default expenseSlice.reducer;
