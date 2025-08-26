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
      <div className="bg-yellow-200 flex flex-col gap-2 min-h-1/2 w-1/2 content-center items-center rounded-xl">
        <div>
          <h2 className="text-4xl font-bold">My Wishlist</h2>
          <hr className="border-black border-1" />
        </div>
        <button
          onClick={() => dispatch(addToWishlist(sampleItem))}
          className="bg-green-400 hover:bg-green-500 px-2 rounded-sm"
        >
          Add iPhone 16 Pro
        </button>
        <button
          onClick={() => dispatch(clearWishlist())}
          className="bg-slate-500 text-red-400 px-2 rounded-sm"
        >
          Clear Wishlist
        </button>
        <ul className="mt-4 flex gap-2">
          {wishlist.length === 0 ? (
            <p>No items in wishlist</p>
          ) : (
            wishlist.map((item) => (
              <div key={item.id}>
                {item && (
                  <div>
                    <div>Wishlist items</div>
                    <li key={item.id} className=" flex gap-2 font-mono">
                      {item.name}
                      <button
                        onClick={() => dispatch(removeFromWishlist(item.id))}
                        className="bg-red-400 hover:bg-red-500 px-2 rounded-sm"
                      >
                        Remove
                      </button>
                    </li>
                  </div>
                )}
              </div>
            ))
          )}
        </ul>
      </div>
    </div>
  );
}
