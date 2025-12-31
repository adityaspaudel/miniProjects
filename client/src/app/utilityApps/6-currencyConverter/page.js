"use client";

import { TroubleshootOutlined } from "@mui/icons-material";
import React, { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { Spinner } from "@/components/ui/spinner";
export default function CurrencyConverter() {
	const [rates, setRates] = useState({});
	const [amount, setAmount] = useState(1);
	const [from, setFrom] = useState("NPR"); // Nepali Rupee default
	const [to, setTo] = useState("USD"); // USD default
	const [result, setResult] = useState(null);
	const [loading, setLoading] = useState(null);
	// Currency mapping for tooltips
	const currencyNames = {
		NPR: "Nepalese Rupee",
		USD: "US Dollar",
		INR: "Indian Rupee",
		CAD: "Canadian Dollar",
		AUD: "Australian Dollar",
		KWD: "Kuwaiti Dinar",
		AED: "UAE Dirham",
		QAR: "Qatari Riyal",
		NZD: "New Zealand Dollar",
		CNY: "Chinese Yuan",
		JPY: "Japanese Yen",
		KRW: "South Korean Won",
		GBP: "British Pound Sterling",
		SAR: "Saudi Arabian Riyal",
	};

	const supported = Object.keys(currencyNames);

	useEffect(() => {
		fetch("https://open.er-api.com/v6/latest/USD")
			.then((res) => res.json())
			.then((data) => setRates(data.rates));
	}, []);

	const convert = () => {
		setLoading(true);

		if (!rates[from] || !rates[to]) return;
		const usdAmount = amount / rates[from]; // Convert 'from' → USD

		setTimeout(() => {
			setResult((usdAmount * rates[to]).toFixed(2));
			setLoading(null);
		}, 2000);
	};
	// Swap currencies
	const swapCurrencies = () => {
		setFrom(to);
		setTo(from);
		setResult(null); // clear old result after swap
	};

	return (
		<div className="bg-yellow-300 flex flex-col gap-2 justify-center items-center text-black h-screen w-screen">
			<div className="flex flex-col content-center items-center gap-4 bg-slate-200 min-h-1/2 w-1/2 p-4 rounded-xl">
				<h2 className="text-4xl font-bold">
					Currency Converter
					<hr className="border-black" />
				</h2>

				<input
					className="px-2 py-1 bg-white "
					type="number"
					value={amount}
					onChange={(e) => setAmount(e.target.value)}
				/>

				<div className="flex gap-2 items-center">
					<select
						value={from}
						onChange={(e) => setFrom(e.target.value)}
						className="font-bold"
					>
						{supported.map((code) => (
							<option key={code} value={code} title={currencyNames[code]}>
								{code}
							</option>
						))}
					</select>

					{/* Swap button */}
					<button
						onClick={swapCurrencies}
						className="bg-blue-400 hover:bg-blue-500 text-white px-2 rounded"
					>
						⇄
					</button>

					<select
						value={to}
						onChange={(e) => setTo(e.target.value)}
						className="font-bold"
					>
						{supported.map((code) => (
							<option key={code} value={code} title={currencyNames[code]}>
								{code}
							</option>
						))}
					</select>
				</div>

				<button
					onClick={convert}
					className="bg-green-400 hover:bg-green-500 px-2 rounded-sm text-white cursor-pointer"
				>
					Convert
				</button>

				<div className="font-bold">
					{result ? (
						<p>
							{amount} <span className="font-bold">{from}</span> = {result}{" "}
							<span className="font-bold">{to}</span>
						</p>
					) : (
						<div>
							{loading == true ? (
								<Badge variant="outline">
									<Spinner />
									Calculating...
								</Badge>
							) : (
								""
							)}
						</div>
					)}
				</div>
			</div>
		</div>
	);
}
