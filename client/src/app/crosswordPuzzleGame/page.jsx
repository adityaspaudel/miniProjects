"use client";

import React, { useRef, useState } from "react";

const CrosswordPuzzleGame = () => {
  const defaultAnswer = [
    ["c", "a", "t", ""],
    ["", "r", "a", "t"],
    ["b", "i", "r", "d"],
    ["f", "o", "x", ""],
  ];

  const inputRef1 = useRef([
    ["", "a", "t", ""],
    ["", "r", "a", ""],
    ["b", "", "", "d"],
    ["", "o", "x", ""],
  ]);

  // dummy state to trigger re-render after updates
  const [tick, setTick] = useState(0);

  const handleChange = (row, col, e) => {
    inputRef1.current[row][col] = e.target.value.toLowerCase();
    setTick((t) => t + 1); // force re-render to update UI
  };

  return (
    <div className="bg-slate-300 text-black p-4">
      <div>Crossword Puzzle Game</div>
      <div>
        {inputRef1.current.map((row, rowIndex) => (
          <div key={rowIndex} className="flex">
            {row.map((cell, colIndex) => (
              <input
                key={colIndex}
                maxlength="1"
                className="w-20 h-20 text-4xl text-center border"
                value={cell}
                onChange={(e) => handleChange(rowIndex, colIndex, e)}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CrosswordPuzzleGame;
