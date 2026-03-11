"use client";

import { X } from "lucide-react";
import CartItem from "./CartItem";

export default function CartDrawer({
  open,
  closeCart,
}: {
  open: boolean;
  closeCart: () => void;
}) {
  return (
    <>
      {/* Overlay */}
      {open && (
        <div
          onClick={closeCart}
          className="fixed inset-0 bg-black/40 z-40"
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-[480px] sm:w-[683px] bg-white z-50 shadow-lg transform transition-transform duration-300
        ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="p-6 h-full flex flex-col">

          {/* Header */}
          <div className="flex justify-between items-center border-b pb-4">
            <h2 className="font-semibold text-lg">
              Your Cart Item (1 item)
            </h2>

            <button onClick={closeCart}>
              <X />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto py-6 space-y-6">
            <CartItem />
            <CartItem />
          </div>

          {/* Buttons */}
          <div className="space-y-4 flex flex-col items-center">

            <button className="w-[437px] mx-auto bg-[#FF80E3] text-black border border-[#FF80E3] py-3 rounded-lg">
              Proceed to check out
            </button>

            <button
              onClick={closeCart}
              className="w-[437px] mx-auto border py-3 rounded-lg"
            >
              Continue Shopping
            </button>

          </div>

        </div>
      </div>
    </>
  );
}