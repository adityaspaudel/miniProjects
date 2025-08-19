"use client";

import React from "react";

export default function QuadrantInfographic() {
  const items = [
    { id: "A", color: "from-purple-400 to-purple-600" },
    { id: "B", color: "from-purple-400 to-purple-600" },
    { id: "C", color: "from-purple-400 to-purple-600" },
    { id: "D", color: "from-purple-400 to-purple-600" },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#0f0c24] text-white">
      <div className="grid grid-cols-2 gap-6">
        {items.map((item) => (
          <div
            key={item.id}
            className={`w-12 h-12 flex items-center justify-center font-bold text-2xl 
                        bg-gradient-to-br ${item.color} 
                        transform rotate-45 rounded-lg shadow-lg`}
          >
            <span className="transform -rotate-45">{item.id}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
