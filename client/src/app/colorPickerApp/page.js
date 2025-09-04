"use client";

import React, { useState } from "react";
import { ChromePicker } from "react-color";

export default function ColorPicker() {
  const [color, setColor] = useState("");

  return (
    <div>
      <h1 className="">Minimal Color Picker</h1>
      <ChromePicker
        color={color}
        onChange={(color) => setColor(color.hex)}
        disableAlpha={true}
      />
      <div className="mt-6 text-center">
        <p className="mt-2 font-mono">{color}</p>
      </div>
    </div>
  );
}
