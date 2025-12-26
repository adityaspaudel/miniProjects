"use client";

import { ThemeProvider } from "./ThemeContext";
import ThemeToggle from "./ThemeToggle";

export default function App() {
	return (
		<ThemeProvider>
			<main
				className="
              min-h-screen flex flex-col items-center justify-center
              bg-gray-100 dark:bg-gray-900
              text-gray-900 dark:text-gray-100
              transition-colors duration-300
            "
			>
				<h1 className="text-4xl font-bold mb-4">Context API + Tailwind</h1>
				<p className="mb-8 text-gray-600 dark:text-gray-400">
					Hello Guys Whats up ✨
				</p>
				<ThemeToggle />
			</main>
		</ThemeProvider>
	);
}
