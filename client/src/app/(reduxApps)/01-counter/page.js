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
      <div className="flex flex-col items-center gap-2 justify-center bg-sky-400 border-2 p-4  border-black rounded-lg w-1/2 min-h-1/2">
        <div>
          <div className="text-4xl font-bold">React-Redux Counter</div>
          <hr className="border-1 border-black w-full" />
        </div>
        <button
          className="border-2 border-black rounded-md px-2 hover:bg-green-600 hover:border-green-600 hover:text-white"
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>

        <span className="text-8xl text-black" title="count value">
          {count}
        </span>

        <button
          className="border-2 border-black rounded-md px-2 hover:bg-red-600 hover:border-red-600 hover:text-white"
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>

        <button
          onClick={() => dispatch(incrementByAmount(5))}
          className="border-2 border-black rounded-md px-2 hover:border-green-600 hover:bg-green-600  hover:text-white "
        >
          Increment By 5
        </button>
        <button
          onClick={() => dispatch(incrementByAmount(10))}
          className="border-2 border-black rounded-md px-2 hover:border-green-600 hover:bg-green-600  hover:text-white"
        >
          Increment By Amount
        </button>
        <button
          onClick={() => dispatch(reset())}
          className="bg-gray-400 px-2 rounded-md border-2 border-gray-400 hover:bg-gray-600 hover:text-white hover:border-gray-600"
        >
          reset
        </button>
      </div>
    </div>
  );
}
