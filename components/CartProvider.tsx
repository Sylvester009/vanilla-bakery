"use client";

import { createContext, useContext, useState } from "react";
import CartDrawer from "./CartDrawer";

type CartContextType = {
  openCart: () => void;
  closeCart: () => void;
};

const CartContext = createContext<CartContextType | null>(null);

export function useCart() {
  return useContext(CartContext)!;
}

export default function CartProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);

  const openCart = () => setOpen(true);
  const closeCart = () => setOpen(false);

  return (
    <CartContext.Provider value={{ openCart, closeCart }}>
      {children}
      <CartDrawer open={open} closeCart={closeCart} />
    </CartContext.Provider>
  );
}