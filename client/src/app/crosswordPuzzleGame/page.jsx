"use client";

import React, { useState } from "react";

const CrosswordPuzzleGame = () => {
  const [revealedHints, setRevealedHints] = useState([
    ["", "a", "t", ""],
    ["", "r", "a", ""],
    ["b", "", "", "d"],
    ["", "o", "x", ""],
  ]);
  const defaultAnswer = [
    ["c", "a", "t", ""],
    ["", "r", "a", "t"],
    ["b", "i", "r", "d"],
    ["f", "o", "x", ""],
  ];

  return (
    <div>
      <div>
        <div>CrosswordPuzzleGame</div>
        <div>
          {revealedHints.map((val, key) => (
            <div key={key}>
              <div className="flex">
                {val.map((v, k) => (
                  <div key={k}>{v}</div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CrosswordPuzzleGame;
