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

    let output = "";

    switch (unit) {
      case "meters":
        output = `${value} meters = ${(value * 3.28084).toFixed(2)} feet`;
        break;
      case "feet":
        output = `${value} feet = ${(value / 3.28084).toFixed(2)} meters`;
        break;
      case "kg":
        output = `${value} kg = ${(value * 2.20462).toFixed(2)} pounds`;
        break;
      case "pounds":
        output = `${value} pounds = ${(value / 2.20462).toFixed(2)} kg`;
        break;
      case "celsius":
        output = `${value}°C = ${((value * 9) / 5 + 32).toFixed(2)}°F`;
        break;
      case "fahrenheit":
        output = `${value}°F = ${(((value - 32) * 5) / 9).toFixed(2)}°C`;
        break;
      case "km":
        output = `${value} km = ${(value * 0.621371).toFixed(2)} miles`;
        break;
      case "miles":
        output = `${value} miles = ${(value / 0.621371).toFixed(2)} km`;
        break;
      case "liters":
        output = `${value} liters = ${(value * 0.264172).toFixed(2)} gallons`;
        break;
      case "gallons":
        output = `${value} gallons = ${(value / 0.264172).toFixed(2)} liters`;
        break;
      default:
        output = "⚠ Unsupported unit";
    }

    setResult(output);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800">
      <div className="p-8 border flex flex-col gap-4 content-center items-center rounded  shadow-md min-h-1/2 w-1/2 bg-amber-200">
        <h1 className="text-4xl font-bold mb-3 text-center">
          Unit Converter
          <hr className="border-black" />
        </h1>

        <input
          type="number"
          placeholder="Enter value"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="border p-2 w-full mb-3 rounded bg-white"
        />

        <select
          value={unit}
          onChange={(e) => setUnit(e.target.value)}
          className="border p-2 w-full mb-3 rounded bg-white"
        >
          <optgroup label="Length">
            <option value="meters">Meters → Feet</option>
            <option value="feet">Feet → Meters</option>
            <option value="km">Km → Miles</option>
            <option value="miles">Miles → Km</option>
          </optgroup>

          <optgroup label="Weight">
            <option value="kg">Kg → Pounds</option>
            <option value="pounds">Pounds → Kg</option>
          </optgroup>

          <optgroup label="Temperature">
            <option value="celsius">Celsius → Fahrenheit</option>
            <option value="fahrenheit">Fahrenheit → Celsius</option>
          </optgroup>

          <optgroup label="Volume">
            <option value="liters">Liters → Gallons</option>
            <option value="gallons">Gallons → Liters</option>
          </optgroup>
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
