"use client";

import { useRouter } from "next/navigation";
import { useAuthContext } from "./AuthContext";

const useAuth = () => {
  const { user, login, logout, loading } = useAuthContext();
  const router = useRouter();

  const requireAuth = () => {
    if (!loading && !user) {
      router.push("/8-useAuthApp");
    }
  };

  return {
    user,
    login,
    logout,
    loading,
    isAuthenticated: !!user,
    requireAuth,
  };
};

export default useAuth;
