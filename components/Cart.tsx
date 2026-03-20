'use client';

import Link from 'next/link';
import {useCart} from '@/contexts/CartContext';

export default function Cart() {
  const {items, isCartOpen, closeCart, updateQuantity, removeFromCart} =
    useCart();

  if (!isCartOpen) return null;

  const subtotal = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  const shipping = subtotal > 0 ? 8.5 : 0;
  const total = subtotal + shipping;

  return (
    <div className="fixed inset-0 z-100 flex justify-end">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-[#1a1c1c]/10 backdrop-blur-sm"
        onClick={closeCart}
      />

      {/* Cart Panel */}
      <aside className="relative w-full max-w-lg glass-panel h-screen shadow-2xl flex flex-col">
        {/* Header */}
        <div className="p-8 flex items-center justify-between border-b border-[#e2bdc7]/20">
          <div>
            <h2 className="text-3xl font-serif text-[#5a3f48]">Your Cart</h2>
            <p className="text-sm text-[#5a3f48]/60 font-body">
              {items.length} {items.length === 1 ? 'Item' : 'Items'} selected
              for indulgence
            </p>
          </div>
          <button
            onClick={closeCart}
            className="w-12 h-12 rounded-full hover:bg-[#f7dcdf]/50 flex items-center justify-center transition-colors"
          >
            <span className="material-symbols-outlined text-[#5a3f48]">
              close
            </span>
          </button>
        </div>

        {/* Product List */}
        <div className="flex-1 overflow-y-auto px-8 py-6 space-y-6">
          {items.length === 0 ? (
            <div className="text-center py-12">
              <span className="material-symbols-outlined text-6xl text-[#5a3f48]/40 mb-4">
                shopping_basket
              </span>
              <p className="text-[#5a3f48] mb-4">Your cart is empty</p>
              <button
                onClick={closeCart}
                className="text-[#b40064] hover:underline font-medium"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            items.map(item => (
              <div key={item.id} className="flex gap-6 group">
                <Link
                  href={`/shop/${item.slug || item.id}`}
                  className="w-24 h-24 rounded-lg overflow-hidden bg-[#e9e8e8] shrink-0"
                >
                  <img
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    alt={item.alt}
                    src={item.image}
                  />
                </Link>
                <div className="flex-1 flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <Link href={`/shop/${item.slug || item.id}`}>
                      <h4 className="font-serif text-lg leading-tight text-[#1a1c1c] hover:text-[#b40064] transition-colors">
                        {item.name}
                      </h4>
                    </Link>
                    <span className="text-[#5a3f48] font-medium">
                      ${(item.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                  <div className="flex items-center justify-between mt-2">
                    <div className="flex items-center bg-[#f7dcdf] rounded-full px-3 py-1">
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity - 1)
                        }
                        className="w-6 h-6 flex items-center justify-center hover:text-[#b40064] transition-colors"
                      >
                        <span className="material-symbols-outlined text-sm">
                          remove
                        </span>
                      </button>
                      <span className="px-4 text-sm font-semibold text-[#1a1c1c]">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                        className="w-6 h-6 flex items-center justify-center hover:text-[#b40064] transition-colors"
                      >
                        <span className="material-symbols-outlined text-sm">
                          add
                        </span>
                      </button>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-[#5a3f48]/40 hover:text-[#ba1a1a] transition-colors"
                    >
                      <span className="material-symbols-outlined text-xl">
                        delete
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer & Summary */}
        {items.length > 0 && (
          <div className="p-8 bg-[#f4f3f3]/50 border-t border-[#e2bdc7]/20 space-y-6">
            <div className="space-y-2">
              <div className="flex justify-between text-sm text-[#5a3f48]/70">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm text-[#5a3f48]/70">
                <span>Estimated Shipping</span>
                <span>${shipping.toFixed(2)}</span>
              </div>
              <div className="pt-4 border-t border-[#e2bdc7]/30 flex justify-between items-end">
                <span className="font-serif text-xl text-[#1a1c1c]">Total</span>
                <span className="font-serif text-2xl text-[#b40064]">
                  ${total.toFixed(2)}
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <Link href="/checkout">
                <button className="w-full py-4 bg-linear-to-br from-[#b40064] to-[#e1017e] text-white rounded-xl font-label text-sm tracking-wider uppercase font-bold shadow-lg hover:opacity-90 transition-all active:scale-[0.98]">
                  Proceed to Checkout
                </button>
              </Link>
              <button
                onClick={closeCart}
                className="w-full py-4 text-[#3e001f] font-label text-sm tracking-wider uppercase font-semibold hover:bg-[#ffd9e3]/30 rounded-xl transition-all"
              >
                Continue Shopping
              </button>
            </div>
          </div>
        )}
      </aside>
    </div>
  );
}
