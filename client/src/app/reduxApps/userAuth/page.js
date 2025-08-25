"use client";

import { login, logout } from "@/lib/redux/slices/authSlice";
import { useDispatch, useSelector } from "react-redux";

export default function UserLoginPage() {
  const dispatch = useDispatch();
  const { isLoggedIn, user } = useSelector((state) => state.auth);

  const handleLogin = () => {
    // In a real app, you would perform an API call here to authenticate the user
    const userData = { name: "John Doe", email: "john.doe@example.com" };
    dispatch(login(userData));
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className="flex flex-col gap-2 justify-center items-center bg-gray-500 h-screen w-screen">
      <div className="flex flex-col gap-2 justify-center items-center bg-neutral-600 min-h-1/2 w-1/2 rounded-md p-4">
        {isLoggedIn ? (
          <div>
            <h2>Welcome, {user.name}!</h2>
            <button onClick={handleLogout}>Logout</button>
          </div>
        ) : (
          <div>
            <h2>Please log in</h2>
            <button onClick={handleLogin}>Login</button>
          </div>
        )}
      </div>
    </div>
  );
}
