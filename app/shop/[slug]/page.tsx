import {notFound} from 'next/navigation';
import Link from 'next/link';
import {Product, products} from '@/data/products';
import AddToCartButton from '@/components/AddToCartButton';

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
              ${product.price.toFixed(2)}
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

            {/* Interactive Section */}
            <div className="space-y-8">
              <div>
                <label className="block text-sm font-label font-bold text-[#6d595c] mb-3">
                  Quantity
                </label>
                <div className="inline-flex items-center bg-[#e9e8e8] rounded-full p-1">
                  <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-[#ffffff] transition-colors">
                    <span className="material-symbols-outlined text-sm">
                      remove
                    </span>
                  </button>
                  <span className="w-12 text-center font-bold">1</span>
                  <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-[#ffffff] transition-colors">
                    <span className="material-symbols-outlined text-sm">
                      add
                    </span>
                  </button>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <AddToCartButton product={product} />
                <Link href="/checkout">
                  <button className="w-full py-5 border-2 border-[#e2bdc7]/30 text-[#1a1c1c] rounded-xl font-label font-bold text-sm tracking-widest uppercase hover:bg-[#f4f3f3] transition-colors">
                    Proceed to Checkout
                  </button>
                </Link>
              </div>
            </div>

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
