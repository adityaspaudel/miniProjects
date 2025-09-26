"use client";

import {
  addExpense,
  clearExpenses,
  removeExpense,
} from "@/lib/redux/slices/expenseSlice";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// Changed import to PieChart
import { PieChart } from "@mui/x-charts/PieChart";

// 🎨 Palette for unique pie slice colors
const PIE_COLORS = [
  "#4682B4", // Steel Blue
  "#FF6347", // Tomato
  "#3CB371", // Medium Sea Green
  "#FFD700", // Gold
  "#8A2BE2", // Blue Violet
  "#FF4500", // Orange Red
  "#20B2AA", // Light Sea Green
  "#DDA0DD", // Plum
];

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

  // 🛠️ DATA TRANSFORMATION: Required for PieChart
  const pieChartData = expenses.map((expense, index) => ({
    id: expense.id,
    value: expense.amount,
    label: expense.title,

    color: PIE_COLORS[index % PIE_COLORS.length],
  }));

  return (
    <div className="flex flex-col gap-2 justify-center items-center bg-slate-300 text-black ">
      <div className="flex gap-4">
        <div className=" flex flex-col gap-2 content-center items-center  bg-orange-400 p-4 rounded-xl">
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
          <div className="flex flex-col gap-2">
            <div className="flex gap-4 content-between items-center">
              <ul className="flex flex-col bg-blue-200 p-4 font-mono w-full">
                {" "}
                <h2 className="font-bold"> Expenses</h2>
                {expenses.map((exp) => (
                  <li
                    key={exp.id}
                    className="flex  justify-between items-center"
                  >
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
              <div className="flex gap-2">
                {expenses.length > 0 && (
                  <PieChart
                    series={[
                      {
                        data: pieChartData,
                        innerRadius: 0,
                        outerRadius: 100,
                        paddingAngle: 0,
                        cornerRadius: 2,
                      },
                    ]}
                    height={200}
                    width={200}
                    slotProps={{
                      legend: {
                        direction: "column",
                        position: { vertical: "middle", horizontal: "right" },
                        padding: 0,
                      },
                    }}
                  />
                )}
              </div>
            </div>
          </div>

          {/* Total */}
          <h3 className="font-bold">
            Total: Rs. {total} <hr className="w-full border-black" />
          </h3>
          {expenses.length > 0 && (
            <button
              onClick={() => dispatch(clearExpenses())}
              className="bg-gray-300 hover:bg-gray-400 text-red-500  font-bold px-4 rounded-sm"
            >
              Clear All
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
