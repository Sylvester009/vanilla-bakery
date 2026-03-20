'use client';

import {useCart} from '@/contexts/CartContext';
import {categoryFilters, Product, products, typeFilters} from '@/data/products';
import Link from 'next/link';

export default function Shop() {
  const {addToCart} = useCart();

  const handleAddToCart = (product: Product) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      alt: product.alt,
      slug: product.slug,
    });
  };
  return (
    <div className="bg-[#faf9f9] text-[#1a1c1c] selection:bg-[#ffd9e3] selection:text-[#3e001f]">
      <main className="pt-32 pb-20 px-8 max-w-screen-2xl mx-auto">
        {/* Header Section */}
        <header className="mb-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-2xl">
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-[#1a1c1c] mb-4">
                The Confectionery
              </h1>
              <p className="text-[#5a3f48] text-lg leading-relaxed font-body">
                Artisanal treats baked daily with French butter and seasonal
                fruits. Explore our curated selection of hand-piped delicacies.
              </p>
            </div>
            {/* Filter Chips */}
            <div className="flex flex-wrap gap-3">
              {categoryFilters.map(filter => (
                <button
                  key={filter.id}
                  className={`${
                    filter.category === null
                      ? 'bg-[#b40064] text-[#ffffff]'
                      : 'bg-[#f7dcdf] text-[#735f62] hover:bg-[#e2bdc7]/20'
                  } px-6 py-2 rounded-full text-sm font-label tracking-wide transition-colors`}
                >
                  {filter.label}
                </button>
              ))}
              <div className="hidden lg:flex items-center bg-[#e9e8e8] rounded-full px-4 py-2 w-64 focus-within:bg-[#ffffff] transition-all group">
                <span className="material-symbols-outlined text-[#5a3f48] text-sm">
                  search
                </span>
                <input
                  className="bg-transparent border-none focus:ring-0 text-sm w-full placeholder:text-[#5a3f48]/60"
                  placeholder="Search pastries..."
                  type="text"
                />
              </div>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Sidebar Filters */}
          <aside className="lg:col-span-3 space-y-10 hidden lg:block">
            <div>
              <h3 className="text-[#1a1c1c] font-headline text-xl mb-6">
                Types
              </h3>
              <div className="space-y-4">
                {typeFilters.map(filter => (
                  <label
                    key={filter.id}
                    className="flex items-center gap-3 group cursor-pointer"
                  >
                    <input
                      className="rounded-sm border-[#e2bdc7] text-[#b40064] focus:ring-[#b40064]/20 w-5 h-5 transition-colors"
                      type="checkbox"
                    />
                    <span className="text-[#5a3f48] group-hover:text-[#b40064] transition-colors">
                      {filter.label}
                    </span>
                  </label>
                ))}
              </div>
            </div>
            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg bg-[#f4f3f3] mb-6 aspect-4/5 flex items-center justify-center transition-all duration-500 group-hover:shadow-[0_12px_32px_rgba(90,63,72,0.06)] group-hover:-translate-y-2">
                <div className="absolute inset-0 bg-linear-to-br from-[#b40064]/10 to-[#e1017e]/10 flex flex-col items-center justify-center p-8 text-center">
                  <span className="material-symbols-outlined text-[#b40064] text-5xl mb-4">
                    cake
                  </span>
                  <h4 className="font-headline text-2xl text-[#1a1c1c]">
                    Custom Creation
                  </h4>
                  <p className="text-[#5a3f48] text-sm mt-2">
                    Let us design your dream cake
                  </p>
                  <button className="mt-6 border-b-2 border-[#b40064] text-[#b40064] font-bold text-sm tracking-widest hover:pb-1 transition-all">
                    ENQUIRE NOW
                  </button>
                </div>
              </div>
            </div>
          </aside>

          {/* Product Grid */}
          <div className="lg:col-span-9">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-16">
              {products.map(product => (
                <div key={product.id} className="group cursor-pointer">
                  <div className="relative overflow-hidden rounded-lg bg-[#f4f3f3] mb-6 aspect-4/5 flex items-center justify-center transition-all duration-500 group-hover:shadow-[0_12px_32px_rgba(90,63,72,0.06)] group-hover:-translate-y-2">
                    <img
                      alt={product.alt}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      src={product.image}
                    />
                    <button
                      className="absolute bottom-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-white/90 backdrop-blur-md text-[#b40064] px-8 py-3 rounded-full font-label text-sm font-bold shadow-lg transform translate-y-4 group-hover:translate-y-0 active:scale-90"
                      onClick={() => handleAddToCart(product)}
                    >
                      Add to Cart
                    </button>
                  </div>
                  <div className="px-2">
                    <div className="flex justify-between items-start mb-1">
                      <Link href={`/shop/${product.slug}`}>
                        <h3 className="font-headline text-xl text-[#1a1c1c] hover:text-[#b40064] transition-colors">
                          {product.name}
                        </h3>
                      </Link>
                      <span className="text-[#b40064] font-bold">
                        ${product.price.toFixed(2)}
                      </span>
                    </div>
                    <p className="text-[#5a3f48] text-sm font-body">
                      {product.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
