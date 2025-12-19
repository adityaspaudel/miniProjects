"use client";

import { useState } from "react";

const zodiacSigns = [
	"Aries",
	"Taurus",
	"Gemini",
	"Cancer",
	"Leo",
	"Virgo",
	"Libra",
	"Scorpio",
	"Sagittarius",
	"Capricorn",
	"Aquarius",
	"Pisces",
];

const getCompatibility = (sign1, sign2) => {
	if (sign1 === sign2) {
		return { score: 90, message: "Same signs! Strong understanding ❤️" };
	}

	const fire = ["Aries", "Leo", "Sagittarius"];
	const earth = ["Taurus", "Virgo", "Capricorn"];
	const air = ["Gemini", "Libra", "Aquarius"];
	const water = ["Cancer", "Scorpio", "Pisces"];

	const groups = [fire, earth, air, water];

	const sameGroup = groups.some((g) => g.includes(sign1) && g.includes(sign2));

	if (sameGroup) {
		return { score: 75, message: "Good match with natural harmony ✨" };
	}

	return { score: 50, message: "Opposites attract! Needs effort 💫" };
};

export default function HoroscopeCompatibility() {
	const [sign1, setSign1] = useState("");
	const [sign2, setSign2] = useState("");
	const [result, setResult] = useState(null);

	const handleCheck = () => {
		if (!sign1 || !sign2) return;
		setResult(getCompatibility(sign1, sign2));
	};

	return (
		<div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
			<div className="w-full max-w-md rounded-xl bg-white p-6 shadow">
				<h1 className="mb-4 text-center text-2xl font-bold">
					🔮 Horoscope Compatibility
				</h1>

				<div className="space-y-3">
					<select
						value={sign1}
						onChange={(e) => {
							setSign1(e.target.value);
							setResult(null);
						}}
						className="w-full rounded border p-2"
					>
						<option value="">Your Sign</option>
						{zodiacSigns.map((sign) => (
							<option key={sign} value={sign}>
								{sign}
							</option>
						))}
					</select>

					<select
						value={sign2}
						onChange={(e) => {
							setSign2(e.target.value);
							setResult(null);
						}}
						className="w-full rounded border p-2"
					>
						<option value="">Partner's Sign</option>
						{zodiacSigns.map((sign) => (
							<option key={sign} value={sign}>
								{sign}
							</option>
						))}
					</select>
				</div>

				<button
					onClick={handleCheck}
					className="mt-4 w-full rounded-lg bg-purple-600 py-2 font-semibold text-white hover:bg-purple-700"
				>
					Check Compatibility
				</button>

				{result && (
					<div className="mt-5 rounded-lg bg-gray-50 p-4 text-center">
						<p className="text-lg font-semibold">
							Compatibility: {result.score}%
						</p>
						<p className="mt-1 text-gray-600">{result.message}</p>
					</div>
				)}
			</div>
		</div>
	);
}
