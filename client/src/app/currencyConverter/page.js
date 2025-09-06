"use client";

import React, { useState, useEffect } from "react";

export default function CurrencyConverter() {
  const [rates, setRates] = useState({});
  const [amount, setAmount] = useState(1);
  const [from, setFrom] = useState("NPR"); // Nepali Rupee default
  const [to, setTo] = useState("USD"); // USD default
  const [result, setResult] = useState(null);

  // Supported currencies (added GBP)
  const supported = [
    "NPR", // Nepali Rupee
    "USD", // US Dollar
    "INR", // Indian Rupee
    "CAD", // Canadian Dollar
    "AUD", // Australian Dollar
    "KWD", // Kuwaiti Dinar
    "AED", // UAE Dirham
    "QAR", // Qatari Riyal
    "NZD", // New Zealand Dollar
    "CNY", // Chinese Yuan
    "JPY", // Japanese Yen
    "KRW", // South Korean Won
    "GBP", // UK Pound Sterling
  ];

  useEffect(() => {
    fetch("https://open.er-api.com/v6/latest/USD")
      .then((res) => res.json())
      .then((data) => setRates(data.rates));
  }, []);

  const convert = () => {
    if (!rates[from] || !rates[to]) return;
    const usdAmount = amount / rates[from]; // Convert 'from' → USD
    setResult((usdAmount * rates[to]).toFixed(2)); // USD → 'to'
  };

  return (
    <div>
      <h2>Currency Converter</h2>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <select value={from} onChange={(e) => setFrom(e.target.value)}>
        {supported.map((code) => (
          <option key={code} value={code}>
            {code}
          </option>
        ))}
      </select>
      <span> to </span>
      <select value={to} onChange={(e) => setTo(e.target.value)}>
        {supported.map((code) => (
          <option key={code} value={code}>
            {code}
          </option>
        ))}
      </select>
      <button onClick={convert}>Convert</button>
      {result && (
        <p>
          {amount} {from} = {result} {to}
        </p>
      )}
    </div>
  );
}
