"use client";

import React, { useState } from "react";

export default function SidebarToggle() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div style={{ display: "flex" }}>
      {/* Sidebar */}
      <div
        style={{
          width: isOpen ? "200px" : "0px",

          transition: "0.3s",
          padding: isOpen ? "20px" : "0px",
        }}
      >
        {isOpen && (
          <ul style={{ listStyle: "none", padding: 0 }}>
            <li>🏠 Home</li>
            <li>📄 About</li>
            <li>📞 Contact</li>
          </ul>
        )}
      </div>

      {/* Main content */}
      <div style={{ flex: 1, padding: "20px" }}>
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? "Close Sidebar" : "Open Sidebar"}
        </button>

        <h1>Welcome to My Page</h1>
        <p>Click the button to toggle the sidebar.</p>
      </div>
    </div>
  );
}
