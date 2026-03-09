"use client";

import Image from "next/image";
import { Trash2 } from "lucide-react";

export default function CartItem() {
  return (
    <div className="flex gap-4">

      <div className="relative w-24 h-24 rounded-lg overflow-hidden">
        <Image
          src="/products/cake1.jpg"
          alt="cake"
          fill
          className="object-cover"
        />
      </div>

      <div className="flex-1">

        <div className="flex justify-between">
          <h3 className="font-medium">Carrot Cake</h3>
          <p className="font-semibold">₦ 80,000</p>
        </div>

        <p className="text-sm text-gray-500">
          Size: 8 inches
        </p>

        <p className="text-sm text-gray-500">
          Layer: 2
        </p>

        {/* Quantity */}
        <div className="flex items-center gap-3 mt-2">

          <button className="border px-3 rounded">
            -
          </button>

          <span className="border px-4 rounded">
            1
          </span>

          <button className="border px-3 rounded">
            +
          </button>

          <button className="ml-auto text-red-500">
            <Trash2 size={18} />
          </button>

        </div>

      </div>
    </div>
  );
}