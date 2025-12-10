"use client";

import {
  addHabit,
  clearHabits,
  removeHabit,
  toggleHabit,
} from "@/lib/redux/slices/habitsSlice";

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function HabitTracker() {
  const [habit, setHabit] = useState("");
  const habits = useSelector((state) => state.habits.list);
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (habit.trim() !== "") {
      dispatch(addHabit(habit));
      setHabit("");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-linear-to-r from-slate-200 to-slate-400">
      <div className="bg-white shadow rounded-lg p-6 w-[500px] flex flex-col gap-4 shadow-black hover:shadow-md transition 1s">
        <h2 className="text-3xl font-bold text-center text-slate-700">
          Habit Tracker
        </h2>
        <hr />

        {/* Input Section */}
        <div className="flex gap-2">
          <input
            className="px-3 py-1 w-full border rounded-md outline-none focus:ring-2 focus:ring-orange-400"
            type="text"
            placeholder="Enter a habit"
            value={habit}
            onChange={(e) => setHabit(e.target.value)}
          />

          <button
            onClick={handleAdd}
            className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded-md transition cursor-pointer"
          >
            Add
          </button>

          {habits.length > 0 && (
            <button
              onClick={() => dispatch(clearHabits())}
              className="bg-gray-500 hover:bg-gray-600 text-white px-3 py-1 rounded-md transition cursor-pointer"
            >
              Clear
            </button>
          )}
        </div>

        {/* List Section */}
        <ul className="flex flex-col gap-2 mt-2 max-h-[300px] overflow-y-auto pr-1">
          {habits.map((h) => (
            <li
              key={h.id}
              className="flex justify-between items-center bg-orange-200 px-3 py-2 rounded-md"
            >
              <span
                onClick={() => dispatch(toggleHabit(h.id))}
                className={`cursor-pointer ${
                  h.completed ? "line-through text-gray-500" : "text-slate-700"
                }`}
              >
                {h.title}
              </span>

              <button
                onClick={() => dispatch(removeHabit(h.id))}
                className="bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded-md transition text-xs cursor-pointer"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
