/* eslint-disable @next/next/no-html-link-for-pages */
'use client';

import Link from 'next/link';
import {ShoppingBasket, ShoppingCart} from 'lucide-react';
import Image from 'next/image';
import {useCart} from '@/contexts/CartContext';
import {usePathname} from 'next/navigation';

export default function Header() {
  const {openCart, getCartCount} = useCart();
  const pathname = usePathname();

  const activeClass =
    'text-[#b40064] font-semibold border-b-2 border-[#b40064]';
  const inactiveClass = 'text-[#5a3f48] hover:text-[#b40064] transition-colors';

  return (
    <nav className="sticky top-0 w-full z-50 bg-white glass-nav shadow-sm">
      <div className="flex justify-between items-center px-8 py-4 w-full max-w-screen-2xl mx-auto">
        <Link
          href="/"
          className="text-3xl font-headline italic text-[#b40064] tracking-tighter"
        >
          <Image src="/vanilla-logo.png" alt={'logo'} width={165} height={64} />
        </Link>
        <div className="hidden md:flex items-center gap-8">
          <a
            className={`font-label text-lg tracking-tight ${
              pathname === '/' ? activeClass : inactiveClass
            }`}
            href="/"
          >
            Home
          </a>
          <a
            className={`font-label text-lg tracking-tight ${
              pathname === '/shop' ? activeClass : inactiveClass
            }`}
            href="/shop"
          >
            Shop&nbsp;
          </a>
          <a
            className="text-[#5a3f48] hover:text-[#b40064] transition-colors font-label text-lg tracking-tight"
            href="#"
          >
            <br />
          </a>
          <a
            className="text-[#5a3f48] hover:text-[#b40064] transition-colors font-label text-lg tracking-tight"
            href="#"
          >
            <br />
          </a>
        </div>
        <div className="flex items-center gap-4 text-[#b40064]">
          <button className="p-2 hover:bg-pink-50/50 rounded-full transition-all duration-300 active:scale-90 sm:hidden">
            <Link href="/shop">
              <ShoppingBasket className="w-5 h-5 cursor-pointer" />
            </Link>
          </button>

          <button
            onClick={openCart}
            className="p-2 text-[#b40064] hover:bg-pink-50/50 rounded-full transition-all relative"
          >
            <ShoppingCart className="w-5 h-5 cursor-pointer" />

            {getCartCount() > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#b40064] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {getCartCount()}
              </span>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}
