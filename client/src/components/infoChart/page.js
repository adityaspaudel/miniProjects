"use client";

import React from "react";

export default function QuadrantInfographic() {
  const items = [
    [
      { id: "A", color: "from-purple-400 to-purple-600" },
      { id: "B", color: "from-purple-400 to-purple-600" },
      { id: "C", color: "from-purple-400 to-purple-600" },
      { id: "D", color: "from-purple-400 to-purple-600" },
    ],
    [
      { id: "A", color: "from-sky-400 to-sky-600" },
      { id: "B", color: "from-sky-400 to-sky-600" },
      { id: "C", color: "from-sky-400 to-sky-600" },
      { id: "D", color: "from-sky-400 to-sky-600" },
    ],
  ];

  return (
    <div className="flex   bg-[#0f0c24] text-white w-44 flex-wrap">
      <div className="flex gap-6 ">
        {items.map((item) => (
          <div className="w-36 flex gap-6 flex-wrap">
            {item.map((val) => (
              <div
                key={val.id}
                className={`w-12 h-12 flex items-center justify-center font-bold text-2xl
                          bg-gradient-to-br ${val.color}
                          transform rotate-45 rounded-lg shadow-lg`}
              >
                <span className="transform -rotate-45">{val.id}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
