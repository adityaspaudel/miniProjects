"use client";

import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
} from "../../../lib/redux/slices/cartSlice";

export default function CartPage() {
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.cart);

  const totalPrice = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="p-6 flex flex-col gap-2 content-center items-center justify-center border-2 bg-sky-200 border-green-400 h-screen w-screen">
      <div className="p-6 flex flex-col gap-2 content-center items-center justify-center border-2 rounded-xl border-green-400 min-h-1/2 w-1/2 bg-indigo-300">
        <h1 className=" font-bold mb-4 text-black text-4xl">
          🛒 Shopping Cart
        </h1>
        <button
          onClick={() =>
            dispatch(addToCart({ id: 1, name: "Laptop", price: 1200 }))
          }
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Add Laptop 💻
        </button>
        <button
          onClick={() =>
            dispatch(addToCart({ id: 2, name: "Phone", price: 800 }))
          }
          className="bg-green-500 text-white px-4 py-2 rounded ml-2"
        >
          Add Phone 📱
        </button>
        <div className="mt-6">
          {items.length === 0 ? (
            <p>Your cart is empty 🛒</p>
          ) : (
            <ul>
              {items.map((item) => (
                <li
                  key={item.id}
                  className="border p-2 flex justify-between mb-2"
                >
                  <span>
                    {item.name} - ${item.price} × {item.quantity}
                  </span>
                  <div>
                    <button
                      onClick={() => dispatch(increaseQuantity(item.id))}
                      className="px-2 bg-gray-300 mx-1"
                    >
                      +
                    </button>
                    <button
                      onClick={() => dispatch(decreaseQuantity(item.id))}
                      className="px-2 bg-gray-300 mx-1"
                    >
                      -
                    </button>
                    <button
                      onClick={() => dispatch(removeFromCart(item.id))}
                      className="px-2 bg-red-500 text-white mx-1"
                    >
                      Remove
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
        <h2 className="text-lg font-semibold mt-4">Total: ${totalPrice}</h2>
        <button
          onClick={() => dispatch(clearCart())}
          className="bg-red-600 text-white px-4 py-2 rounded mt-3"
        >
          Clear Cart
        </button>
      </div>
    </div>
  );
}
