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
		<div className="flex flex-col w-[600px] h-[400px] content-center items-center m-auto bg-pink-400 p-2 text-white rounded-2xl">
			<h1>Increament/Decrement Counter</h1>
			<br />
			<br />
			<br />
			<button>{count}</button>
			<br />
			<br />
			<br />
			<br />
			<br />
			<div className="flex gap-4">
				<button
					onClick={increment}
					className="h-12 w-40 bg-green-400">
					Increment
					<IoIosAddCircle />
				</button>
				<button onClick={() => setCount(0)} className="h-12 w-40 bg-gray-400">
					Reset <BiReset />
				</button>
				<button
					onClick={decrement}
					className="h-12 w-40 bg-red-400 text-center">
					Decrement
					<GrSubtractCircle className="text-center" />
				</button>
			</div>
		</div>
	);
};

export default Counter;
