'use client';

import {useState} from 'react';
import CheckoutForm from './CheckoutForm';
import {useCart} from '@/contexts/CartContext';

export default function CheckoutPage() {
  const [shippingCost, setShippingCost] = useState(0);

  const {items, getCartTotal} = useCart();

  const subtotal = getCartTotal();
  const total = subtotal + shippingCost;


  return (
    <div className="bg-[#faf9f9] text-[#1a1c1c] selection:bg-[#ffd9e3]">
      <main className="pt-32 pb-20 px-8 max-w-7xl mx-auto">
        {/* Header */}
        <header className="mb-16">
          <h1 className="font-serif text-5xl md:text-6xl text-[#1a1c1c] mb-4 tracking-tight">
            Checkout
          </h1>
          <p className="text-[#5a3f48] font-body">
            Complete your order to bring the patisserie experience home.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Left Column: Form */}
          <div className="lg:col-span-7 space-y-12">
            <CheckoutForm setShippingCost={setShippingCost} />
          </div>

          {/* Right Column: Order Summary */}
          <aside className="lg:col-span-5 sticky top-32">
            <div className="bg-[#ffffff] p-10 rounded-xl shadow-[0_12px_32px_rgba(90,63,72,0.06)]">
              <h3 className="font-serif text-2xl mb-8 text-[#1a1c1c]">
                Order Summary ({items.length})
              </h3>
              <div className="space-y-6 mb-10">
                {items.length === 0 ? (
                  <p className="text-[#5a3f48] text-base text-center">Your cart is empty</p>
                ) : (
                  items.map(item => (
                    <div key={item.id} className="flex gap-4">
                      <div className="w-20 h-20 rounded-lg overflow-hidden shrink-0 bg-[#f7dcdf]">
                        <img
                          alt={item.alt}
                          className="w-full h-full object-cover"
                          src={item.image}
                        />
                      </div>

                      <div className="grow flex flex-col justify-center">
                        <span className="font-medium text-[#1a1c1c]">
                          {item.name}
                        </span>

                        <div className="flex justify-between mt-1">
                          <span className="text-sm text-[#5a3f48]">
                            Qty: {item.quantity}
                          </span>

                          <span className="font-semibold text-[#b40064]">
                            ${(item.price * item.quantity).toFixed(2)}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>

              <div className="space-y-4 pt-8 border-t border-[#e2bdc7]/20">
                <div className="flex justify-between text-[#5a3f48]">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-[#5a3f48]">
                  <span>Shipping</span>
                  <span>
                    {shippingCost === 0 || items.length === 0
                      ? 'Pickup'
                      : `$${shippingCost.toFixed(2)}`}
                  </span>
                </div>
                {/* <div className="flex justify-between text-[#5a3f48]">
                  <span>Estimated Tax</span>
                  <span>$4.42</span>
                </div> */}
                <div className="flex justify-between text-xl font-serif pt-4 border-t border-[#e2bdc7]/10 text-[#1a1c1c]">
                  <span>Total</span>
                  <span className="text-[#b40064] font-bold">
                    ${total.toFixed(2)}
                  </span>
                </div>
              </div>

              <button disabled={items.length === 0} className="w-full mt-10 py-5 rounded-full bg-linear-to-br from-[#b40064] to-[#e1017e] text-[#ffffff] font-bold text-sm tracking-widest uppercase hover:opacity-90 transition-opacity active:scale-95 shadow-lg">
                Place Order
              </button>
              <p className="text-center text-[10px] text-[#5a3f48] mt-6 uppercase tracking-wider opacity-60">
                Secure SSL Encrypted Checkout
              </p>
            </div>

            {/* Trust Badges */}
            <div className="mt-8 grid grid-cols-3 gap-4 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
              <div className="flex flex-col items-center gap-2">
                <span className="material-symbols-outlined text-2xl text-[#5a3f48]">
                  local_shipping
                </span>
                <span className="text-[10px] font-bold uppercase text-center text-[#5a3f48]">
                  Fresh Delivery
                </span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <span className="material-symbols-outlined text-2xl text-[#5a3f48]">
                  verified
                </span>
                <span className="text-[10px] font-bold uppercase text-center text-[#5a3f48]">
                  Quality Gtd
                </span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <span className="material-symbols-outlined text-2xl text-[#5a3f48]">
                  eco
                </span>
                <span className="text-[10px] font-bold uppercase text-center text-[#5a3f48]">
                  Eco Packing
                </span>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}
