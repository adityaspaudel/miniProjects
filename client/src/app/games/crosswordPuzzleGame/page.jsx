"use client";

import React, { useRef, useState } from "react";

const CrosswordPuzzleGame = () => {
  // ✅ The solution grid
  const defaultAnswer = [
    ["c", "a", "t", ""],
    ["", "r", "a", "t"],
    ["b", "i", "r", "d"],
    ["f", "o", "x", ""],
  ];

  // ✅ Initial state for the puzzle
  const inputRef1 = useRef([
    ["", "a", "t", ""],
    ["", "r", "a", ""],
    ["b", "", "", "d"],
    ["", "o", "x", ""],
  ]);

  const [tick, setTick] = useState(0);
  const [checked, setChecked] = useState(false);

  const handleChange = (row, col, e) => {
    inputRef1.current[row][col] = e.target.value.toLowerCase();
    setTick((t) => t + 1); // re-render
  };

  const handleCheck = () => {
    setChecked(true);
  };

  const handleReset = () => {
    inputRef1.current = [
      ["", "a", "t", ""],
      ["", "r", "a", ""],
      ["b", "", "", "d"],
      ["", "o", "x", ""],
    ];
    setChecked(false);
    setTick((t) => t + 1);
  };

  return (
    <div className="bg-slate-200 text-black min-h-screen flex flex-col items-center justify-center gap-6">
      <div className="flex flex-col justify-center items-center gap-4 rounded-xl p-4 bg-orange-300 min-h-1/2 w-1/2">
        <h1 className="text-4xl font-bold">
          Crossword Puzzle Game
          <hr className="border-black" />
        </h1>
        {/* Puzzle Grid */}
        <div className="flex flex-col gap-1">
          {inputRef1.current.map((row, rowIndex) => (
            <div key={rowIndex} className="flex gap-1">
              {row.map((cell, colIndex) => {
                const userValue = cell;
                const solution = defaultAnswer[rowIndex][colIndex];
                let bgColor = "bg-white";
                if (checked && solution !== "") {
                  if (userValue === solution) {
                    bgColor = "bg-green-300"; // correct
                  } else {
                    bgColor = "bg-red-300"; // wrong
                  }
                }
                if (solution === "") {
                  bgColor = "bg-gray-500"; // blocked cell
                }
                return (
                  <input
                    key={colIndex}
                    className={`w-16 h-16 text-4xl text-center border font-bold ${bgColor} hover:border-gray-500`}
                    maxLength={1}
                    disabled={solution === ""} // disabled blocked cell
                    value={cell}
                    onChange={(e) => handleChange(rowIndex, colIndex, e)}
                  />
                );
              })}
            </div>
          ))}
        </div>
        {/* Buttons */}
        <div className="flex gap-4">
          <button
            onClick={handleCheck}
            className="px-4 py-2 bg-blue-400 hover:bg-blue-500 text-white text-sm rounded-lg"
          >
            Check Answers
          </button>
          <button
            onClick={handleReset}
            className="px-4 py-2 bg-gray-400 hover:bg-gray-500 text-white text-sm rounded-lg"
          >
            Reset
          </button>
        </div>
        <div className="text-sm">
          <h1 className="font-bold text-2xl">
            Hints
            <hr className="border-black" />
          </h1>
          <div>
            <span className="font-bold">Row 1: </span> A popular domestic animal
            known for its purr and nine lives
          </div>
          <div>
            {" "}
            <span className="font-bold">Row 2: </span>A flying mammal, often
            associated with caves and echolocation
          </div>
          <div>
            {" "}
            <span className="font-bold">Row 3: </span>
            It has feathers and flies
          </div>
          <div>
            {" "}
            <span className="font-bold">Row 4: </span>A smart, wild animal with
            a bushy tail
          </div>
        </div>
      </div>
    </div>
  );
};

export default CrosswordPuzzleGame;
