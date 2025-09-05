"use client";

import React, { useState } from "react";
import { QRCodeCanvas } from "qrcode.react";

export default function QRCodeGenerator() {
  const [text, setText] = useState("");
  return (
    <div className="flex flex-col justify-center items-center h-screen w-screen bg-slate-400 text-black">
      <div className="flex flex-col gap-4 justify-center items-center min-h-1/2 w-1/2 bg-orange-300 p-4  rounded-xl">
        {" "}
        <h2 className="text-4xl font-bold text-black">
          QR Code Generator <hr className="border-black" />
        </h2>
        <input
          className="p-2 text-2xl rounded-lg"
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter text or URL"
        />
        {text && <QRCodeCanvas value={text} size={200} />}
      </div>
    </div>
  );
}
