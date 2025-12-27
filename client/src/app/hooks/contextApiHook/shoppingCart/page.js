"use client";

import React from "react";
import { CartProvider } from "./CartContext";
import CartUI from "./CartUI";

const CartApp = () => {
	return (
		<CartProvider>
			<CartUI />
		</CartProvider>
	);
};

export default CartApp;
