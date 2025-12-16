"use client";

import { useEffect } from "react";
import useAuth from "./useAuth";

export default function Dashboard() {
  const { user, logout, requireAuth } = useAuth();

  useEffect(() => {
    requireAuth();
  }, []);

  if (!user) return null;

  return (
    <div className="rounded-xl bg-white p-6 shadow">
      <h1 className="mb-2 text-2xl font-bold">Welcome {user.name} 👋</h1>
      <p className="mb-4 text-gray-600">{user.email}</p>

      <button
        onClick={logout}
        className="rounded bg-red-500 px-4 py-2 text-white hover:bg-red-600"
      >
        Logout
      </button>
    </div>
  );
}
