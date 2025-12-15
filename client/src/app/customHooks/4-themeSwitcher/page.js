"use client";
import useLocalStorage from "./useLocalStorage";

export default function ThemeSwitcher() {
  const [theme, setTheme] = useLocalStorage("theme", "light");

  return (
    <div
      className={`p-4 h-screen w-screen ${theme === "light" ? "bg-black" : "bg-gray-200"}`}
    >
      <button
        className={`px-4 py-2 ${theme == "light" ? "bg-gray-600 text-white" : "bg-gray-400  text-black"}  rounded`}
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      >
        Toggle to {theme == "light" ? "light" : "dark"}
      </button>
    </div>
  );
}
