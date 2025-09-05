"use client";

import React, { useState } from "react";
import { QRCodeCanvas } from "qrcode.react";

export default function UserDetailsQRCodeGenerator() {
  const [user, setUser] = useState({ name: "", email: "", phone: "" });

  const qrValue = `Name: ${user.name}\nEmail: ${user.email}\nPhone: ${user.phone}`;

  return (
    <div className="flex flex-col justify-center items-center h-screen w-screen bg-slate-400 text-black">
      <div className="flex flex-col gap-4 justify-center items-center min-h-1/2 w-1/2 bg-orange-300 p-4 rounded-xl">
        <h2 className="text-4xl font-bold text-black">
          User Details QR Code <hr className="border-black" />
        </h2>

        <input
          className="p-2 text-xl rounded-lg w-full"
          type="text"
          placeholder="Enter Name"
          value={user.name}
          onChange={(e) => setUser({ ...user, name: e.target.value })}
        />
        <input
          className="p-2 text-xl rounded-lg w-full"
          type="email"
          placeholder="Enter Email"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
        <input
          className="p-2 text-xl rounded-lg w-full"
          type="number"
          placeholder="Enter Phone"
          value={user.phone}
          onChange={(e) => setUser({ ...user, phone: e.target.value })}
        />

        {user.name || user.email || user.phone ? (
          <div className="flex flex-col gap-4 content-center items-center">
            <div className="font-bold">Your QR Code is here: </div>
            <QRCodeCanvas value={qrValue} size={300} />

            <div className="underline font-mono text-center">
              Scan to see user details
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
