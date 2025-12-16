"use client";

import { AuthProvider } from "./AuthContext";
import useAuth from "./useAuth";
import Login from "./Login";
import Dashboard from "./Dashboard.js";

function AuthContent() {
  const { user, loading } = useAuth();

  if (loading) return <p>Loading...</p>;

  return (
    <div className="flex min-h-screen items-center justify-center bg-orange-100">
      {user ? <Dashboard /> : <Login />}
    </div>
  );
}

export default function Page() {
  return (
    <AuthProvider>
      <AuthContent />
    </AuthProvider>
  );
}
