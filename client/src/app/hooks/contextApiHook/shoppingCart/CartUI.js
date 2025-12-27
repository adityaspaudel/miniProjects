import { useCart } from "./useCart";

export default function CartUI() {
	const { cart, addToCart, removeFromCart, clearCart } = useCart();

	return (
		<div className="p-4">
			<button
				onClick={() => addToCart({ id: Date.now(), name: "iPhone 15" })}
				className="px-3 py-1 bg-blue-500 text-white rounded"
			>
				Add Item
			</button>
			<ul className="mt-4">
				{cart.map((item) => (
					<li key={item.id} className="flex gap-2">
						{item.name}
						<button
							onClick={() => removeFromCart(item.id)}
							className="text-red-500"
						>
							❌
						</button>
					</li>
				))}
			</ul>
			{cart.length > 0 && (
				<button onClick={clearCart} className="mt-3 text-sm text-gray-600">
					Clear Cart
				</button>
			)}
		</div>
	);
}
