"use client";

import {
  addExpense,
  clearExpenses,
  removeExpense,
} from "@/lib/redux/slices/expenseSlice";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function ExpenseTracker() {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const expenses = useSelector((state) => state.expense.expenses);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !amount) return;
    dispatch(addExpense({ title, amount: parseFloat(amount) }));
    setTitle("");
    setAmount("");
  };

  const total = expenses.reduce((acc, cur) => acc + cur.amount, 0);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Expense Tracker</h1>

      {/* Form */}
      <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Expense Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button type="submit">Add Expense</button>
      </form>

      {/* Expense List */}
      <h2>Expenses</h2>
      <ul>
        {expenses.map((exp) => (
          <li key={exp.id}>
            {exp.title} - Rs. {exp.amount}
            <button onClick={() => dispatch(removeExpense(exp.id))}>
              {" "}
              Remove Expense ❌
            </button>
          </li>
        ))}
      </ul>

      {/* Total */}
      <h3>Total: Rs. {total}</h3>
      {expenses.length > 0 && (
        <button onClick={() => dispatch(clearExpenses())}>Clear All</button>
      )}
    </div>
  );
}
