// theme toggler with redux
"use client";

import { toggleTheme } from "@/lib/redux/slices/themeSlice";
import { useDispatch, useSelector } from "react-redux";

export default function ThemeToggle() {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.mode);

  return (
    <div
      className={`h-screen w-screen ${
        theme === "dark" ? "bg-white" : "bg-gray-600"
      }`}
    >
      <button
        onClick={() => dispatch(toggleTheme())}
        className={`px-4 py-2 rounded text-black dark:text-white `}
      >
        Switch to {theme === "light" ? "Dark" : "Light"} Mode
      </button>
    </div>
  );
}
