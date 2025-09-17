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
            Wooden Chair
            <hr className="mt-1 border border-black" />
          </h1>

          <p className="text-sm text-gray-800">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum
            dolor sit amet consectetur adipisicing elit.
          </p>

          {/* Tags */}
          <div className="flex flex-col w-full gap-4 items-center space-between text-xs font-medium text-black">
            <div className="flex gap-2">
              <span className="cursor-pointer rounded-sm bg-green-100 px-2  hover:bg-green-200">
                Chair
              </span>
              <span className="cursor-pointer rounded-sm bg-green-100 px-2  hover:bg-green-200">
                Price: Rs. 50
              </span>
            </div>
            <div className="bg-green-400 px-2 rounded-sm content-center items-center hover:bg-green-500 w-full">
              <button className=" text-center">add to cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
