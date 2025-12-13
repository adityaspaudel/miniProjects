"use client";

import React, { useState } from "react";
import validator from "validator";
const FormValidator = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({ email: "", password: "" });
  const handleChange = (e) => {
    e.preventDefault();
    // validator.isEmail("foo@bar.com");
    // validator.isStrongPassword("");
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (e.target.name === "email") {
      setErrors({
        ...errors,
        [e.target.name]: validator.isEmail(e.target.value)
          ? ""
          : "enter a valid email address",
      });
    }

    if (e.target.name === "password") {
      setErrors({
        ...errors,
        [e.target.name]: validator.isStrongPassword(e.target.value)
          ? ""
          : "enter a strong password, password must contain, a capital letter, letters, special letter, and a number",
      });
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("formSubmitted successfully", JSON.stringify(formData));
  };
  return (
    <div className="flex flex-col items-center justify-center gap-2 bg-amber-200 min-h-screen">
      <div className="flex flex-col items-center justify-center w-1/2 gap-4 p-4 bg-gray-300 border-2 rounded-lg h-1/2">
        <h1 className="text-2xl font-bold">Form Validator</h1>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-2">
            <label>Email</label>
            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="bg-white rounded-sm w-96 px-2 py-1"
            />
            <div className="italic text-red-400">{errors.email}</div>
          </div>

          <div className="flex flex-col">
            <label>Password</label>
            <input
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="bg-white rounded-sm w-96 px-2 py-1"
            />
            <div className="italic text-red-400">{errors.password}</div>
          </div>
          <br />
          <div className="flex justify-between items-baseline-last ">
            <button
              type="submit"
              className="px-2 bg-green-500 hover:bg-green-600"
            >
              submit
            </button>
            <button
              className="px-2 bg-gray-500 hover:bg-gray-600"
              onClick={(e) => {
                e.preventDefault();
                setFormData({ email: "", password: "" });
              }}
            >
              {" "}
              reset
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormValidator;
