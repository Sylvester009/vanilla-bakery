import ProductGrid from "@/components/ProductGrid";
import FilterBar from "@/components/FilterBar";

export default function ShopPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">

      <h1 className="text-3xl font-semibold text-center mb-10">
        All Products
      </h1>

      <FilterBar />

      <ProductGrid />

    </div>
  );
}