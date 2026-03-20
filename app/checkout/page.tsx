import Link from 'next/link';
import CheckoutForm from './CheckoutForm';

export default function CheckoutPage() {
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
            <CheckoutForm />
          </div>

          {/* Right Column: Order Summary */}
          <aside className="lg:col-span-5 sticky top-32">
            <div className="bg-[#ffffff] p-10 rounded-xl shadow-[0_12px_32px_rgba(90,63,72,0.06)]">
              <h3 className="font-serif text-2xl mb-8 text-[#1a1c1c]">
                Order Summary
              </h3>
              <div className="space-y-6 mb-10">
                {/* Item 1 */}
                <div className="flex gap-4">
                  <div className="w-20 h-20 rounded-lg overflow-hidden shrink-0 bg-[#f7dcdf]">
                    <img
                      alt="Assorted Macarons"
                      className="w-full h-full object-cover"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuDf_KKQPcB8s6MNaMo24da0BV6wSVkyKeSJnvaVz-gwJGCp9EX7_gY5uYUzWFl_ngpkXw2gOMRgFK2KAlnZJ-ZNq8I10Mk46vTUs2sIKwQtgOZJVrH2y_gDgaYWD66KqxY-Cmx7X3q23AbFS3-fC3yEG3AOK5-ZYLjUS7cnzS4CZ6eDXYqqlFpTVmlKZE-tSwCZBrGfwA64x4s1tz6Hy3jgp0yvZjLqDWLB6K4NvQv3rcNeSr1xs5jMSkw60IPmZXjaNuzG9QaqATo"
                    />
                  </div>
                  <div className="grow flex flex-col justify-center">
                    <span className="font-medium text-[#1a1c1c]">
                      Parisian Macaron Box (12)
                    </span>
                    <span className="text-sm text-[#5a3f48]">
                      Signature Rose & Pistachio
                    </span>
                    <div className="flex justify-between mt-1">
                      <span className="text-sm text-[#5a3f48]">Qty: 1</span>
                      <span className="font-semibold text-[#b40064]">
                        $34.00
                      </span>
                    </div>
                  </div>
                </div>

                {/* Item 2 */}
                <div className="flex gap-4">
                  <div className="w-20 h-20 rounded-lg overflow-hidden shrink-0 bg-[#f7dcdf]">
                    <img
                      alt="Artisan Cookies"
                      className="w-full h-full object-cover"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuCaY6XDdSMqaZHaGW99y1t7DMdFCEIAs63DERtnEWu_a6ZHSUvDOFe3TUliBTS_7FCli_fVPAjVgeqZMi1IHwwhr5GHpv9M_-flaRbF_NNY21oUfvYCw8IwBeajmiJCyHzAB0u5qF9vPJA0wBmp7QvIK1j2PEFvdjAbCZBLJKaAsiSTrLNnOhud5AYASJ0C1bCDR3jqOpwuX7AKni1L1y6Z6637Tt6BzfFwerKe8lkoaRtJAYKpOw-bd9MLDA9JRHDbHQCfPzfCMyo"
                    />
                  </div>
                  <div className="grow flex flex-col justify-center">
                    <span className="font-medium text-[#1a1c1c]">
                      Vanilla Bean Shortbread
                    </span>
                    <span className="text-sm text-[#5a3f48]">
                      Hand-stamped bundle
                    </span>
                    <div className="flex justify-between mt-1">
                      <span className="text-sm text-[#5a3f48]">Qty: 2</span>
                      <span className="font-semibold text-[#b40064]">
                        $18.00
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4 pt-8 border-t border-[#e2bdc7]/20">
                <div className="flex justify-between text-[#5a3f48]">
                  <span>Subtotal</span>
                  <span>$52.00</span>
                </div>
                <div className="flex justify-between text-[#5a3f48]">
                  <span>Shipping</span>
                  <span className="text-[#006c07]">Free</span>
                </div>
                <div className="flex justify-between text-[#5a3f48]">
                  <span>Estimated Tax</span>
                  <span>$4.42</span>
                </div>
                <div className="flex justify-between text-xl font-serif pt-4 border-t border-[#e2bdc7]/10 text-[#1a1c1c]">
                  <span>Total</span>
                  <span className="text-[#b40064] font-bold">$56.42</span>
                </div>
              </div>

              <button className="w-full mt-10 py-5 rounded-full bg-linear-to-br from-[#b40064] to-[#e1017e] text-[#ffffff] font-bold text-sm tracking-widest uppercase hover:opacity-90 transition-opacity active:scale-95 shadow-lg">
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

      {/* Footer */}
      <footer className="bg-[#faf9f9] w-full rounded-t-[3rem] mt-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 px-12 py-16 w-full max-w-7xl mx-auto">
          <div className="space-y-4">
            <div className="font-serif text-2xl text-[#b40064]">Vanilla</div>
            <p className="text-sm text-[#8e6f78] font-sans tracking-wide leading-relaxed">
              Artisanal flavors delivered with digital precision. Experience the
              sweetness of modern craft.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-[#1a1c1c] mb-6 text-sm uppercase tracking-widest">
              Shop
            </h4>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/shop"
                  className="text-[#8e6f78] hover:text-[#b40064] transition-colors text-sm font-sans"
                >
                  Shop All
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-[#8e6f78] hover:text-[#b40064] transition-colors text-sm font-sans"
                >
                  Our Story
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-[#1a1c1c] mb-6 text-sm uppercase tracking-widest">
              Support
            </h4>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/contact"
                  className="text-[#8e6f78] hover:text-[#b40064] transition-colors text-sm font-sans"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/shipping"
                  className="text-[#8e6f78] hover:text-[#b40064] transition-colors text-sm font-sans"
                >
                  Shipping &amp; Returns
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-[#1a1c1c] mb-6 text-sm uppercase tracking-widest">
              Legal
            </h4>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/privacy"
                  className="text-[#8e6f78] hover:text-[#b40064] transition-colors text-sm font-sans"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-[#e9e8e8]/50 py-8 px-12 text-center text-xs text-[#8e6f78] font-sans tracking-widest uppercase">
          © 2024 Vanilla Digital Patisserie. Handcrafted with love.
        </div>
      </footer>
    </div>
  );
}
