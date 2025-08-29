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
    <div className="text-black bg-slate-300 flex justify-center items-center h-screen w-screen">
      <div className="text-black bg-orange-300 flex flex-col gap-2 min-h-1/2 w-1/2 content-center items-center ">
        <div>
          <h2 className="text-4xl font-bold">Habit Tracker</h2>
          <hr className="border-black border-1" />
        </div>
        <div className="flex flex-col gap-2 ">
          <div className="flex gap-2">
            <input
              type="text"
              value={habit}
              placeholder="Enter a habit"
              onChange={(e) => {
                e.preventDefault();
                setHabit(e.target.value);
              }}
            />
            <button
              onClick={() => handleAdd()}
              className="bg-green-400 hove:bg-green-500 text-sm px-2 rounded-sm"
            >
              Add
            </button>
          </div>
          <button
            onClick={() => dispatch(clearHabits())}
            className="bg-gray-400 hover:bg-gray-500"
          >
            Clear All
          </button>
        </div>
        <ul>
          {habits.map((h) => (
            <li key={h.id} className="">
              <span
                onClick={() => dispatch(toggleHabit(h.id))}
                className={` ${
                  h.completed ? "line-through text-gray-500" : "no-underline"
                }`}
              >
                {h.title}
              </span>
              <button onClick={() => dispatch(removeHabit(h.id))}>
                remove
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
