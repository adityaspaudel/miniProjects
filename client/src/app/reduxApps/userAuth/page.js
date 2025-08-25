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
      <div className="flex flex-col gap-2 justify-center items-center bg-yellow-300 min-h-1/2 w-1/2 rounded-md p-4 text-black">
        {isLoggedIn ? (
          <div>
            <h2>Welcome, {user.name}!</h2>
            <button
              onClick={handleLogout}
              className="bg-red-400 hover:bg-red-500"
            >
              Logout
            </button>
          </div>
        ) : (
          <form className="flex flex-col gap-2 ">
            <h1  className="font-bold text-3xl">login form</h1>
            <h2>Please log in</h2>
            <label htmlFor="email">email</label>
            <input name="email" type="email" />
            <label htmlFor="password">password</label>
            <input name="password" />

            <button
              onClick={handleLogin}
              className="bg-green-400 hover:bg-green-500 px-2"
            >
              Login
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
