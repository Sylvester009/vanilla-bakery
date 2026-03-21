'use client';

import {useCart} from '@/contexts/CartContext';
import {categoryFilters, Product, products} from '@/data/products';
import Link from 'next/link';
import {useRouter} from 'next/navigation';
import {useState} from 'react';

export default function Shop() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeTypes, setActiveTypes] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

  const [showCategory, setShowCategory] = useState(false);
  const [showType, setShowType] = useState(false);
  const [showCustomModal, setShowCustomModal] = useState(false);

  const isSearching = searchQuery.trim() !== '';
  const isFiltering = activeTypes.length > 0 || activeCategory !== 'all';

  const selectedCategory = categoryFilters.find(c => c.id === activeCategory);
  const types = selectedCategory?.types || [];

  const router = useRouter();

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

  const filteredProducts = products.filter(product => {
    const matchCategory =
      activeCategory === 'all' || product.category === activeCategory;

    const matchTypes =
      activeTypes.length === 0 ||
      activeTypes.every(type => product.type?.includes(type));

    const matchSearch =
      searchQuery.trim() === '' ||
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase());

    return matchCategory && matchTypes && matchSearch;
  });

  const openWhatsApp = () => {
    const phone = '2348126844299';

    const message = `Hi, I’d like to order a custom cake.`;

    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

    window.open(url, '_blank');
  };

  return (
    <div className="bg-[#faf9f9] text-[#1a1c1c] selection:bg-[#ffd9e3] selection:text-[#3e001f]">
      <main className="pt-32 pb-20 px-8 max-w-screen-2xl mx-auto">
        {/* Header Section */}
        <header className="mb-16 ml-auto">
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
            <div className="hidden md:flex flex-wrap gap-3">
              {categoryFilters.map(filter => (
                <button
                  key={filter.id}
                  onClick={() => {
                    setActiveCategory(filter.id);
                    setActiveTypes([]);
                  }}
                  className={`${
                    activeCategory === filter.id
                      ? 'bg-[#b40064] text-white'
                      : 'bg-[#f7dcdf] text-[#735f62] hover:bg-[#e2bdc7]/20'
                  } px-6 py-2 rounded-full text-sm font-label tracking-wide transition-colors`}
                >
                  {filter.label}
                </button>
              ))}
              <div className="hidden lg:flex items-center bg-[#e9e8e8] rounded-full px-4 py-2 w-64 focus-within:bg-[#ffffff] transition-all group mr-auto">
                <span className="material-symbols-outlined text-[#5a3f48] text-sm">
                  search
                </span>
                <input
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  className="bg-transparent border-none outline-none focus:outline-none focus:ring-0 w-full text-[15px] font-body tracking-wide text-[#3e001f] placeholder:text-[#5a3f48]/50"
                  placeholder="Search pastries..."
                  type="text"
                />
              </div>
            </div>
          </div>
        </header>

        {/* Mobile Filters */}
        <div className="lg:hidden mb-6 space-y-4">
          {/* Category + Type Row */}
          <div className="grid grid-cols-2 gap-3">
            {/* Category */}
            <div className="relative">
              <button
                onClick={() => {
                  setShowCategory(prev => !prev);
                  setShowType(false);
                }}
                className="w-full bg-[#f7dcdf] text-[#735f62] px-4 py-3 rounded-full text-sm font-label"
              >
                Category
              </button>

              {showCategory && (
                <div className="absolute z-20 mt-2 w-full bg-white rounded-xl shadow-lg p-3 space-y-2">
                  {categoryFilters.map(filter => (
                    <button
                      key={filter.id}
                      onClick={() => {
                        setActiveCategory(filter.id);
                        setActiveTypes([]);
                        setShowCategory(false);
                      }}
                      className="block w-full text-left px-3 py-2 rounded-lg hover:bg-[#f7dcdf]"
                    >
                      {filter.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Type */}
            <div className="relative">
              <button
                onClick={() => {
                  setShowType(prev => !prev);
                  setShowCategory(false);
                }}
                className="w-full bg-[#f7dcdf] text-[#735f62] px-4 py-3 rounded-full text-sm font-label"
              >
                Type
              </button>

              {showType && (
                <div className="absolute z-20 mt-2 w-full bg-white rounded-xl shadow-lg p-3 space-y-2 max-h-60 overflow-y-auto">
                  {types.map(type => (
                    <label key={type.id} className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={activeTypes.includes(type.id)}
                        onChange={() => {
                          setActiveTypes(prev =>
                            prev.includes(type.id)
                              ? prev.filter(t => t !== type.id)
                              : [...prev, type.id],
                          );
                        }}
                      />
                      {type.label}
                    </label>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Search Full Width */}
          <div className="flex items-center bg-[#e9e8e8] rounded-full px-4 py-3 focus-within:bg-white transition-all">
            <span className="material-symbols-outlined text-[#5a3f48] text-sm">
              search
            </span>
            <input
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder="Search pastries..."
              className="bg-transparent outline-none w-full text-sm ml-2 text-[#3e001f]"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Sidebar Filters */}
          <aside className="lg:col-span-3 space-y-10 hidden lg:block">
            <div>
              {types?.length > 0 && (
                <h3 className="text-[#1a1c1c] font-headline text-xl mb-6">
                  Types
                </h3>
              )}
              <div className="space-y-4">
                {types.map(type => (
                  <label
                    key={type.id}
                    className="flex items-center gap-3 group cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      checked={activeTypes.includes(type.id)}
                      onChange={() => {
                        setActiveTypes(
                          prev =>
                            prev.includes(type.id)
                              ? prev.filter(t => t !== type.id) // remove
                              : [...prev, type.id], // add
                        );
                      }}
                      className="rounded-sm border-[#e2bdc7] text-[#b40064] focus:ring-[#b40064]/20 w-5 h-5"
                    />
                    <span className="text-[#5a3f48] group-hover:text-[#b40064] transition-colors">
                      {type.label}
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
                  <button
                    onClick={() => openWhatsApp()}
                    className="mt-6 border-b-2 border-[#b40064] text-[#b40064] font-bold text-sm tracking-widest hover:pb-1 transition-all"
                  >
                    ENQUIRE NOW
                  </button>
                </div>
              </div>
            </div>
          </aside>

          {/* Product Grid */}
          <div className="lg:col-span-9 flex flex-col min-h-0">
            <div
              className={`grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-16 ${filteredProducts.length > 6 ? 'lg:overflow-y-auto lg:pr-2 lg:max-h-[calc(100vh-12rem)]' : ''}`}
            >
              {filteredProducts.length > 0 ? (
                filteredProducts.map(product => (
                  <div
                    key={product.id}
                    className="group cursor-pointer lg:cursor-pointer"
                    onClick={() => {
                      if (window.innerWidth < 1024) {
                        router.push(`/shop/${product.slug}`);
                      }
                    }}
                  >
                    <div className="relative overflow-hidden rounded-lg bg-[#f4f3f3] mb-6 aspect-4/5 flex items-center justify-center transition-all duration-500 group-hover:shadow-[0_12px_32px_rgba(90,63,72,0.06)] group-hover:-translate-y-2">
                      <img
                        alt={product.alt}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        src={product.image}
                      />
                      <button
                        className="hidden lg:block absolute bottom-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-white/90 backdrop-blur-md text-[#b40064] px-8 py-3 rounded-full font-label text-sm font-bold shadow-lg transform translate-y-4 group-hover:translate-y-0 active:scale-90"
                        onClick={e => {
                          e.stopPropagation();
                          handleAddToCart(product);
                        }}
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
                ))
              ) : (
                <div className="col-span-full flex flex-col items-center justify-center py-20 text-center">
                  <div className="text-5xl mb-4"></div>

                  <h3 className="text-2xl leading-relaxed font-body text-[#1a1c1c] mb-2">
                    {isSearching
                      ? `No results for "${searchQuery}"`
                      : isFiltering
                        ? 'No products match your filters'
                        : 'No products available'}
                  </h3>

                  <p className="text-[#5a3f48] text-lg leading-relaxed font-body max-w-md">
                    We couldn’t find any items matching your selection. Try
                    adjusting your filters or search.
                  </p>

                  <button
                    onClick={() => {
                      setActiveCategory('all');
                      setActiveTypes([]);
                      setSearchQuery('');
                    }}
                    className="mt-6 px-6 py-2 rounded-full bg-[#b40064] text-white text-sm font-label hover:opacity-90 transition"
                  >
                    Reset Filters
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      {/* Floating Custom Button (Mobile) */}
      <button
        onClick={() => setShowCustomModal(true)}
        className="lg:hidden fixed bottom-6 right-6 bg-[#b40064] text-white p-4 rounded-full shadow-lg active:scale-90 transition"
      >
        <span className="material-symbols-outlined">cake</span>
      </button>
      {showCustomModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 px-6">
          <div className="rounded-2xl p-6 w-full max-w-sm relative">
            {/* Close */}

            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg bg-[#f4f3f3] mb-6 aspect-4/5 flex items-center justify-center transition-all duration-500 group-hover:shadow-[0_12px_32px_rgba(90,63,72,0.06)] group-hover:-translate-y-2">
                <button
                  onClick={() => setShowCustomModal(false)}
                  className="absolute top-4 right-4 text-[#5a3f48] z-60"
                >
                  ✕
                </button>
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
                  <button
                    onClick={() => openWhatsApp()}
                    className="mt-6 border-b-2 border-[#b40064] text-[#b40064] font-bold text-sm tracking-widest hover:pb-1 transition-all"
                  >
                    ENQUIRE NOW
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
