"use client";

import React, { useState } from "react";

export default function SidebarToggle() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex">
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full bg-gray-800 text-white transform ${
          isOpen ? "translate-x-0 w-64" : "-translate-x-full w-0"
        } transition-transform duration-300 overflow-hidden`}
      >
        <div className="p-5">
          <ul className="space-y-4">
            <li className="hover:text-blue-400 cursor-pointer">🏠 Home</li>
            <li className="hover:text-blue-400 cursor-pointer">📄 About</li>
            <li className="hover:text-blue-400 cursor-pointer">📞 Contact</li>
          </ul>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 p-5 ml-0 md:ml-0">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
        >
          {isOpen ? "Close Sidebar" : "Open Sidebar"}
        </button>

        <h1 className="text-2xl font-bold mt-5">Welcome to My Page</h1>
        <p className="mt-2 text-gray-700">
          Click the button to toggle the sidebar.
        </p>
      </div>
    </div>
  );
}
