import { pacifico } from "@/app/fonts";
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
    <div className="rounded-lg p-6 bg-white shadow-md transition max-h-[424px] h-full">
      
      <div className="relative w-[312px] rounded-[8px] h-[212px] mx-auto mb-3">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover rounded-md"
        />
      </div>

      <h3 className={`text-[#E50A81] font-normal text-[20px] text-center my-2 ${pacifico.className}`}>
        {name}
      </h3>

      <p className="text-center text-sm mt-2 text-black py-1">
        ₦ {priceMin.toLocaleString()} – ₦ {priceMax.toLocaleString()}
      </p>
    </div>
    </Link>
  );
}