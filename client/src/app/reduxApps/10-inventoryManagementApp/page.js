"use client";

import { addItem, deleteItem } from "@/lib/redux/slices/inventorySlice";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Input } from "@mui/joy";
import Button from "@mui/joy/Button";
import { PieChart } from "@mui/x-charts";

// import { Button } from "@mui/material";

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

  // 🛠️ DATA TRANSFORMATION: Required for PieChart
  const pieChartData = items.map((val, index) => ({
    value: val.price,
    label: val.name,
  }));

  return (
    <div className="flex items-center justify-center bg-slate-400 h-screen w-screen">
      <div className="p-6 min-h-1/2 min-w-1/2 bg-red-300 flex flex-col content-center items-center text-black mx-auto rounded-xl">
        <h1 className="text-4xl font-bold mb-4">
          Inventory Management
          <hr className="border-black" />
        </h1>
        <div className="flex gap-2 mb-4">
          <Input
            // className="border p-2 rounded flex-1"
            placeholder="Item name"
            variant="soft"
            value={name}
            onChange={(e) => setName(e.target.value)}
            title="item name"
          />
          <Input
            type="number"
            // className="border p-2 rounded w-24"
            variant="soft"
            value={qty}
            placeholder="quantity"
            onChange={(e) => setQty(e.target.value)}
            title="quantity"
          />
          <Input
            type="number"
            // className="border p-2 rounded w-28"
            variant="soft"
            placeholder="total amount"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            title="price"
          />
          <Button onClick={handleAdd} color="success" variant="solid">
            Add
          </Button>
        </div>
        <ul className="space-y-2">
          {items.map((item) => (
            <li
              key={item.id}
              className="flex gap-4 justify-between items-center p-2 border-black rounded bg-slate-50"
            >
              <div>
                <div className="font-medium">{item.name}</div>
                <div className="text-sm text-gray-600">
                  Qty: {item.qty} • Rs.{item.price}
                </div>
              </div>
              <Button
                onClick={() => dispatch(deleteItem(item.id))}
                variant="solid"
                color="danger"
              >
                Delete
              </Button>
            </li>
          ))}
        </ul>
      </div>
      <PieChart
        series={[
          {
            data: pieChartData,
            innerRadius: 0,
            outerRadius: 100,
            paddingAngle: 0,
            cornerRadius: 2,
          },
        ]}
        height={200}
        width={200}
        slotProps={{
          legend: {
            direction: "column",
            position: { vertical: "middle", horizontal: "right" },
            padding: 0,
          },
        }}
      />
    </div>
  );
}
