"use client";

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setBudget,
  addExpense,
  removeExpense,
  clearExpenses,
} from "@/lib/redux/slices/budgetSlice";

export default function BudgetPlanner() {
  const dispatch = useDispatch();
  const { budget, expenses } = useSelector((state) => state.budget);

  const [budgetInput, setBudgetInput] = useState("");
  const [expenseName, setExpenseName] = useState("");
  const [expenseAmount, setExpenseAmount] = useState("");

  const totalExpenses = expenses.reduce((acc, curr) => acc + curr.amount, 0);
  const remaining = budget - totalExpenses;

  const handleSetBudget = () => {
    if (budgetInput > 0) {
      dispatch(setBudget(Number(budgetInput)));
      setBudgetInput("");
    }
  };

  const handleAddExpense = () => {
    if (expenseName && expenseAmount > 0) {
      dispatch(
        addExpense({
          id: Date.now(),
          name: expenseName,
          amount: Number(expenseAmount),
        })
      );
      setExpenseName("");
      setExpenseAmount("");
    }
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen w-screen bg-pink-200 text-black px-8 py-4">
      <div className="flex flex-col gap-4 justify-center items-center min-h-1/2 w-1/2 bg-red-300 rounded-lg p-4 shadow shadow-gray-400 hover:shadow-md transition 1s">
        <h1 className="text-2xl font-bold mb-4 ">
          💰 Budget Planner
          <hr className="border-black" />
        </h1>
        {/* Budget Setter */}
        <div className="mb-4 flex gap-2">
          <input
            className=" rounded-sm bg-gray-100 px-4 py-1"
            type="number"
            placeholder="Enter Budget"
            value={budgetInput}
            onChange={(e) => setBudgetInput(e.target.value)}
          />
          <button
            onClick={handleSetBudget}
            className="bg-orange-400 hover:bg-orange-500 px-2 rounded-sm text-sm text-white cursor-pointer"
          >
            Set Budget
          </button>
        </div>
        <div>
          <p>
            Total Budget: <b>Rs. {budget}</b>
          </p>
          <p className="text-sm">
            Total Expenses: <b>Rs. {totalExpenses}</b>
          </p>
          <p className="text-sm">
            Remaining: <b>Rs. {remaining}</b>
          </p>
        </div>
        {/* Add Expense */}
        <div className="flex gap-2">
          <input
            className="px-2 rounded-sm font-mono bg-gray-100"
            type="text"
            placeholder="Expense Name"
            value={expenseName}
            onChange={(e) => setExpenseName(e.target.value)}
          />
          <input
            type="number"
            className="px-2 rounded-sm font-mono bg-gray-100"
            placeholder="Amount"
            value={expenseAmount}
            onChange={(e) => setExpenseAmount(e.target.value)}
          />
          <button
            onClick={handleAddExpense}
            className="bg-green-500 hover:bg-green-600 px-2 rounded-sm text-sm text-white cursor-pointer"
          >
            Add
          </button>
        </div>
        {/* Expense List */}
        <ul className="mb-4  flex flex-col gap-2 bg-gray-100 p-4">
          {expenses.map((exp) => (
            <li
              key={exp.id}
              className="flex gap-2 justify-between items-center w-full "
            >
              <div className="flex gap-2">
                <div>{exp.name}</div>
                <div className="flex font-bold font-mono">Rs. {exp.amount}</div>
              </div>
              <button
                onClick={() => dispatch(removeExpense(exp.id))}
                className="bg-red-500 hover:bg-red-600 text-sm rounded-sm font-mono px-2 text-white cursor-pointer "
              >
                remove
              </button>
            </li>
          ))}
        </ul>
        {expenses.length > 0 && (
          <button
            onClick={() => dispatch(clearExpenses())}
            className="bg-gray-500 hover:bg-gray-600 font-mono rounded-sm px-2 py-1 text-white cursor-pointer"
          >
            Clear All
          </button>
        )}
      </div>
    </div>
  );
}
