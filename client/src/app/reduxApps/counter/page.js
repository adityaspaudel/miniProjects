"use client";

import { decrement, increment } from "@/lib/redux/slices/counterSlice";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col items-center justify-center text-black bg-amber-100">
      <div className="flex flex-col items-center justify-center bg-red-400 border-2 p-4  border-blue-500 rounded-lg w-96">
        <button
          className="border-2 border-black rounded-md px-2"
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span className="text-4xl">{count}</span>
        <button
          className="border-2 border-black rounded-md px-2"
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}
