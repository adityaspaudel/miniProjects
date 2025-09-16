"use client";

import Image from "next/image";
import React from "react";

const CardComponent = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-pink-200">
      <div className="w-64 rounded-2xl border border-green-400 bg-yellow-100 hover:bg-yellow-200 p-4 shadow-md">
        {/* Image */}
        <div className="relative w-full h-40 overflow-hidden rounded-xl">
          <Image
            src="/image.png"
            alt="Product Image"
            fill
            className="object-cover"
          />
        </div>

        {/* Content */}
        <div className="mt-3 space-y-2">
          <h1 className="text-lg font-bold text-black">
            Card Title
            <hr className="mt-1 border border-black" />
          </h1>

          <p className="text-sm text-gray-800">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum
            dolor sit amet consectetur adipisicing elit.
          </p>

          {/* Tags */}
          <div className="flex items-center justify-between text-xs font-medium">
            <span className="cursor-pointer rounded-xl bg-green-400 px-2 text-white hover:bg-green-500">
              Chair
            </span>
            <span className="cursor-pointer rounded-xl bg-green-400 px-2 text-white hover:bg-green-500">
              Price: Rs. 50
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
