"use client";

import React, { useEffect, useState } from "react";

export default function RedirectPage({ params }) {
  const unwrappedParams = React.use(params);

  const slug = unwrappedParams?.slug; // optional chaining to avoid undefined errors
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    if (!slug) return; // wait for slug to exist

    const stored = JSON.parse(localStorage.getItem("shortly_urls") || "[]");
    const found = stored.find((it) => it.slug === slug);

    if (found) {
      // redirect after a small delay for safety
      setTimeout(() => {
        window.location.replace(found.original);
      }, 100);
    } else {
      setNotFound(true);
    }
  }, [slug]);

  if (notFound) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-2xl font-bold">404</h1>
        <p className="mt-2">Short link not found</p>
      </div>
    );
  }

  return null;
}
