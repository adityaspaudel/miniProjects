"use client";

import React, { useState } from "react";

const Love = () => {
  const [formData, setFormData] = useState({ yourName: "", partnerName: "" });
  const [lovePercentage, setLovePercentage] = useState(null);

  const obj = {
    A: 1,
    B: 2,
    C: 3,
    D: 4,
    E: 5,
    F: 6,
    G: 7,
    H: 8,
    I: 9,
    J: 10,
    K: 11,
    L: 12,
    M: 13,
    N: 14,
    O: 15,
    P: 16,
    Q: 17,
    R: 18,
    S: 19,
    T: 20,
    U: 21,
    V: 22,
    W: 23,
    X: 24,
    Y: 25,
    Z: 26,
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const getNameValue = (name) =>
    name
      .toUpperCase()
      .split("")
      .reduce((acc, char) => acc + (obj[char] || 0), 0);

  const loveCalculate = () => {
    if (!formData.yourName || !formData.partnerName) {
      setLovePercentage("Please enter both names!");
      return;
    }

    const totalValue =
      getNameValue(formData.yourName) + getNameValue(formData.partnerName);

    const love = (totalValue * 7) % 101; // keep between 0–100
    setLovePercentage(`${love}% ❤️`);
  };

  return (
    <div className="flex flex-col gap-8 justify-center items-center m-auto w-[600px]">
      <h1 className="text-2xl font-bold">Love Calculator</h1>
      <div className="flex gap-4 w-[400px]">
        <input
          className="p-2 text-black rounded-md"
          name="yourName"
          type="text"
          value={formData.yourName}
          placeholder="Your Name"
          onChange={handleChange}
        />
        <span className="text-3xl">❤️</span>
        <input
          className="p-2 text-black rounded-md"
          name="partnerName"
          type="text"
          value={formData.partnerName}
          placeholder="Partner's Name"
          onChange={handleChange}
        />
      </div>

      <button
        onClick={loveCalculate}
        className="px-4 py-2 bg-pink-600 text-white rounded-lg shadow-md hover:bg-pink-700 transition"
      >
        Calculate Love
      </button>

      {lovePercentage && (
        <div className="text-4xl text-red-600 font-bold">{lovePercentage}</div>
      )}
    </div>
  );
};

export default Love;
