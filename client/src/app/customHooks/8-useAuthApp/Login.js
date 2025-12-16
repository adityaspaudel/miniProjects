"use client";

import { useState } from "react";
import useAuth from "./useAuth";

export default function Login() {
  const { login } = useAuth();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (!name || !email) return;

    const userData = {
      name,
      email,
    };

    login(userData);
  };

  return (
    <div className="flex h-full items-center justify-center">
      <div className="w-80 rounded-xl bg-white p-6 shadow">
        <h2 className="mb-4 text-xl font-semibold">Login</h2>

        <form onSubmit={handleLogin} className="space-y-3">
          {/* Name */}
          <input
            type="text"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full rounded border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
          />

          {/* Email */}
          <input
            type="email"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
          />

          <button
            type="submit"
            className="w-full rounded bg-black py-2 text-white hover:bg-gray-800"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
