"use client";

import React, { useState } from "react";
import { ChromePicker } from "react-color";

export default function ColorPicker() {
  const [color, setColor] = useState("");

  return (
    <div className="flex flex-col items-center justify-center gap-2 bg-slate-500 h-screen w-screen text-black">
      <div className="flex flex-col gap-2 items-center content-center min-h/1/2 w-1/2 bg-yellow-300">
        <h1 className=""> Color Picker</h1>
        <ChromePicker
          color={color}
          onChange={(color) => setColor(color.hex)}
          disableAlpha={true}
        />
        <div className="mt-6 text-center">
          <p className="mt-2 font-mono">{color}</p>
        </div>
      </div>
    </div>
  );
}
