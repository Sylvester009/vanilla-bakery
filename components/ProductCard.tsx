import Image from "next/image";
import Link from "next/link";

type Props = {
  id: string;
  name: string;
  priceMin: number;
  priceMax: number;
  image: string;
};

export default function ProductCard({
  id,
  name,
  priceMin,
  priceMax,
  image,
}: Props) {
  return (
    <Link href={`/shop/${id}`}>
    <div className="border rounded-lg p-4 bg-white hover:shadow-md transition">
      
      <div className="relative w-full h-[200px] mb-3">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover rounded-md"
        />
      </div>

      <h3 className="text-pink-600 font-medium text-sm text-center">
        {name}
      </h3>

      <p className="text-center text-sm mt-2 text-gray-700">
        ₦ {priceMin.toLocaleString()} – ₦ {priceMax.toLocaleString()}
      </p>
    </div>
    </Link>
  );
}