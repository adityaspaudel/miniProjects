"use client";

import React, { useState } from "react";

const CoinFlipperGame = () => {
  const [side, setSide] = useState(null);
  const handleChange = () => {
    const randomNum = Math.random();
    if (randomNum < 0.5) {
      setSide("tail");
    } else {
      setSide("head");
    }
  };
  return (
    <div>
      <div>CoinFlipperGame</div>

      <button
        className="rounder-lg bg-amber-200 hover:bg-amber-400"
        onClick={(e) => {
          e.preventDefault;
          handleChange();
        }}
      >
        flip
      </button>
      <div>{side && <div>its: {side}</div>}</div>
    </div>
  );
};

export default CoinFlipperGame;
