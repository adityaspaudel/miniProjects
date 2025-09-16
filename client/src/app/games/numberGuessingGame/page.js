"use client";
import React from "react";

const NumberGuessingGame = () => {
  const [number, setNumber] = useState("");
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
