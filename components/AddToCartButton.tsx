'use client';

import {useCart} from '@/contexts/CartContext';
import {Product} from '@/data/products';
import {useState} from 'react';

interface AddToCartButtonProps {
  product: Product;
  selections: {
    size?: { label: string; price: number };
    flavors?: string[];
    options?: Record<string, string>;
    price: number;
  };
}

export default function AddToCartButton({
  product,
  selections,
}: AddToCartButtonProps) {
  const [quantity, setQuantity] = useState(1);

  const increase = () => setQuantity(prev => prev + 1);

  const decrease = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));

  const {addToCart} = useCart();

  const handleAddToCart = () => {
    addToCart(
      {
        id: product.id,
        name: product.name,
        price: selections.price,
        image: product.image,
        alt: product.alt,
        slug: product.slug,
      },
      quantity,
    );
  };

  return (
    <>
      <div>
        <label className="block text-sm font-label font-bold text-[#6d595c] mb-3">
          Quantity
        </label>
        <div className="inline-flex items-center bg-[#e9e8e8] rounded-full p-1">
          <button
            onClick={decrease}
            className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-[#ffffff] transition-colors"
          >
            <span className="material-symbols-outlined text-sm">remove</span>
          </button>
          <span className="w-12 text-center font-bold">{quantity}</span>
          <button
            onClick={increase}
            className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-[#ffffff] transition-colors"
          >
            <span className="material-symbols-outlined text-sm">add</span>
          </button>
        </div>
      </div>
      <button
        onClick={handleAddToCart}
        className="w-full py-5 bg-linear-to-br from-[#b40064] to-[#e1017e] text-[#ffffff] rounded-xl font-label font-bold text-sm tracking-widest uppercase hover:opacity-90 active:scale-[0.98] transition-all shadow-xl shadow-[#b40064]/10"
      >
        Add {quantity} to Cart
      </button>
    </>
  );
}
