"use client";

import Link from "next/link";
import { Search, ShoppingCart } from "lucide-react";
import { useCart } from "./CartProvider";
import Image from "next/image";

export default function Header() {
    const { openCart } = useCart();
  return (
    <header className="w-full top-0 z-50 bg-[#FFE4E7]/55 max-h-[91px] h-full">
      <div className="max-w-7xl mx-auto py-4 flex items-center justify-start">
        
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold">
         <Image src="/vanilla-logo.png" alt={"logo"} width={165} height={64} />

        </Link>

        {/* Navigation */}
        <nav className="flex gap-8 text-[#000000] sm:ml[40px] md:ml-[100px]">
          <Link href="/" className="hover:text-pink-600 font-medium text-base">
            Home
          </Link>
          <Link href="/shop" className="hover:text-pink-600 font-medium text-base">
            Shop
          </Link>
        </nav>

        {/* Icons */}
        <div className="flex items-center gap-5 text-gray-700 ml-auto">
          <Search className="w-5 h-5 cursor-pointer" />
          <ShoppingCart className="w-5 h-5 cursor-pointer mr-20 sm:mr-auto" onClick={openCart}/>
        </div>

      </div>
    </header>
  );
}