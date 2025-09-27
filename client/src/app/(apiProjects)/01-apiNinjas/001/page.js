"use client";
import React, { useEffect, useState } from "react";

const RandomQuote = () => {
  const [quote, setQuote] = useState(null);
  const [loading, setLoading] = useState(true);
  // const NEXT_PUBLIC_API_KEY_API_NINJAS = "Jl7V+ywIWuU6dvtIw/vYkQ==s6K18LIceZiQyC2I";
  const apiKey = process.env.NEXT_PUBLIC_API_KEY_API_NINJAS;

  const fetchQuote = async () => {
    setLoading(true);
    // const apiUrl = "https://api.api-ninjas.com/v1/quotes";

    const apiUrl = "https://api.api-ninjas.com/v1/quotes";

    try {
      const response = await fetch(apiUrl, {
        method: "GET",
        headers: {
          "X-Api-Key": apiKey,
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      setQuote(data[0]);
    } catch (error) {
      console.error("Failed to fetch quote:", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div>
      <h2> Random Quote:</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        quote && (
          <div>
            {quote.quote}— {quote.author}
          </div>
        )
      )}
      <button className="" onClick={fetchQuote}>
         Get Another
      </button>
    </div>
  );
};

export default RandomQuote;
