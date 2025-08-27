"use client";

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setBudget, addExpense } from "@/lib/redux/slices/budgetSlice";
import { clearExpenses, removeExpense } from "@/lib/redux/slices/expenseSlice";

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
    <div className="flex flex-col justify-center items-center h-screen w-screen bg-zinc-400 text-black">
      <div className="flex flex-col gap-4 justify-center items-center min-h-1/2 w-1/2 bg-red-300 rounded-lg p-4">
        <h1 className="text-2xl font-bold mb-4">💰 Budget Planner</h1>
        {/* Budget Setter */}
        <div className="mb-4 flex gap-2">
          <input
            className="px-2 rounded-sm"
            type="number"
            placeholder="Enter Budget"
            value={budgetInput}
            onChange={(e) => setBudgetInput(e.target.value)}
          />
          <button
            onClick={handleSetBudget}
            className="bg-orange-400 hover:bg-orange-500 px-2 rounded-sm text-sm"
          >
            Set Budget
          </button>
        </div>
        <div>
          <p>
            Total Budget: <b>Rs. {budget}</b>
          </p>
          <p className="text-lg">
            Total Expenses: <b>Rs. {totalExpenses}</b>
          </p>
          <p className="text-lg">
            Remaining: <b>Rs. {remaining}</b>
          </p>
        </div>
        {/* Add Expense */}
        <div className="flex gap-2">
          <input
            className="px-2 rounded-sm font-mono"
            type="text"
            placeholder="Expense Name"
            value={expenseName}
            onChange={(e) => setExpenseName(e.target.value)}
          />
          <input
            type="number"
            className="px-2 rounded-sm font-mono"
            placeholder="Amount"
            value={expenseAmount}
            onChange={(e) => setExpenseAmount(e.target.value)}
          />
          <button
            onClick={handleAddExpense}
            className="bg-green-400 hover:bg-green-500 px-2 roudned-sm text-sm"
          >
            Add
          </button>
        </div>
        {/* Expense List */}
        <ul className="mb-4 p-4 flex flex-col gap-2 bg-orange-300">
          {expenses.map((exp) => (
            <li key={exp.id} className="flex gap-2 justify-between">
              <span>
                {exp.name} - ₹{exp.amount}
              </span>
              <button
                onClick={() => dispatch(removeExpense(exp.id))}
                className="bg-red-400 hover:bg-red-400 text-sm rounded-sm font-mono px-2"
              >
                remove
              </button>
            </li>
          ))}
        </ul>
        {expenses.length > 0 && (
          <button onClick={() => dispatch(clearExpenses())} className="bg-gray-200 hover:bg-gray-400 font-mono rounded-sm px-2">Clear All</button>
        )}
      </div>
    </div>
  );
}
