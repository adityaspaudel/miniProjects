"use client";

import { useDispatch, useSelector } from "react-redux";
import {
  addToWishlist,
  removeFromWishlist,
  clearWishlist,
} from "@/lib/redux/slices/wishlistSlice";

export default function WishlistTest() {
  const dispatch = useDispatch();
  const wishlist = useSelector((state) => state.wishlist.items);

  // ✅ Multiple sample items
  const products = [
    { id: 1, name: "iPhone 16 Pro" },
    { id: 2, name: "MacBook Air M3" },
    { id: 3, name: 'iPad Pro 13"' },
    { id: 4, name: "Apple Watch Ultra 2" },
    { id: 5, name: "AirPods Pro 2" },
  ];

  return (
    <div className="bg-slate-400 text-black flex flex-col gap-2 justify-center items-center h-screen w-screen">
      <div className="bg-yellow-200 flex flex-col  gap-4 min-h-1/2 w-1/2 content-center items-center rounded-xl p-4 shadow shadow-black hover:shadow-md transition 1s">
        <div>
          <h2 className="text-4xl font-bold">My Wishlist</h2>
          <hr className="border-black border" />
        </div>

        {/* Add items buttons */}
        <div className="flex flex-wrap gap-2 justify-center">
          {products.map((product) => (
            <button
              key={product.id}
              onClick={() => dispatch(addToWishlist(product))}
              className="bg-green-400 hover:bg-green-500 px-3 py-1 rounded-sm text-white cursor-pointer"
            >
              Add {product.name}
            </button>
          ))}
        </div>

        <button
          onClick={() => dispatch(clearWishlist())}
          className="bg-slate-500  px-3 py-1 rounded-sm text-white cursor-pointer"
        >
          Clear Wishlist
        </button>

        {/* Wishlist Items */}
        <ul className="mt-4 flex flex-col gap-2 items-center content-between bg-gray-100 px-8 py-4 w-full">
          {wishlist.length === 0 ? (
            <p>No items in wishlist</p>
          ) : (
            wishlist.map((item) => (
              <li
                key={item.id}
                className="flex gap-3 items-center justify-between w-full font-mono border-b pb-1"
              >
                <span className="font-semibold">{item.name}</span>
                <button
                  onClick={() => dispatch(removeFromWishlist(item.id))}
                  className="bg-red-500 hover:bg-red-600 px-2 rounded-sm text-white cursor-pointer"
                >
                  Remove
                </button>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
}
