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
    <div>
      <div>FormValidator</div>
      <form onSubmit={handleSubmit}>
        <label>email</label>
        <input name="email" value={formData.email} onChange={handleChange} />
        <div className="italic text-red-400">{errors.email}</div>
        <label>password</label>
        <input
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        <div className="italic text-red-400">{errors.password}</div>

        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default FormValidator;
