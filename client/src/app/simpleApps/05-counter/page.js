"use client";

import React, { useState } from "react";
import { IoIosAddCircle } from "react-icons/io";
import { GrSubtractCircle } from "react-icons/gr";
import { BiReset } from "react-icons/bi";

const Counter = () => {
	const [count, setCount] = useState(0);

	const increment = () => {
		setCount(count + 1);
	};

	const decrement = () => {
		setCount(count - 1);
	};
	return (
		<div className="flex flex-col w-[600px] h-[400px] content-center border-2 border-red-800 items-center m-auto bg-pink-400 p-2 text-white rounded-2xl">
			<h2 className="text-blue-900 text-2xl font-bold underline">
				Increment / Decrement Counter
			</h2>
			<br />
			<br />
			<br />
			<button className="h-12 w-96 bg-gray-100 text-black">{count}</button>
			<br />
			<br />
			<br />
			<br />
			<br />
			<div className="flex gap-4 ">
				<button
					onClick={increment}
					className="h-12 flex gap-4 justify-center items-center w-40 bg-green-400 rounded-lg">
					Increment
					<IoIosAddCircle />
				</button>
				<button
					onClick={() => setCount(0)}
					className="h-12 flex gap-4  justify-center items-center w-40 bg-gray-400 rounded-lg">
					Reset <BiReset />
				</button>
				<button
					onClick={decrement}
					className="h-12 w-40 flex gap-4 justify-center items-center bg-red-400 text-center rounded-lg">
					Decrement
					<GrSubtractCircle className="text-center" />
				</button>
			</div>
		</div>
	);
};

export default Counter;
