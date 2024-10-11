"use client";

import React, { useEffect, useState } from "react";

const Calculator = () => {
	const [val, setVal] = useState("");

	const hello = (props) => {
		setVal(val + props);
	};
	const reVal = (props) => {
		setVal(props);
	};

	const equalTo = () => {
		setVal(eval(val));
	};

	return (
		<div className="flex flex-col gap-4 w-[400px] m-auto bg-white-400 text-white rounded-2xl">
			<h1>Simple Calculator</h1>

			<div className="flex gap-4 w-full bg-red-400 flex-wrap text-bold p-8 rounded-2xl">
				<div className="w-full h-[60px] bg-gray-400 p-4 text-right rounded-md text-2xl c1">
					{val}
				</div>
				<div
					className="bg-blue-400 p-4 text-center hover:bg-green-400 w-[155px] rounded-md"
					onClick={() => reVal("0")}>
					C
				</div>
				<div
					className="bg-blue-400 p-4 text-center w-[70px] hover:bg-green-400 rounded-md"
					onClick={() => hello("/")}>
					/
				</div>
				<div
					className="bg-blue-400 p-4 text-center w-[70px] hover:bg-green-400 rounded-md"
					onClick={() => hello("*")}>
					*
				</div>

				<div
					className="bg-blue-400 p-4 text-center w-[70px] h-[50px] hover:bg-green-400 rounded-md"
					onClick={() => hello(7)}>
					{" "}
					7
				</div>
				<div
					className="bg-blue-400 p-4 text-center w-[70px] h-[50px] hover:bg-green-400 rounded-md"
					onClick={() => hello(8)}>
					{" "}
					8
				</div>
				<div
					className="bg-blue-400 p-4 text-center w-[70px] h-[50px] hover:bg-green-400 rounded-md"
					onClick={() => hello(9)}>
					{" "}
					9
				</div>
				<div
					className="bg-blue-400 p-4 text-center w-[70px] h-[50px] hover:bg-green-400 rounded-md"
					onClick={() => hello("-")}>
					{" "}
					-
				</div>
				<div
					className="bg-blue-400 p-4 text-center w-[70px] h-[50px] hover:bg-green-400 rounded-md"
					onClick={() => hello(4)}>
					{" "}
					4
				</div>
				<div
					className="bg-blue-400 p-4 text-center w-[70px] h-[50px] hover:bg-green-400 rounded-md"
					onClick={() => hello(5)}>
					{" "}
					5
				</div>
				<div
					className="bg-blue-400 p-4 text-center w-[70px] h-[50px] hover:bg-green-400 rounded-md"
					onClick={() => hello("6")}>
					{" "}
					6
				</div>
				<div
					className="bg-blue-400 p-4 text-center w-[70px] h-[50px] hover:bg-green-400 rounded-md"
					onClick={() => hello("+")}>
					+
				</div>
				<div className="flex gap-4 w-full bg-red-400 flex-wrap text-bold rounded-2xl">
					<div
						className="bg-blue-400 p-4 text-center w-[70px] h-[50px] hover:bg-green-400 rounded-md"
						onClick={() => hello("1")}>
						1
					</div>
					<div
						className="bg-blue-400 p-4 text-center w-[70px] h-[50px] hover:bg-green-400 rounded-md"
						onClick={() => hello(2)}>
						2
					</div>
					<div
						className="bg-blue-400 p-4 text-center w-[70px] h-[50px] hover:bg-green-400 rounded-md"
						onClick={() => hello(3)}>
						3
					</div>
					{/* here-------------------------------------------- */}
					<div
						className="bg-blue-400 p-4 text-center w-[70px] h-[50px] 2xl:flex-auto hover:bg-green-400 rounded-md"
						onClick={() => equalTo}>
						=
					</div>
					<div
						className="bg-blue-400 p-4 text-center w-[155px] h-[50px]  hover:bg-green-400 rounded-md"
						onClick={() => hello(0)}>
						0
					</div>
					<div
						className="bg-blue-400 mt-0 p-4 text-center w-[70px] h-[50px]  hover:bg-green-400 rounded-md"
						onClick={() => hello(".")}>
						.
					</div>
				</div>
			</div>
		</div>
	);
};

export default Calculator;
