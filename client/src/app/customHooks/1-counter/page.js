"use client";
import React from "react";
import { useCounter } from "./useCounter";

export default function App() {
  const { count, increment, decrement, reset } = useCounter(0);

  return (
    <div className="min-h-screen flex items-center justify-center bg-orange-200 text-black">
      <div className="bg-white rounded-xl shadow-md p-6 w-72 text-center">
        <h1 className="text-2xl font-bold mb-2">Counter</h1>

        <p className="text-4xl font-semibold text-gray-800 mb-6">{count}</p>

        <div className="flex gap-3 justify-center">
          <button
            onClick={decrement}
            className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 transition"
          >
            -
          </button>

          <button
            onClick={increment}
            className="px-4 py-2 rounded-lg bg-gray-800 text-white hover:bg-gray-700 transition"
          >
            +
          </button>
        </div>

        <button
          onClick={reset}
          className="mt-4 text-sm text-gray-500 hover:text-gray-700 transition"
        >
          Reset
        </button>
      </div>
    </div>
  );
}
