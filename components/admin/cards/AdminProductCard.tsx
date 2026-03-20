"use client"
import Image from "next/image"
import { pacifico } from "@/app/fonts";
import Button from "@/components/molecules/Button";
import { Edit2, Trash2Icon } from "lucide-react";

interface AdminCardProps {
  id: string;
  name: string;
  priceMin: number;
  priceMax: number;
  image: string;
  onEdit: () => void;
  onDelete: () => void;
}

export default function AdminProductCard( {id,
  name,
  priceMin,
  priceMax,
  image,onEdit, onDelete}: AdminCardProps) {


  return (
    <div className="rounded-xl p-5 bg-white shadow-md border border-gray-100 flex flex-col group">
      <div className="relative w-full aspect-4/3 mb-4 overflow-hidden rounded-lg">
        <Image src={image} alt={name} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
      </div>

      <h3 className={`${pacifico.className} text-[#E50A81] text-xl text-center`}>{name}</h3>
      
      <p className="text-center text-sm font-medium text-gray-700 my-2">
        ₦ {priceMin.toLocaleString()} – ₦ {priceMax.toLocaleString()}
      </p>

      <div className="flex gap-2 mt-auto pt-4">
        <Button
          variant="solid" 
          className="flex-1 py-1 text-xs bg-gray-200 text-blue-950 border border-pink-100  hover:bg-gray-300 space-x-2" 
          icon={Edit2}
          iconSize={15}
          onClick={() => onEdit()}
        >
          Edit
        </Button>
        <Button 
          variant="outline" 
          className="py-1 px-3 border border-pink-200 text-xs" 
          onClick={() => onDelete()}
        >
          <Trash2Icon size={18}/>
        </Button>
      </div>
    </div>
  );
}