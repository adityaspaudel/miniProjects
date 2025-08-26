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

  const sampleItem = { id: 1, name: "iPhone 16 Pro" };

  return (
    <div className="bg-slate-400 text-black flex flex-col gap-2 justify-center items-center h-screen w-screen">
      <div className="bg-yellow-200 flex flex-col gap-2 min-h-1/2 w-1/2 content-center items-center">
        <h2 >My Wishlist</h2>
        <button
          onClick={() => dispatch(addToWishlist(sampleItem))}
        
        >
          Add iPhone 16 Pro
        </button>
        <button
          onClick={() => dispatch(clearWishlist())}
        >
          Clear Wishlist
        </button>
        <ul className="mt-4">
          {wishlist.length === 0 ? (
            <p>No items in wishlist</p>
          ) : (
            wishlist.map((item) => (
              <li
                key={item.id}
        
              >
                {item.name}
                <button
                  onClick={() => dispatch(removeFromWishlist(item.id))}
        
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
