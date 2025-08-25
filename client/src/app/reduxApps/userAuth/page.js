"use client";

import { login, logout } from "@/lib/redux/slices/authSlice";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";


export default function UserLoginPage() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const dispatch = useDispatch();
  const { isLoggedIn, user } = useSelector((state) => state.auth);


  const handleLogin = (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      alert("Please fill in all fields");
      return;
    }

    // Here you can add real API validation
    dispatch(login({ email: formData.email }));

   
  };

  const handleLogout = () => {
    dispatch(logout());
   
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex flex-col gap-2 justify-center items-center bg-gray-500 h-screen w-screen">
      <div className="flex flex-col gap-2 justify-center items-center bg-yellow-300 min-h-1/2 w-1/2 rounded-md p-4 text-black">
        {isLoggedIn ? (
          <div className="flex flex-col gap-2 justify-center items-center p-4 ">
            <h2 className="font-bold text-5xl">Welcome, {user.email}!</h2>
            <button
              onClick={handleLogout}
              className="bg-red-400 hover:bg-red-500 px-2 rounded-sm"
            >
              Logout
            </button>
          </div>
        ) : (
          <form onSubmit={handleLogin} className="flex flex-col gap-2 ">
            <h1 className="font-bold text-3xl ">Login Form</h1>
            <h2 className="text-sm text-red-500 italic">Please log in</h2>

            <label htmlFor="email">Enter your email:</label>
            <input
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
            />

            <label htmlFor="password">Enter your password:</label>
            <input
              name="password"
              type="password"
              required
              value={formData.password}
              onChange={handleChange}
            />

            <button
              type="submit"
              className="bg-green-400 hover:bg-green-500 px-2 rounded-sm"
            >
              Login
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
