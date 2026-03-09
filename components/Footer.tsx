import Link from "next/link";
import { Instagram, Facebook, Twitter, Send } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#f4dede] mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-10">

        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-pink-600">
            Vanilla
          </h2>

          <p className="text-sm mt-3 text-gray-700">
            vanilla.spiceco@gmail.com
          </p>

          <p className="text-sm text-gray-700">
            08000000000
          </p>

          <p className="text-sm text-gray-700">
            No. Jobs Chapel
          </p>

          {/* Social Icons */}
          <div className="flex gap-3 mt-4">
            <Instagram className="w-5 h-5 cursor-pointer" />
            <Facebook className="w-5 h-5 cursor-pointer" />
            <Twitter className="w-5 h-5 cursor-pointer" />
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold mb-4">Quick Links</h3>

          <ul className="space-y-2 text-gray-700">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/shop">Shop</Link>
            </li>
            <li>
              <Link href="/cart">Cart</Link>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="font-semibold mb-4">
            Subscribe to our newsletter
          </h3>

          <p className="text-sm text-gray-700 mb-3">
            To get informed about our latest offers.
          </p>

          <div className="flex items-center bg-white rounded-full overflow-hidden">
            <input
              type="email"
              placeholder="Your email"
              className="flex-1 px-4 py-2 outline-none"
            />

            <button className="bg-pink-500 text-white px-4 py-2">
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="text-center text-xs text-gray-700 pb-6">
        © 2025 Vanilla Bakery — Baked with love in Every Layer 🍰
      </div>
    </footer>
  );
}