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
        <form
          onSubmit={handleSubmit}
          className="flex gap-4 justify-between items-center"
        >
          <input
            className="text-black px-2 rounded-sm"
            type="text"
            placeholder="Expense Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <input
            className="text-black px-2 rounded-sm"
            type="number"
            placeholder="Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <button
            type="submit"
            className="text-sm bg-green-400 hover:bg-green-500 px-2 rounded-sm"
          >
            Add Expense
          </button>
        </form>
        {/* Expense List */}
        <h2 className="font-bold"> Expenses</h2>
        <ul className="flex flex-col bg-blue-200 p-4 font-mono w-full">
          {expenses.map((exp) => (
            <li key={exp.id} className="flex  justify-between items-center">
              <div className="flex gap-2 justify-between items-center w-3/4">
                <div>{exp.title}</div>
                <div> Rs. {exp.amount}</div>
              </div>
              <button
                onClick={() => dispatch(removeExpense(exp.id))}
                className="text-sm bg-red-400 hover:bg-red-500 px-2 rounded-sm"
              >
                {" "}
                Remove
              </button>
            </li>
          ))}
        </ul>
        {/* Total */}
        <h3 className="font-bold">
          Total: Rs. {total} <hr className="w-full border-black" />
        </h3>
        {expenses.length > 0 && (
          <button
            onClick={() => dispatch(clearExpenses())}
            className="bg-gray-300 hover:bg-gray-400 text-red-500  font-bold px-4 rounded-sm"
          >
            Clear All
          </button>
        )}
      </div>
    </div>
  );
}
