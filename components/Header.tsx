"use client";

import Link from "next/link";
import { Search, ShoppingCart } from "lucide-react";
import { useCart } from "./CartProvider";

export default function Header() {
    const { openCart } = useCart();
  return (
    <header className="sticky top-0 z-50 bg-[#f4dede]">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-pink-600">
          Vanilla
          <span className="block text-xs text-gray-600">
            A SPICE CO.
          </span>
        </Link>

        {/* Navigation */}
        <nav className="flex gap-8 text-gray-700">
          <Link href="/" className="hover:text-pink-600">
            Home
          </Link>
          <Link href="/shop" className="hover:text-pink-600">
            Shop
          </Link>
        </nav>

        {/* Icons */}
        <div className="flex items-center gap-5 text-gray-700">
          <Search className="w-5 h-5 cursor-pointer" />
          <ShoppingCart className="w-5 h-5 cursor-pointer" onClick={openCart}/>
        </div>

      </div>
    </header>
  );
}