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
    <div>
      <div>BMI Calculator</div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <label htmlFor="weight">weight in kg</label>
        <input
          ref={weightRef}
          type="number"
          className="border-2"
          min="10"
          max="200"
        />

        <label htmlFor="height">Height in cm</label>
        <input
          ref={heightRef}
          type="number"
          className="border-2"
          min="20"
          max="250"
        />
        <button type="submit">submit</button>
      </form>
      <div className="flex flex-col gap-2">
        <div>bmiValue: {bmiValue}</div> <div>bmiResult: {bmiResult}</div>
      </div>
    </div>
  );
};

export default BmiCalculator;
