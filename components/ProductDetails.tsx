"use client";

import Image from "next/image";
import { useState } from "react";
import { useCart } from "@/components/CartProvider";

type Product = {
  id: string;
  name: string;
  image: string;
  description: string;
};

export default function ProductDetails({ product }: { product: Product }) {
  const [quantity, setQuantity] = useState(1);
  const { openCart } = useCart();

  const increase = () => setQuantity((q) => q + 1);
  const decrease = () => setQuantity((q) => (q > 1 ? q - 1 : 1));

  return (
    <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-16">

      {/* LEFT IMAGE */}
      <div className="relative w-full h-[500px] rounded-xl overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover"
        />
      </div>

      {/* RIGHT CONTENT */}
      <div>

        <h1 className="text-3xl font-bold text-pink-600 mb-6">
          {product.name.toUpperCase()}
        </h1>

        <h3 className="font-semibold mb-2">Description</h3>

        <p className="text-gray-600 mb-6 leading-relaxed">
          {product.description}
        </p>

        {/* SIZE */}
        <div className="mb-4">
          <label className="block font-medium mb-2">
            Size <span className="text-red-500">*</span>
          </label>

          <select className="w-full border rounded-lg p-3">
            <option>Select</option>
            <option>Small</option>
            <option>Medium</option>
            <option>Large</option>
          </select>
        </div>

        {/* LAYER */}
        <div className="mb-4">
          <label className="block font-medium mb-2">
            Layer <span className="text-red-500">*</span>
          </label>

          <select className="w-full border rounded-lg p-3">
            <option>Select</option>
            <option>1 Layer</option>
            <option>2 Layers</option>
            <option>3 Layers</option>
          </select>
        </div>

        {/* QUANTITY */}
        <div className="mb-6">
          <label className="block font-medium mb-2">
            Quantity <span className="text-red-500">*</span>
          </label>

          <div className="flex items-center gap-3">
            <button
              onClick={decrease}
              className="border px-4 py-1 rounded"
            >
              -
            </button>

            <span className="border px-6 py-1 rounded">
              {quantity}
            </span>

            <button
              onClick={increase}
              className="border px-4 py-1 rounded"
            >
              +
            </button>
          </div>
        </div>

        {/* TEXT ON CAKE */}
        <div className="mb-6">
          <label className="block font-medium mb-2">
            Text to Appear on Cake
          </label>

          <textarea
            rows={4}
            className="w-full border rounded-lg p-3"
          />
        </div>

        {/* BUTTONS */}
        <div className="flex flex-col gap-4">

          <button className="bg-linear-to-r from-pink-500 to-pink-400 text-white py-3 rounded-lg font-medium" onClick={openCart}>
            Check Out
          </button>

          <button className="border py-3 rounded-lg font-medium hover:bg-gray-100">
            Add to Cart
          </button>

        </div>

      </div>
    </div>
  );
}