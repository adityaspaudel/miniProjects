"use client";

import React, { useState } from "react";

export default function UnitConverter() {
  const [input, setInput] = useState("");
  const [unit, setUnit] = useState("meters");
  const [result, setResult] = useState(null);

  const convert = () => {
    let value = parseFloat(input);
    if (isNaN(value)) {
      setResult("⚠ Please enter a number");
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
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800">
      <div className="p-4 border rounded bg-white shadow-md w-80">
        <h2 className="text-lg font-bold mb-3 text-center">Unit Converter</h2>

        <input
          type="number"
          placeholder="Enter value"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="border p-2 w-full mb-3 rounded"
        />

        <select
          value={unit}
          onChange={(e) => setUnit(e.target.value)}
          className="border p-2 w-full mb-3 rounded"
        >
          <option value="meters">Meters → Feet</option>
          <option value="feet">Feet → Meters</option>
          <option value="kg">Kg → Pounds</option>
          <option value="pounds">Pounds → Kg</option>
        </select>

        <button
          onClick={convert}
          className="bg-blue-500 text-white px-4 py-2 rounded w-full hover:bg-blue-600"
        >
          Convert
        </button>

        {result && <p className="mt-3 text-center font-medium">{result}</p>}
      </div>
    </div>
  );
}
