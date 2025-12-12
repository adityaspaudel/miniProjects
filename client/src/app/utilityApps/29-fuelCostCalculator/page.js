"use client";

import { useState } from "react";

export default function FuelCalculator() {
  const [distance, setDistance] = useState("");
  const [mileage, setMileage] = useState("");
  const [fuelPrice, setFuelPrice] = useState("");
  const [totalCost, setTotalCost] = useState(null);

  const calculateCost = () => {
    if (!distance || !mileage || !fuelPrice) return;
    const liters = distance / mileage;
    setTotalCost((liters * fuelPrice).toFixed(2));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white p-6">
      <div className="w-full max-w-sm">
        <h1 className="text-lg font-semibold mb-5 text-gray-800">
          Fuel Cost Calculator
        </h1>

        {/* Input fields */}
        <div className="space-y-4">
          <input
            type="number"
            placeholder="Distance (KM)"
            value={distance}
            onChange={(e) => setDistance(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-black"
          />

          <input
            type="number"
            placeholder="Mileage (KM/L)"
            value={mileage}
            onChange={(e) => setMileage(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-black"
          />

          <input
            type="number"
            placeholder="Fuel Price (per L)"
            value={fuelPrice}
            onChange={(e) => setFuelPrice(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-black"
          />

          {/* Button */}
          <button
            onClick={calculateCost}
            className="w-full p-2 bg-black text-white rounded hover:bg-neutral-800 transition"
          >
            Calculate
          </button>
        </div>

        {/* Result */}
        {totalCost && (
          <p className="mt-5 text-gray-900 text-center text-lg">
            Cost: <span className="font-semibold">Rs. {totalCost}</span>
          </p>
        )}
      </div>
    </div>
  );
}
