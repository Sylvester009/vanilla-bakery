import ProductDetails from "@/components/ProductDetails";
import { products } from "@/data/products";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {

  const { id } = await params;

  console.log("id:", id);

  const product = products.find((p) => p.id === id);

  if (!product) {
    return <div className="p-10 text-center">Product not found</div>;
  }

  return <ProductDetails product={product} />;
}