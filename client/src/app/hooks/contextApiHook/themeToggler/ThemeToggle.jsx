'use client'
import { useTheme } from "./ThemeContext";

export default function ThemeToggle() {
	const { theme, toggleTheme } = useTheme();

	return (
		<button
			onClick={toggleTheme}
			className="
        flex items-center gap-3
        px-6 py-3 rounded-full
        bg-gray-200 dark:bg-gray-800
        text-gray-800 dark:text-gray-200
        shadow-md hover:scale-105
        transition-all duration-300
      "
		>
			<span className="text-xl">{theme === "light" ? "🌞" : "🌙"}</span>
			<span className="font-semibold">
				{theme === "light" ? "Light Mode" : "Dark Mode"}
			</span>
		</button>
	);
}
