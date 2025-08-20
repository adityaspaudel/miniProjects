"use client";

import React, { useState } from "react";

const CoinFlipperGame = () => {
  const [side, setSide] = useState(null);
  const [choice, setChoice] = useState(null);
  const [result, setResult] = useState(null);

  const handleClick = () => {
    const randomNum = Math.random();
    if (randomNum < 0.5) {
      setSide("tail");
      // if (side == choice) {
      //   setResult("you won");
      // } else {
      //   setResult("you lose");
      // }
    } else {
      setSide("head");
      // if (side == choice) {
      //   setResult("you won");
      // } else {
      //   setResult("you lose");
      // }
    }
  };

  // const handleChange = (e) => {
  //   setChoice(e.target.value);
  //   console.log(choice);
  // };
  return (
    <div className="flex gap-2 content-center justify-center items-center h-screen w-screen bg-slate-400 text-black">
      <div className="flex flex-col bg-sky-400 content-center items-center min-h-1/2 w-1/2 rounded-lg ">
        <div>
          <div className="text-6xl ">Coin Flipper Game</div>
          <hr className="border-black" />
        </div>
        <label htmlFor="headTail">
          <input
            type="radio"
            name="headTail"
            value="head"
            checked={choice === "head"}
            onChange={(e) => {
              // e.preventDefault();
              setChoice(e.target.value);
              console.log(e.target.value);
            }}
          />
          Head
        </label>
        <label>
          <input
            name="headTail"
            type="radio"
            value="tail"
            checked={choice === "tail"}
            onChange={(e) => {
              // e.preventDefault();
              setChoice(e.target.value);
              console.log(e.target.value);
            }}
          />
          Tail
        </label>
        <div>
          {choice ? (
            <p>your choice: {choice}</p>
          ) : (
            <p>No choice selected yet</p>
          )}
        </div>
        <button
          className="inline-block px-2 w-14 rounded-lg bg-amber-600 hover:bg-amber-500"
          onClick={(e) => {
            e.preventDefault();
            handleClick();
          }}
        >
          flip
        </button>
        {/* <div>{side && <div>computer's choice: {side}</div>}</div>
        <duv>result: {result}</duv> */}
        <div>computer's choice: {side}</div>
        {side !== null && choice !== null ? (
          side === choice ? (
            <span>you won</span>
          ) : (
            <span>you lose</span>
          )
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default CoinFlipperGame;
