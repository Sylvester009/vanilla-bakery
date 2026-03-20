import Link from 'next/link';

export default function Home() {
  return (
    <div className="bg-[#faf9f9] text-[#1a1c1c] font-body antialiased">
      <main className="pt-24">
        {/* Hero Section */}
        <section className="relative min-h-[870px] flex items-center px-8 md:px-20 overflow-hidden bg-[#f7dcdf]/30">
          <div className="absolute right-0 top-0 w-1/2 h-full hidden lg:block">
            <div className="absolute inset-0 bg-linear-to-l from-transparent to-[#f7dcdf]/30 z-10"></div>
            <img
              className="w-full h-full object-cover"
              alt="A premium multi-layered floral wedding cake"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCpkkWsM3hIfZcptPoVN4oMWXB-xSSjvJeN64g-eXpU-ECcTGzPykEETo1uAVCLgkuvfmbnlsLbNPiA-fUtBF98TvmX-fYshTYCD-1T8MmD3nRUUgzFBDpI_-SRoY6VUUP6lMaIp1gpCfrMfelllDvTbKjELhCdm5HmIYjYki7Cz2ddqXtgQSt4UN9eie_X1U0F86P-pkUH52J1mn_nyM-8MJHrPSl4HQz40Mmui8yrrJd1tr_A421u9Zfra6GTRGKwxf8prnKepAY"
            />
          </div>
          <div className="relative z-20 max-w-2xl">
            <span className="text-[#b40064] font-label font-semibold tracking-widest uppercase mb-4 block">
              Artisanal Patisserie
            </span>
            <h1 className="text-6xl md:text-8xl font-headline font-bold text-[#1a1c1c] leading-[1.1] tracking-tight mb-8">
              Delicious Cakes Made{' '}
              <span className="italic text-[#b40064]">With Love</span>
            </h1>
            <p className="text-xl text-[#5a3f48] mb-10 max-w-lg leading-relaxed">
              Experience the art of fine baking. Handcrafted confections
              delivered from our boutique kitchen to your celebrations.
            </p>
            <div className="flex flex-wrap gap-6">
              <Link href="/shop">
                <button className="bg-linear-to-br from-[#b40064] to-[#e1017e] text-[#ffffff] px-10 py-5 rounded-xl font-label text-sm font-bold tracking-widest uppercase shadow-lg shadow-[#b40064]/20 hover:scale-105 transition-transform">
                  View Menu
                </button>
              </Link>
            </div>
          </div>
        </section>

        {/* Categories: The Bento Grid */}
        <section className="py-24 px-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-6 h-auto md:h-[600px]">
            <div className="md:col-span-2 md:row-span-2 relative group overflow-hidden rounded-lg bg-[#f4f3f3]">
              <img
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                alt="Elegant pink tiered birthday cake"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB-Z0pqE2Ggew1tbImlui0e2kFthov0xbFyU9_LJ-JIltzkXmu6NhdABKuZ1cNeJ88o3WMM5XRyN2vdtJPbDX_K33jZH1-MySGz4sldIFJ5Df164pNPNP8TKjmqDZ0QdN9PZcplHnJz3KaQiZiCk07tvSygxaNZ8Oi-72u2JO0dDvS44vSW07ywb2GXcH6ssipGB0eAiQh2sRW8gBML0A3eKRLJ8BWxRW9BGFaFMZ5MneVD2V9o2lcs6agpMrbAvxFnJfeZm3GkDE4"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
              <div className="absolute bottom-10 left-10 text-white">
                <h3 className="text-3xl font-headline font-bold mb-2">
                  Birthday Cakes
                </h3>
                <p className="font-label opacity-90 uppercase tracking-widest text-sm">
                  Make a wish
                </p>
              </div>
            </div>
            <div className="md:col-span-2 relative group overflow-hidden rounded-lg bg-[#f4f3f3]">
              <img
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                alt="Luxury white wedding cake with flowers"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAwBcFO_VBX-0M-XKcyPvOxTWx4hVldFoHgc8E6lKQqhZpLeGY2IWLBmQ5i_hXX__Pm3G6HNUKdgbpyUwRhad1cu54dscFJ4iECeK4QmT4Giprf-7a-1C_1SZ2Dow4aRXLIJx1jkj9NCkZuFzapZFwWbABzdWEQ1kHquLpUBIn9Q2ZLG0gPJIlIVAnvAfwSreUmePIQjqA_xtTN4Foy0C4vT2x-EKEX2HXV8od7PjbYH10T7QacK9NtP09bchrD7foGPtp5fys_bgQ"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
              <div className="absolute bottom-8 left-8 text-white">
                <h3 className="text-2xl font-headline font-bold mb-1">
                  Wedding Cakes
                </h3>
                <p className="font-label opacity-90 uppercase tracking-widest text-xs">
                  Forever begins here
                </p>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-lg bg-[#f4f3f3]">
              <img
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                alt="Assorted French pastries and macarons"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA9xhD3O5aMpR76aNwPpwl0UPZ64Z_fyc-IQ1Mu4W9MRj-62QwarnYTGdUPILwkreP20fEFWWAJyQnBxiANnZNm6O7w-SNkvFgNTNVM01q83N7UrO1UXW7ayxH7YKS9w8A9JRnRLpKbzwZ-DELVSxG3kRmjW-YwFetu0nf069B4irOgz4D9iWSVX9Ke0GqvtOZUNNr9okKLqYXEJbfp8owu51t-BfxTHPh6tPpaak_HwRTxR_-YarGZYBkGbSaTj402sbZpENtpUKU"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-xl font-headline font-bold mb-1">
                  Pastries
                </h3>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-lg bg-[#f4f3f3]">
              <img
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                alt="Gourmet chocolate gift box"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDEvuYWGLrcm5Qmr7KgG1RZXwUjrhW0AYzB5F24WoPr56IWjqSg6A-BawfQ8D1XqSznrPZiM4D8AQOPYaIY8ha3mfAQNlDDiwyablLOGn_twyD9FExF2Zu9xILQ_ROFWtu0Z9tOq9HqxxVsQ0w_PCxrsPHccE6Kw_MXOCMycjijjZ_n1qQ7iovzbL2LPp97APuPJ9rsCxnys9SRhBHnyDMUlwqq5ieDxkGV1lZFm074ac-1uEuK4_b2uwezYN7FkBjkAw4xEvIo_Uc"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-xl font-headline font-bold mb-1">
                  Gift Sets
                </h3>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="py-24 bg-[#f4f3f3]/50">
          <div className="max-w-7xl mx-auto px-8">
            <div className="flex justify-between items-end mb-16">
              <div>
                <h2 className="text-5xl font-headline font-bold text-[#1a1c1c] mb-4">
                  Our Signature Creations
                </h2>
                <p className="text-[#5a3f48] max-w-md">
                  Our best-selling masterpieces, baked fresh every single
                  morning.
                </p>
              </div>
              <Link href="/shop">
                <button className="hidden md:block text-[#b40064] font-bold font-label uppercase tracking-widest border-b-2 border-[#b40064] pb-1">
                  Shop All Products
                </button>
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {/* Product Card 1 */}
              <div className="group">
                <div className="bg-[#ffffff] rounded-lg overflow-hidden mb-8 aspect-square flex items-center justify-center transition-all group-hover:shadow-2xl group-hover:-translate-y-2">
                  <img
                    className="w-full h-full object-cover"
                    alt="Strawberry glazed cheesecake slice"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuB-0Fr9zXcMkTUlnoPIY2-t4Nye4fv9NfUCkCx0yflkZe6XMwx5AxLWgodnM_jYwhpn2Y5KZBaMWIrvc3iDJqYSohSlWyiwlzMnAdpl3dLbYXp9BcuG2puSr0ox7Ul4S8yFf-efIhRa4ouvPI0F_gGT5n5xe8MF4b9Vhy5PpJkbZJCBLTXCzdBghb5HpSq6RlwKIhJW7bJ9jGVM51GZSUK1xp8u6gtcmx1XVL4R4ZHDn2UFTqp2BuRI5TfmuyTDM7VSlx6-MS7055Q"
                  />
                </div>
                <h4 className="text-2xl font-headline font-bold text-[#1a1c1c] mb-2">
                  Velvet Rose Strawberry
                </h4>
                <p className="text-[#5a3f48] mb-4 font-label text-sm uppercase tracking-wider">
                  Fluffy Sponge • Rosewater • Fresh Berries
                </p>
                <p className="text-[#b40064] font-bold text-xl">$54.00</p>
              </div>

              {/* Product Card 2 */}
              <div className="group">
                <div className="bg-[#ffffff] rounded-lg overflow-hidden mb-8 aspect-square flex items-center justify-center transition-all group-hover:shadow-2xl group-hover:-translate-y-2">
                  <img
                    className="w-full h-full object-cover"
                    alt="Dark chocolate ganache layer cake"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuC1RBTlmNtc74hlpLWwJSlUZRRH9ld6WI_ThMdk3VAHvQwkyHIpghAB3iAWEJ-zev5NQIQQrmeg-arypflXWGfg6x78dHez1Lw3qQu1t6fXmb_OQl3K_1y_VOu8n45O6_TcRSCvoHrtq_qAPErRFKKLQm3PNUnhSGqTE7ogdJGldgRUaeTVzWYvIxcf1_45brigiv3I2xjP6QAVm_efSo8XDAhXenPItpjXpyOaBMlm3aKpn5sZTXK236HXIa4Tr0t0DKcPNyIa6E4"
                  />
                </div>
                <h4 className="text-2xl font-headline font-bold text-[#1a1c1c] mb-2">
                  Midnight Truffle
                </h4>
                <p className="text-[#5a3f48] mb-4 font-label text-sm uppercase tracking-wider">
                  70% Dark Cocoa • Sea Salt • Espresso
                </p>
                <p className="text-[#b40064] font-bold text-xl">$62.00</p>
              </div>

              {/* Product Card 3 */}
              <div className="group">
                <div className="bg-[#ffffff] rounded-lg overflow-hidden mb-8 aspect-square flex items-center justify-center transition-all group-hover:shadow-2xl group-hover:-translate-y-2">
                  <img
                    className="w-full h-full object-cover"
                    alt="Pistachio and cream celebration cake"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDy5jl1B8AGi3VRmRb79zkvWbtNiA-UkJ1uxQvwHYj9820c-5HehctGs8hqXMwageB0x7GNleTKCqkYhup4EP9L0Zf_UI-4FtJaifJP0FvbSIqao77zyAv32ONE7K8bkcUnXD1zY9Ch82pnoRgiVR9j-aPYM-q_3xtSPvbbdD1NDCM4F0h-3vGMBjNiyD19mMtvTgljvrQN5ObmAEQ5zlfI30TeF7eu7746KIaoPifMMDPwgZOcJS1l1J2KWKrhgbPh3dZIEMH3a4o"
                  />
                </div>
                <h4 className="text-2xl font-headline font-bold text-[#1a1c1c] mb-2">
                  Sicilian Pistachio
                </h4>
                <p className="text-[#5a3f48] mb-4 font-label text-sm uppercase tracking-wider">
                  Toasted Nuts • Chantilly Cream • Honey
                </p>
                <p className="text-[#b40064] font-bold text-xl">$58.00</p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-24 px-8 max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-headline font-bold mb-20">
            Why Our Patisserie?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-[#f7dcdf] rounded-full flex items-center justify-center mb-8">
                <span className="material-symbols-outlined text-[#b40064] text-4xl">
                  bakery_dining
                </span>
              </div>
              <h5 className="text-xl font-headline font-bold mb-4">
                Artisanal Craft
              </h5>
              <p className="text-[#5a3f48] leading-relaxed">
                Every cake is a unique masterpiece, sculpted by master
                confectioners with decades of experience.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-[#f7dcdf] rounded-full flex items-center justify-center mb-8">
                <span className="material-symbols-outlined text-[#b40064] text-4xl">
                  eco
                </span>
              </div>
              <h5 className="text-xl font-headline font-bold mb-4">
                Natural Ingredients
              </h5>
              <p className="text-[#5a3f48] leading-relaxed">
                No artificial colors or preservatives. Just pure butter, organic
                flour, and seasonal fruits.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-[#f7dcdf] rounded-full flex items-center justify-center mb-8">
                <span className="material-symbols-outlined text-[#b40064] text-4xl">
                  schedule
                </span>
              </div>
              <h5 className="text-xl font-headline font-bold mb-4">
                Always Fresh
              </h5>
              <p className="text-[#5a3f48] leading-relaxed">
                We bake to order. Your dessert never sits on a shelf; it's
                delivered hours after leaving the oven.
              </p>
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="my-24 mx-8">
          <div className="max-w-7xl mx-auto rounded-xl overflow-hidden relative min-h-[400px] flex items-center justify-center text-center p-12 bg-[#f7dcdf]">
            <div className="absolute inset-0 opacity-10">
              <div className="grid grid-cols-6 h-full w-full">
                <div className="border-r border-b border-[#b40064]/20"></div>
                <div className="border-r border-b border-[#b40064]/20"></div>
                <div className="border-r border-b border-[#b40064]/20"></div>
                <div className="border-r border-b border-[#b40064]/20"></div>
                <div className="border-r border-b border-[#b40064]/20"></div>
                <div className="border-r border-b border-[#b40064]/20"></div>
              </div>
            </div>
            <div className="relative z-10 max-w-xl">
              <h2 className="text-4xl font-headline font-bold text-[#26181a] mb-6">
                Sweeten Your Inbox
              </h2>
              <p className="text-[#544245] mb-10 leading-relaxed">
                Join our mailing list for exclusive seasonal flavors, secret
                recipes, and early access to holiday collections.
              </p>
              <form className="flex flex-col md:flex-row gap-4">
                <input
                  className="grow bg-[#ffffff] border-none rounded-xl px-6 py-4 focus:ring-2 focus:ring-[#b40064]/20 transition-all font-body"
                  placeholder="Your email address"
                  type="email"
                />
                <button
                  className="bg-[#b40064] text-[#ffffff] px-8 py-4 rounded-xl font-label font-bold uppercase tracking-widest shadow-lg shadow-[#b40064]/10 hover:bg-[#3e001f] transition-colors"
                  type="submit"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
