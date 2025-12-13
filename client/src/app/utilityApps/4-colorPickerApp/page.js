"use client";

import React, { useState } from "react";
import { ChromePicker } from "react-color";

export default function ColorPicker() {
  const [color, setColor] = useState("#000000");
  const [savedColors, setSavedColors] = useState([]);

  const handleSaveColor = () => {
    if (!savedColors.includes(color)) {
      setSavedColors([...savedColors, color]);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(color);
    alert(`Copied ${color} to clipboard!`);
  };

  const handleReset = () => {
    setColor("#000000");
    setSavedColors([]);
  };

  return (
    <div className="flex flex-col items-center justify-center gap-6 bg-slate-500 min-h-screen w-screen text-black p-4">
      <div className="flex flex-col gap-4 items-center rounded-2xl min-h-1/2 w-2/3 p-6 bg-yellow-200 shadow-lg">
        <h1 className="text-4xl font-bold text-center">
          Color Picker
          <hr className="border-black mt-2" />
        </h1>

        {/* Color Picker */}
        <ChromePicker
          color={color}
          onChange={(color) => setColor(color.hex)}
          disableAlpha={true}
        />

        {/* Preview + Buttons */}
        <div className="mt-6 text-center flex flex-col items-center gap-3">
          <div
            style={{ backgroundColor: color }}
            className="h-16 w-16 rounded shadow-md border"
          ></div>
          <p className="mt-2 font-mono text-lg">{color}</p>

          <div className="flex gap-3">
            <button
              onClick={handleCopy}
              className="px-4 py-2 rounded-lg bg-blue-500 text-white font-semibold shadow hover:bg-blue-600 transition"
            >
              Copy
            </button>
            <button
              onClick={handleSaveColor}
              className="px-4 py-2 rounded-lg bg-green-500 text-white font-semibold shadow hover:bg-green-600 transition"
            >
              Save
            </button>
            <button
              onClick={handleReset}
              className="px-4 py-2 rounded-lg bg-red-500 text-white font-semibold shadow hover:bg-red-600 transition"
            >
              Reset
            </button>
          </div>
        </div>

        {/* Saved Palette */}
        {savedColors.length > 0 && (
          <div className="mt-6 w-full">
            <h2 className="text-xl font-semibold mb-2">Saved Colors:</h2>
            <div className="flex flex-wrap gap-3">
              {savedColors.map((c, i) => (
                <div
                  key={i}
                  onClick={() => setColor(c)}
                  style={{ backgroundColor: c }}
                  className="h-10 w-10 rounded cursor-pointer shadow border"
                  title={`Click to use ${c}`}
                ></div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
