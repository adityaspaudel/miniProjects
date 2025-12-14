"use client";
import React from "react";
import { useFormInput } from "./useFormInput";

export default function LoginForm() {
  const email = useFormInput({
    initialValue: "",
    validate: (val) => (!val.includes("@") ? "Invalid email address" : ""),
  });

  const password = useFormInput({
    initialValue: "",
    validate: (val) => (val.length < 6 ? "Minimum 6 characters required" : ""),
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email.isValid || !password.isValid) return;

    alert("Login Successful ✅");
    email.reset();
    password.reset();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-purple-200">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-xl shadow w-80 space-y-4"
      >
        <h1 className="text-lg font-semibold text-center">Login</h1>

        {/* Email */}
        <div>
          <input
            type="email"
            placeholder="Email"
            value={email.value}
            onChange={email.onChange}
            onBlur={email.onBlur}
            className={`w-full px-3 py-2 border rounded-lg focus:outline-none border-gray-400 
              ${
                email.error
                  ? "border-red-500"
                  : "focus:ring-2 focus:ring-gray-800"
              }`}
          />
          {email.error && (
            <p className="text-sm text-red-500 mt-1">{email.error}</p>
          )}
        </div>

        {/* Password */}
        <div>
          <input
            type="password"
            placeholder="Password"
            value={password.value}
            onChange={password.onChange}
            onBlur={password.onBlur}
            className={`w-full px-3 py-2 border border-gray-400 rounded-lg focus:outline-none
              ${
                password.error
                  ? "border-red-500"
                  : "focus:ring-2 focus:ring-gray-800"
              }`}
          />
          {password.error && (
            <p className="text-sm text-red-500 mt-1">{password.error}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={!email.isValid || !password.isValid}
          className="w-full bg-gray-800 text-white py-2 rounded-lg disabled:opacity-50"
        >
          Login
        </button>
      </form>
    </div>
  );
}
