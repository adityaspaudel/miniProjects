"use client";

import {
  decrement,
  increment,
  incrementByAmount,
  reset,
} from "@/lib/redux/slices/counterSlice";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col items-center justify-center text-black bg-amber-100 w-screen h-screen">
      <div className="flex flex-col items-center gap-2 justify-center bg-red-400 border-2 p-4  border-black rounded-lg w-1/2 h-1/2">
        <div>
          <div className="text-4xl">React-Redux Counter</div>
          <hr className="border-1 border-black w-full" />
        </div>
        <button
          className="border-2 border-black rounded-md px-2"
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>

        <span className="text-6xl text-black">{count}</span>

        <button
          className="border-2 border-black rounded-md px-2"
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>

        <button
          onClick={() => dispatch(incrementByAmount(5))}
          className="border-2 border-black rounded-md px-2"
        >
          Increment By 5
        </button>
        <button
          onClick={() => dispatch(reset())}
          className="bg-gray-400 px-2 rounded-md border-2 border-red-300"
        >
          reset
        </button>
      </div>
    </div>
  );
}
