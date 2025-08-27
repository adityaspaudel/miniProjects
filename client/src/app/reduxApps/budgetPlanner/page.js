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
      <div className="flex flex-col justify-center items-center min-h-1/2 w-1/2 bg-red-300 rounded-lg">
        <h1 className="text-2xl font-bold mb-4">💰 Budget Planner</h1>
        {/* Budget Setter */}
        <div className="mb-4">
          <input
            type="number"
            placeholder="Enter Budget"
            value={budgetInput}
            onChange={(e) => setBudgetInput(e.target.value)}
          />
          <button onClick={handleSetBudget}>Set Budget</button>
        </div>
        <div>
          <p>
            Total Budget: <b>₹{budget}</b>
          </p>
          <p className="text-lg">
            Total Expenses: <b>₹{totalExpenses}</b>
          </p>
          <p className="text-lg">
            Remaining: <b>₹{remaining}</b>
          </p>
        </div>
        {/* Add Expense */}
        <div>
          <input
            type="text"
            placeholder="Expense Name"
            value={expenseName}
            onChange={(e) => setExpenseName(e.target.value)}
          />
          <input
            type="number"
            placeholder="Amount"
            value={expenseAmount}
            onChange={(e) => setExpenseAmount(e.target.value)}
          />
          <button onClick={handleAddExpense}>Add</button>
        </div>
        {/* Expense List */}
        <ul className="mb-4">
          {expenses.map((exp) => (
            <li key={exp.id}>
              <span>
                {exp.name} - ₹{exp.amount}
              </span>
              <button onClick={() => dispatch(removeExpense(exp.id))}>
                remove
              </button>
            </li>
          ))}
        </ul>
        {expenses.length > 0 && (
          <button onClick={() => dispatch(clearExpenses())}>Clear All</button>
        )}
      </div>
    </div>
  );
}
