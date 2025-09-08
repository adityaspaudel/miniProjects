"use client";

import React, { useState, useRef } from "react";

export default function PasswordGenerator() {
  const [length, setLength] = useState(16);
  const [includeLower, setIncludeLower] = useState(true);
  const [includeUpper, setIncludeUpper] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);
  const [password, setPassword] = useState("");
  const [copied, setCopied] = useState(false);
  const resultRef = useRef(null);

  const LOWER = "abcdefghijklmnopqrstuvwxyz";
  const UPPER = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const NUMS = "0123456789";
  const SYMS = "!@#$%^&*()_+-=[]{}|;:',.<>/?`~";

  function buildCharset() {
    let set = "";
    if (includeLower) set += LOWER;
    if (includeUpper) set += UPPER;
    if (includeNumbers) set += NUMS;
    if (includeSymbols) set += SYMS;
    return set;
  }

  function generatePassword() {
    const charset = buildCharset();
    if (!charset) {
      setPassword("");
      return;
    }

    try {
      const array = new Uint32Array(length);
      window.crypto.getRandomValues(array);
      let pass = "";
      for (let i = 0; i < length; i++) {
        pass += charset[array[i] % charset.length];
      }
      setPassword(pass);
      setCopied(false);
    } catch (e) {
      let pass = "";
      for (let i = 0; i < length; i++) {
        pass += charset[Math.floor(Math.random() * charset.length)];
      }
      setPassword(pass);
      setCopied(false);
    }
  }

  function copyToClipboard() {
    if (!password) return;
    navigator.clipboard
      .writeText(password)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
      })
      .catch(() => {
        if (resultRef.current) {
          const range = document.createRange();
          range.selectNodeContents(resultRef.current);
          const sel = window.getSelection();
          sel.removeAllRanges();
          sel.addRange(range);
          try {
            document.execCommand("copy");
            setCopied(true);
            setTimeout(() => setCopied(false), 1500);
            sel.removeAllRanges();
          } catch (err) {}
        }
      });
  }

  function passwordStrength() {
    const charset = buildCharset();
    if (!password || !charset) return "N/A";
    const entropyPerChar = Math.log2(charset.length || 1);
    const entropy = entropyPerChar * password.length;
    if (entropy < 28) return "Very weak";
    if (entropy < 36) return "Weak";
    if (entropy < 60) return "Reasonable";
    if (entropy < 128) return "Strong";
    return "Very strong";
  }

  function handleQuick(lengthPreset) {
    setLength(lengthPreset);
    setTimeout(generatePassword, 0);
  }

  return (
    <div className="flex gap-4 justify-center items-center h-screen w-screen bg-slate-500 text-black">
      <main className="flex flex-col gap-4 p-4 items-center justify-center min-h-1/2 min-w-1/2 bg-red-300 rounded-xl">
        <h1 className="text-3xl font-bold">Password Generator <hr className="border-black"/></h1>
        <section>
          <label>
            Length:
            <input
              type="number"
              min={4}
              max={128}
              value={length}
              onChange={(e) => setLength(Number(e.target.value))}
            />
          </label>
          <div>
            <label>
              <input
                type="checkbox"
                checked={includeLower}
                onChange={(e) => setIncludeLower(e.target.checked)}
              />
              include lowercase
            </label>
          </div>
          <div>
            <label>
              <input
                type="checkbox"
                checked={includeUpper}
                onChange={(e) => setIncludeUpper(e.target.checked)}
              />
              include uppercase
            </label>
          </div>
          <div>
            <label>
              <input
                type="checkbox"
                checked={includeNumbers}
                onChange={(e) => setIncludeNumbers(e.target.checked)}
              />
              include numbers
            </label>
          </div>
          <div>
            <label>
              <input
                type="checkbox"
                checked={includeSymbols}
                onChange={(e) => setIncludeSymbols(e.target.checked)}
              />
              include symbols
            </label>
          </div>
          <div>
            <button type="button" onClick={generatePassword}>
              Generate
            </button>
            <button type="button" onClick={() => handleQuick(8)}>
              Quick 8
            </button>
            <button type="button" onClick={() => handleQuick(16)}>
              Quick 16
            </button>
            <button type="button" onClick={() => handleQuick(32)}>
              Quick 32
            </button>
          </div>
        </section>
        <section className="flex flex-col items-center content-center">
          <h2>Result</h2>
          <div ref={resultRef} aria-live="polite">
            {password || "(no password yet)"}
          </div>
          <div>
            <button
              type="button"
              onClick={copyToClipboard}
              disabled={!password}
            >
              {copied ? "Copied!" : "Copy"}
            </button>
            <button
              type="button"
              onClick={() => {
                generatePassword();
              }}
            >
              Regenerate
            </button>
          </div>
          <p>
            Strength: <strong>{passwordStrength()}</strong>
          </p>
          <details>
            <summary>Advanced</summary>
            <p>Charset preview (for debugging):</p>
            <pre>{buildCharset() || "(none selected)"}</pre>
          </details>
        </section>
      </main>
    </div>
  );
}
