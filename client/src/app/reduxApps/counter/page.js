"use client";

import { decrement, increment } from "@/lib/redux/slices/counterSlice";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col items-center justify-center text-black bg-amber-100 w-screen h-screen">
      <div className="flex flex-col items-center justify-center bg-red-400 border-2 p-4  border-black rounded-lg w-1/2 h-1/2">
        <div className="text-4xl">React-Redux Counter</div>
        <hr className="border-1 border-black w-full" />
        <br />
        <br />
        <button
          className="border-2 border-black rounded-md px-2"
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <br />
        <span className="text-6xl text-black">{count}</span>
        <br />
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
