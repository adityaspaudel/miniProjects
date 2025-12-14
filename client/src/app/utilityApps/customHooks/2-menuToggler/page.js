"use client";
import React from "react";
import { useToggle } from "./useToggle";

export default function App() {
  const { isOpen, toggle } = useToggle();

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      {/* Navbar */}
      <div className="flex items-center justify-between bg-white px-4 py-3 rounded-lg shadow">
        <h1 className="font-semibold text-gray-800">MyApp</h1>

        <button
          onClick={toggle}
          className="px-3 py-2 rounded-md bg-gray-800 text-white text-sm"
        >
          Menu
        </button>
      </div>

      {/* Toggle Menu */}
      {isOpen && (
        <div className="mt-3 bg-white rounded-lg shadow p-4 space-y-2">
          <p className="text-gray-700 cursor-pointer hover:text-black">Home</p>
          <p className="text-gray-700 cursor-pointer hover:text-black">
            Profile
          </p>
          <p className="text-gray-700 cursor-pointer hover:text-black">
            Overview
          </p>{" "}
          <p className="text-gray-700 cursor-pointer hover:text-black">
            Details
          </p>{" "}
          <p className="text-gray-700 cursor-pointer hover:text-black">
            Products
          </p>{" "}
          <p className="text-gray-700 cursor-pointer hover:text-black">
            Settings
          </p>
        </div>
      )}
    </div>
  );
}
