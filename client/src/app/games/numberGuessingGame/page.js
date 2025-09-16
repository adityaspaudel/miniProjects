"use client";
import React, { useState } from "react";

const NumberGuessingGame = () => {
  const [number, setNumber] = useState("");
  const handleChange = () => {};
  return (
    <div>
      <div>NumberGuessingGame</div>
      <div>
        <input name="number" value={number} onChange={handleChange} />
      </div>
    </div>
  );
};

export default NumberGuessingGame;
