import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">

      {/* Text */}
      <div>
        <h1 className="text-5xl font-bold mb-6">
          Freshly Baked <span className="text-pink-500">Cakes</span> for
          Every Occasion
        </h1>

        <p className="text-gray-600 mb-6">
          We create delicious cakes, cupcakes and pastries baked
          with love in every layer.
        </p>

        <Link
          href="/shop"
          className="bg-pink-500 text-white px-6 py-3 rounded-lg"
        >
          Shop Now
        </Link>
      </div>

      {/* Image */}
      <div className="relative w-full h-[400px]">
        <Image
          src="/products/cake1.jpg"
          alt="cake"
          fill
          className="object-cover rounded-xl"
        />
      </div>

    </section>
  );
}