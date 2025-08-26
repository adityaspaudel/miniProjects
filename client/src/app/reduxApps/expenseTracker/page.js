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
    <div className="flex flex-col gap-2 justify-center items-center bg-slate-300 text-black h-screen w-screen">
      <div className=" flex flex-col gap-2 content-center items-center min-h-1/2 w-1/2 bg-orange-400 p-4 rounded-xl">
        <div className="">
          <h1 className="text-4xl font-bold">Expense Tracker</h1>
          <hr className="border-black border-1" />
        </div>
        {/* Form */}
        <form onSubmit={handleSubmit} className="flex gap-4 justify-between items-center">
          <input
            className="text-black px-2"
            type="text"
            placeholder="Expense Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <input
          className="text-black px-2"
            type="number"
            placeholder="Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <button type="submit">Add Expense</button>
        </form>
        {/* Expense List */}
        <h2>Expenses</h2>
        <ul className="flex flex-col  ">
          {expenses.map((exp) => (
            <li key={exp.id} className="flex gap-2">
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
    </div>
  );
}
