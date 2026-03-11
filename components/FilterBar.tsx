import { poppins } from "@/app/layout";
import { Filter } from "lucide-react";

export default function FilterBar() {
  return (
    <div className={`flex items-center gap-2 text-black ${poppins.className} font-normal text-xl mb-10 cursor-pointer`}>
      <span><Filter/></span>
      <span>Filter</span>
    </div>
  );
}