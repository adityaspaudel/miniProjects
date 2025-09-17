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
    <div>
      <h1>Word & Character Counter</h1>

      <textarea
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
  );
}
