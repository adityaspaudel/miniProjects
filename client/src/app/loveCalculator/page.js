"use client";

import React, { useState } from "react";

const Love = () => {
  const [lovePercentage, setLovePercentage] = useState([]);
  const [formData, setFormData] = useState({ yourName: "", partnerName: "" });
  const [val, setVal] = useState("");
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
    e.preventDefault();

    setFormData({ ...formData, [e.target.name]: e.target.value });
    setVal(formData.yourName.concat(formData.partnerName));
  };
  const loveCalculate = () => {
    console.log("formData", formData);
  };
  return (
    <div className="flex flex-col gap-10 justify-center items-center m-auto w-[600px]">
      <h1>Love Calculator</h1>
      <div className="flex gap-4 m-auto w-[400px]">
        <input
          className="love-percentage p-2 text-black rounded-md"
          name="yourName"
          type="text"
          value={formData.yourName}
          placeholder="Your Name"
          onChange={handleChange}
          required
        />
        <span className="text-3xl">❤️</span>
        <input
          className="love-percentage p-2 text-black rounded-md"
          type="text"
          name="partnerName"
          value={formData.partnerName}
          placeholder="Your partner Name"
          onChange={handleChange}
          required
        />
      </div>
      combined value:{val}
      <button onClick={() => loveCalculate()}>Calculate love</button>
      <div className="text-4xl text-red-600">{lovePercentage}</div>
    </div>
  );
};

export default Love;
