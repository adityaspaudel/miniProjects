"use client";

import React, { useState } from "react";

export default function WordAndCharacterCounter() {
  const [text, setText] = useState("");
  const maxLength = 200; // You can change this limit

  const handleChange = (e) => {
    setText(e.target.value);
  };

  // Word count (ignores extra spaces)
  const wordCount = text.trim() === "" ? 0 : text.trim().split(/\s+/).length;

  return (
    <div className="bg-slate-300 h-screen w-screen flex justify-center items-center">
      <div className="flex flex-col gap-4 content-center items-center bg-emerald-200 min-h-1/2 w-1/2 p-4 rounded-xl">
        <h1 className="text-4xl font-bold">
          Word & Character Counter
          <hr className="border-black" />
        </h1>
        <textarea
          className="bg-white hover:border-black rounded-sm p-2"
          value={text}
          onChange={handleChange}
          maxLength={maxLength}
          placeholder="Type your text here..."
          rows={5}
          cols={40}
        />
        <div>
          Characters: {text.length} / {maxLength}
        </div>
        <div>Words: {wordCount}</div>
      </div>
    </div>
  );
}
