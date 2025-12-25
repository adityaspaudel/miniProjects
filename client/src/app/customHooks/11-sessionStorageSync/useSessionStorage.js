"use client";
import { useState, useEffect } from "react";

export const useSessionStorage = (key, initialValue) => {
	const [value, setValue] = useState(() => {
		if (typeof window === "undefined") return initialValue;

		try {
			const storedValue = sessionStorage.getItem(key);
			return storedValue ? JSON.parse(storedValue) : initialValue;
		} catch (error) {
			console.error("SessionStorage read error:", error);
			return initialValue;
		}
	});

	useEffect(() => {
		try {
			sessionStorage.setItem(key, JSON.stringify(value));
		} catch (error) {
			console.error("SessionStorage write error:", error);
		}
	}, [key, value]);

	return [value, setValue];
};
