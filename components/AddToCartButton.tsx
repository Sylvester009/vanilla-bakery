'use client';

import {useCart} from '@/contexts/CartContext';
import {Product} from '@/data/products';

interface AddToCartButtonProps {
  product: Product;
}

export default function AddToCartButton({product}: AddToCartButtonProps) {
  const {addToCart} = useCart();

  const handleAddToCart = () => {
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
    <button
      onClick={handleAddToCart}
      className="w-full py-5 bg-linear-to-br from-[#b40064] to-[#e1017e] text-[#ffffff] rounded-xl font-label font-bold text-sm tracking-widest uppercase hover:opacity-90 active:scale-[0.98] transition-all shadow-xl shadow-[#b40064]/10"
    >
      Add to Cart
    </button>
  );
}
