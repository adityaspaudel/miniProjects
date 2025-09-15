"use client";

import React, { useState, useEffect, useRef } from "react";

export default function TypingSpeedTest() {
  const [text, setText] = useState(
    "The quick brown fox jumps over the lazy dog"
  );
  const [input, setInput] = useState("");
  const [timeLeft, setTimeLeft] = useState(30); // countdown
  const [started, setStarted] = useState(false);
  const [wpm, setWpm] = useState(0);
  const timerRef = useRef(null);

  // Start the test
  const startTest = () => {
    setStarted(true);
    setInput("");
    setWpm(0);
    setTimeLeft(30);
    if (timerRef.current) clearInterval(timerRef.current);

    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timerRef.current);
          calculateWPM();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  // Stop & calculate
  const calculateWPM = () => {
    const wordsTyped = input.trim().split(/\s+/).length;
    const minutes = (30 - timeLeft) / 60;
    const result = minutes > 0 ? Math.round(wordsTyped / minutes) : 0;
    setWpm(result);
  };

  // Auto calculate when time ends
  useEffect(() => {
    if (timeLeft === 0) {
      calculateWPM();
      setStarted(false);
    }
  }, [timeLeft]);

  return (
    <div style={{ padding: "20px", backGroundColor: "red" }}>
      <h1>Typing Speed Test</h1>
      <p>Type the following text:</p>
      <p style={{ fontWeight: "bold" }}>{text}</p>

      <textarea
        className="bg-white"
        disabled={!started || timeLeft === 0}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Start typing here..."
        style={{ width: "100%", height: "100px" }}
      />

      <div style={{ marginTop: "10px" }}>
        <button onClick={startTest}>Start Test</button>
      </div>

      <p>Time Left: {timeLeft}s</p>
      {wpm > 0 && <p>Your WPM: {wpm}</p>}
    </div>
  );
}
