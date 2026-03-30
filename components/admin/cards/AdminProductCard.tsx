'use client';
import Image from 'next/image';
import {pacifico} from '@/app/fonts';
import Button from '@/components/molecules/Button';

interface AdminCardProps {
  id: string;
  name: string;
  basePrice: number;
  image: string;
  onEdit: () => void;
  onDelete: () => void;
}

export default function AdminProductCard({
  id,
  name,
  basePrice,
  image,
  onEdit,
  onDelete,
}: AdminCardProps) {
  return (
    <div className="rounded-xl p-5 bg-white shadow-md border border-gray-100 flex flex-col group">
      <div className="relative w-full aspect-4/3 mb-4 overflow-hidden rounded-lg">
        {image && (
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) }
      </div>

      <h3
        className={`${pacifico.className} text-[#E50A81] text-xl text-center`}
      >
        {name}
      </h3>

      <p className="text-center text-sm font-medium text-gray-700 my-2">
        ₦ {basePrice.toLocaleString()}
      </p>

      <div className="flex gap-2 mt-auto pt-4">
        <Button
          variant="solid"
          className="flex-1 py-1 text-xs"
          onClick={() => onEdit()}
        >
          Edit
        </Button>
        <Button
          variant="outline"
          className="flex-1 py-1 text-xs"
          onClick={() => onDelete()}
        >
          Delete
        </Button>
      </div>
    </div>
  );
}
