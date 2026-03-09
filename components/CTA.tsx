import Link from "next/link";

export default function CTA() {
  return (
    <section className="py-20 text-center">

      <h2 className="text-3xl font-bold mb-6">
        Ready to Order Your Cake?
      </h2>

      <Link
        href="/shop"
        className="bg-pink-500 text-white px-8 py-3 rounded-lg"
      >
        Browse Our Cakes
      </Link>

    </section>
  );
}