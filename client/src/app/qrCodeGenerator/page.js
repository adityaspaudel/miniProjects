"use client";

import React, { useState } from "react";
import { QRCodeCanvas } from "qrcode.react";
export default function QRCodeGenerator() {
  const [text, setText] = useState("");
  return (
    <div>
      {" "}
      <h2>QR Code Generator</h2>{" "}
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter text or URL"
        style={{ padding: "0.5rem", width: "250px" }}
      />{" "}
      {text && <QRCodeCanvas value={text} size={200} />}{" "}
    </div>
  );
}
