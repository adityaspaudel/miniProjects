"use client";

import { useState, useEffect } from "react";

export default function UrlShortener() {
  const STORAGE_KEY = "shortly_urls";
  const [url, setUrl] = useState("");
  const [items, setItems] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) setItems(JSON.parse(stored));
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items]);

  const generateSlug = () => Math.random().toString(36).substring(2, 8);

  const handleShorten = (e) => {
    e.preventDefault();
    if (!url.trim()) return;

    const slug = generateSlug();
    const newItem = { slug, original: url };
    setItems([newItem, ...items]);
    setUrl("");
  };

  return (
    <div className="flex h-screen w-screen justify-center items-center bg-orange-200 text-black">
      <div className="flex  flex-col justify-center items-center min-h/1/2 w-1/2 bg-slate-200 p-6 rounded-xl">
        <h1 className="text-4xl font-bold mb-4">
          URL Shortener
          <hr className="border-black" />
        </h1>
        <form onSubmit={handleShorten} className="flex gap-2 mb-6">
          <input
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Enter URL"
            className="flex-1 p-2 w-80 border rounded bg-white border-gray-400"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded"
          >
            Shorten
          </button>
        </form>
        <ul className="space-y-2">
          {items.map((it) => (
            <li key={it.slug} className="text-sm">
              <a
                href={`/utilityApps/26-urlShortener/${it.slug}`}
                className="text-blue-600 underline"
              >
                {window.location.origin}/26-urlShortener/{it.slug}
              </a>
              <div className="text-gray-600">→ {it.original}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
