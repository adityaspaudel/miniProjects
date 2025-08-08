"use client";
import React, { useRef, useState } from "react";

const BmiCalculator = () => {
  const [bmiValue, setBmiValue] = useState(null);
  const [bmiResult, setBmiResult] = useState(null);
  const weightRef = useRef();
  const heightRef = useRef();
  const handleSubmit = () => {
    console.log(weightRef.current.value, " ", heightRef.current.value);

    const bmi =
      (weightRef.current.value * 100 * 100) /
      (heightRef.current.value * heightRef.current.value);
    setBmiValue(bmi);

    if (bmi < 18.5) {
      setBmiResult("Underweight");
    } else if (bmi < 24.9) {
      setBmiResult("Normal weight");
    } else if (bmi < 29.9) {
      setBmiResult("Overweight");
    } else {
      setBmiResult("Obesity");
    }

    console.log(bmi);
  };
  return (
    <div className="flex flex-col items-center justify-center gap-2 border-2 bg-amber-100">
      <div className="flex flex-col items-center justify-center gap-2 p-8 border-2 border-green-400 bg-amber-100 rounded-xl">
        <div className="text-4xl">BMI Calculator</div>
        <hr className="w-64 border-gray-800 border-1" />
        <form
          className="flex flex-col items-start justify-center gap-2 "
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          <div>
            <label htmlFor="weight">weight in kg</label>
            <input
              ref={weightRef}
              type="number"
              className="border-2 rounded-sm "
              min="10"
              max="200"
            />
          </div>
          <div>
            <label htmlFor="height">Height in cm</label>
            <input
              ref={heightRef}
              type="number"
              className="border-2 rounded-sm"
              min="20"
              max="250"
            />
          </div>
          <button
            type="submit "
            className="w-16 p-2 text-sm bg-green-400 rounded-sm hover:bg-green-500"
          >
            submit
          </button>
        </form>
        <div className="flex flex-col items-start justify-start gap-2 text-sm font-bold">
          <div>bmiValue: {bmiValue}</div>
          <div>bmiResult: {bmiResult}</div>
        </div>
      </div>
    </div>
  );
};

export default BmiCalculator;
