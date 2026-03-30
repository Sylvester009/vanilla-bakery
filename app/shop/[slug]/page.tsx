import {notFound} from 'next/navigation';
import Link from 'next/link';
import {Product, products} from '@/data/products';
import ProductDetails from '@/components/ProductDetails';

interface ProductPageProps {
  params: Promise<{slug: string}>;
}

// Generate static params for all products (for static site generation)
export async function generateStaticParams() {
  const slugs = products.map(product => ({
    slug: product.slug,
  }));
  return slugs;
}

function getProductBySlug(slug: string): Product | undefined {
  return products.find(product => product.slug === slug);
}

export default async function ProductPage({params}: ProductPageProps) {
  const {slug} = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="bg-[#faf9f9] text-[#1a1c1c]">
      <main className="pt-32 pb-20 px-8 max-w-7xl mx-auto">
        {/* Breadcrumb */}
        <nav className="mb-12 flex items-center gap-2 text-[#5a3f48] text-sm font-medium">
          <Link href="/shop" className="hover:text-[#b40064] transition-colors">
            Shop
          </Link>
          <span className="material-symbols-outlined text-xs">
            chevron_right
          </span>
          <Link
            href={`/shop?category=${product.category}`}
            className="hover:text-[#b40064] transition-colors"
          >
            {product.category === 'macarons'
              ? 'Macarons'
              : product.category === 'tarts'
                ? 'Tarts'
                : product.category === 'cakes'
                  ? 'Cakes'
                  : 'Confections'}
          </Link>
          <span className="material-symbols-outlined text-xs">
            chevron_right
          </span>
          <span className="text-[#b40064]">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Left: Product Image Gallery */}
          <div className="lg:col-span-7 space-y-8">
            <div className="aspect-4/5 rounded-lg overflow-hidden bg-[#f4f3f3]">
              <img
                className="w-full h-full object-cover"
                alt={product.alt}
                src={product.image}
              />
            </div>
          </div>

          {/* Right: Product Details */}
          <div className="lg:col-span-5 flex flex-col">
            
            {/* Interactive Section */}
            <ProductDetails product={product} />

            {/* Product Features Bento */}
            <div className="mt-16 grid grid-cols-2 gap-4">
              <div className="p-6 bg-[#f7dcdf] rounded-lg flex flex-col gap-3">
                <span className="material-symbols-outlined text-[#b40064] text-3xl">
                  eco
                </span>
                <div className="text-sm font-bold text-[#26181a]">
                  Organic Ingredients
                </div>
              </div>
              <div className="p-6 bg-[#f7dcdf] rounded-lg flex flex-col gap-3">
                <span className="material-symbols-outlined text-[#b40064] text-3xl">
                  schedule
                </span>
                <div className="text-sm font-bold text-[#26181a]">
                  Freshly Baked
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
