"use client";

import { addItem, deleteItem } from "@/lib/redux/slices/inventorySlice";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
// import {
//   addItem,
//   deleteItem,
//   updateItem,
// } from "@/lib/redux/slices/inventorySlice";

export default function Home() {
  const items = useSelector((state) => state.inventory.items);
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [qty, setQty] = useState(0);
  const [price, setPrice] = useState(0);

  const handleAdd = () => {
    if (!name) return;
    dispatch(addItem(name, qty, price));
    setName("");
    setQty(0);
    setPrice(0);
  };

  return (
    <div className="flex items-center justify-center bg-slate-400 h-screen w-screen">
      <div className="p-6 min-h-1/2 w-1/2 bg-red-300 text-black mx-auto rounded-xl">
        <h1 className="text-2xl font-bold mb-4">Inventory Management</h1>
        <div className="flex gap-2 mb-4">
          <input
            className="border p-2 rounded flex-1"
            placeholder="Item name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="number"
            className="border p-2 rounded w-24"
            value={qty}
            placeholder="quantity"
            onChange={(e) => setQty(e.target.value)}
          />
          <input
            type="number"
            className="border p-2 rounded w-28"
            placeholder="total amount"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <button
            onClick={handleAdd}
            className="px-4 py-2 bg-blue-600 text-white rounded"
          >
            Add
          </button>
        </div>
        <ul className="space-y-2">
          {items.map((item) => (
            <li
              key={item.id}
              className="flex justify-between items-center p-2 border rounded"
            >
              <div>
                <div className="font-medium">{item.name}</div>
                <div className="text-sm text-gray-600">
                  Qty: {item.qty} • Rs.{item.price}
                </div>
              </div>
              <button
                onClick={() => dispatch(deleteItem(item.id))}
                className="px-3 py-1 bg-red-500 text-white rounded"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
