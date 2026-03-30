'use client';

import {useState} from 'react';
import AddToCartButton from './AddToCartButton';
import Link from 'next/link';
import {Product} from '@/data/products';

export default function ProductDetails({product}: {product: Product}) {
  const [selectedSize, setSelectedSize] = useState(product?.sizes?.[0]);
  const [selectedFlavors, setSelectedFlavors] = useState<string[]>([]);
  const [selectedOptions, setSelectedOptions] = useState<
    Record<string, string>
  >({});

  const basePrice = selectedSize?.price ?? product.basePrice ?? 0;

  const totalPrice =
    basePrice +
    Object.values(selectedOptions).reduce((acc, val) => {
      const opt = product.options?.find(o =>
        o.options.some(op => op.value === val),
      );
      const found = opt?.options.find(o => o.value === val);
      return acc + (found?.price || 0);
    }, 0);

  const maxFlavors = product.type?.includes('premium')
    ? 3
    : product.type?.includes('standard')
      ? 2
      : 1;

  const handleFlavorSelect = (flavor: string) => {
    if (selectedFlavors.includes(flavor)) return;

    if (selectedFlavors.length >= maxFlavors) return;

    setSelectedFlavors([...selectedFlavors, flavor]);
  };

  return (
    <div>
      <div className="mb-2 uppercase tracking-widest text-xs font-bold text-[#b40064]">
        {product.category === 'macarons'
          ? 'Signature Collection'
          : product.category === 'tarts'
            ? 'Artisanal Tarts'
            : 'Premium Selection'}
      </div>
      <h1 className="text-5xl font-headline font-bold text-[#1a1c1c] mb-4 leading-tight">
        {product.name}
      </h1>
      <div className="text-2xl font-body font-medium text-[#5a3f48] mb-8">
        ₦{totalPrice.toLocaleString()}
      </div>
      <div className="space-y-6 mb-12">
        <p className="text-[#5a3f48] leading-relaxed text-lg">
          {product.detailedDescription || product.description}
        </p>
        <div className="flex items-center gap-4 py-4 border-y border-[#e2bdc7]/20">
          <div className="flex items-center gap-1 text-[#b40064]">
            <span
              className="material-symbols-outlined"
              style={{fontVariationSettings: "'FILL' 1"}}
            >
              star
            </span>
            <span
              className="material-symbols-outlined"
              style={{fontVariationSettings: "'FILL' 1"}}
            >
              star
            </span>
            <span
              className="material-symbols-outlined"
              style={{fontVariationSettings: "'FILL' 1"}}
            >
              star
            </span>
            <span
              className="material-symbols-outlined"
              style={{fontVariationSettings: "'FILL' 1"}}
            >
              star
            </span>
            <span
              className="material-symbols-outlined"
              style={{fontVariationSettings: "'FILL' 1"}}
            >
              star_half
            </span>
          </div>
          <span className="text-sm font-medium text-[#6d595c]">
            4.8 (124 reviews)
          </span>
        </div>
      </div>
      {product.sizes && (
        <div>
          <h3 className="font-bold mb-2">Select Size</h3>
          <div className="flex gap-3 flex-wrap">
            {product.sizes.map(size => (
              <button
                key={size.label}
                onClick={() => setSelectedSize(size)}
                className={`px-4 py-2 border rounded ${
                  selectedSize?.label === size.label
                    ? 'bg-[#b40064] text-white'
                    : ''
                }`}
              >
                {size.label} — ₦{size.price.toLocaleString()}
              </button>
            ))}
          </div>
        </div>
      )}

      {product.flavors && (
        <div>
          <h3 className="font-bold mb-2">Select Flavors</h3>
          <select
            onChange={e => handleFlavorSelect(e.target.value)}
            className="border p-2 rounded"
          >
            <option value="">Select flavor</option>
            {product.flavors.map(flavor => (
              <option key={flavor}>{flavor}</option>
            ))}
          </select>

          <div className="flex gap-2 mt-2">
            {selectedFlavors.map((f, i) => (
              <span key={i} className="bg-pink-100 px-2 py-1 rounded">
                {f}
              </span>
            ))}
          </div>
        </div>
      )}

      {product.options?.map(option => (
        <div key={option.name}>
          <h3 className="font-bold mb-2">{option.name}</h3>
          <select
            onChange={e =>
              setSelectedOptions(prev => ({
                ...prev,
                [option.name]: e.target.value,
              }))
            }
            className="border p-2 rounded"
          >
            <option>Select</option>
            {option.options.map(opt => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
                {opt.price ? ` (+₦${opt.price})` : ''}
              </option>
            ))}
          </select>
        </div>
      ))}

      <div className="space-y-8">
        <div className="flex flex-col gap-4">
          <AddToCartButton
            product={product}
            selections={{
              size: selectedSize,
              flavors: selectedFlavors,
              options: selectedOptions,
              price: totalPrice,
            }}
          />{' '}
          <Link href="/checkout">
            <button className="w-full py-5 border-2 border-[#e2bdc7]/30 text-[#1a1c1c] rounded-xl font-label font-bold text-sm tracking-widest uppercase hover:bg-[#f4f3f3] transition-colors">
              Proceed to Checkout
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
