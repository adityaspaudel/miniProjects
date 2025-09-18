"use client";

import React, { useState } from "react";

export default function UnitConverter() {
  const [input, setInput] = useState("");
  const [unit, setUnit] = useState("meters");
  const [result, setResult] = useState(null);

  const convert = () => {
    let value = parseFloat(input);
    if (isNaN(value)) {
      setResult("Please enter a number");
      return;
    }

    if (unit === "meters") {
      setResult(`${value} meters = ${(value * 3.28084).toFixed(2)} feet`);
    } else if (unit === "feet") {
      setResult(`${value} feet = ${(value / 3.28084).toFixed(2)} meters`);
    } else if (unit === "kg") {
      setResult(`${value} kg = ${(value * 2.20462).toFixed(2)} pounds`);
    } else if (unit === "pounds") {
      setResult(`${value} pounds = ${(value / 2.20462).toFixed(2)} kg`);
    }
  };

  return (
    <div>
      <h2>Unit Converter</h2>
      <input
        type="number"
        placeholder="Enter value"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <select value={unit} onChange={(e) => setUnit(e.target.value)}>
        <option value="meters">Meters → Feet</option>
        <option value="feet">Feet → Meters</option>
        <option value="kg">Kg → Pounds</option>
        <option value="pounds">Pounds → Kg</option>
      </select>
      <button onClick={convert}>Convert</button>
      {result && <p>{result}</p>}
    </div>
  );
}
