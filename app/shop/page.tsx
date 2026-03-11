import ProductGrid from "@/components/ProductGrid";
import FilterBar from "@/components/FilterBar";
import { sansita } from "../layout";

export default function ShopPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">

      <h1 className={`text-5xl font-semibold text-center mb-20 text[#000] ${sansita.className}`}>
        All Products
      </h1>

      <FilterBar />

      <ProductGrid />

    </div>
  );
}