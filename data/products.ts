export interface ProductOption {
  name: string;
  type: "select" | "multi-select";
  required?: boolean;
  options: {
    label: string;
    value: string;
    price?: number;
  }[];
}

export interface Product {
  id: string;
  name: string;
  basePrice: number;
  description: string;
  detailedDescription: string;
  image: string;
  alt: string;
  category: string;
  type?: string[];
  slug: string;

  sizes?: { label: string; price: number }[];
  flavors?: string[];
  options?: ProductOption[];
}

export const products: Product[] = [

  {
    id: "cake-standard",
    name: "Standard Cake",
    basePrice: 0,
    description: "2 layers / 2 flavors",
    detailedDescription: "Perfect for birthdays and celebrations. Choose your size and flavors.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD5n99UP3E2_QYVUWe6O3sOKYYdCYZ25_tjAs_rb4dDIhdRoIWBRn_iZApA6E-LvWPrUdV8L2_I7QDvB4n3Iz2UkjWn5_sDdtwlf8BP3coqV9-q2SoA2nAIGZ9-G3SjBG33f7LXkYB9yRD1MXGPLJUVgdStATBLWcLrxmJ3A8Uj4uGu2esOyXbtQchJQ5C-ZvgnfIgSvFpWmlTj-b7kfhVO4tuG5efkVEh4HhWICfydebKn9wojd_7aZOjErqkIfGhCCBuMYgIFLwg",
    alt: "Standard cake",
    category: "cakes",
    type: ["standard"],
    slug: "standard-cake",

    sizes: [
      { label: "6 inches", price: 30000 },
      { label: "8 inches", price: 40000 },
      { label: "10 inches", price: 60000 },
      { label: "12 inches", price: 75000 },
    ],

    flavors: [
      "Vanilla",
      "Strawberry",
      "Chocolate",
      "Red Velvet",
      "Coconut",
      "Lemon",
    ],

    options: [
      {
        name: "Layers Flavor Selection",
        type: "multi-select",
        required: true,
        options: [
          { label: "Layer 1 Flavor", value: "layer1" },
          { label: "Layer 2 Flavor", value: "layer2" },
        ],
      },
      {
        name: "Add Toppers",
        type: "select",
        options: [
          { label: "None", value: "none" },
          { label: "Custom Topper", value: "topper", price: 4000 },
        ],
      },
    ],
  },
  // MINI CAKES
  {
    id: "1",
    name: "Mini Cake (6 inches)",
    basePrice: 20000,
    description: "Single layer / one flavor cake",
    detailedDescription: "A 6-inch mini cake with a soft sponge and smooth buttercream finish. Perfect for small celebrations.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC6J2yabCe_cjgNa9ODHhN4FoKW68MvbdKcJj6ohp-9Sj9qRiZT0PqGCkJdThkYdubbCsCsRF8eEWovnTdsQcS68L6ixEKCApLhjlLVAdrBwJncLVDqbdaaiholUs5xgfWcGZQepz4AUTDQhiqPSYfrUN1d8oi5Nj8kkokOz7HuaaDkGzLrkOG-b5BlJjbMHQ6iAVNY92AO7NnlBEXUlM38LSLuCl0Nu_fkoKCmfMAN3PGnPgh1DCKz-_jGo9ES0DOXXwIA0XwsFFs",
    alt: "Mini cake",
    category: "cakes",
    type: ["mini"],
    slug: "mini-cake-6"
  },

  {
    id: "2",
    name: "Mini Cake (8 inches)",
    basePrice: 25000,
    description: "Single layer / one flavor cake",
    detailedDescription: "An 8-inch mini cake ideal for intimate gatherings.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC6J2yabCe_cjgNa9ODHhN4FoKW68MvbdKcJj6ohp-9Sj9qRiZT0PqGCkJdThkYdubbCsCsRF8eEWovnTdsQcS68L6ixEKCApLhjlLVAdrBwJncLVDqbdaaiholUs5xgfWcGZQepz4AUTDQhiqPSYfrUN1d8oi5Nj8kkokOz7HuaaDkGzLrkOG-b5BlJjbMHQ6iAVNY92AO7NnlBEXUlM38LSLuCl0Nu_fkoKCmfMAN3PGnPgh1DCKz-_jGo9ES0DOXXwIA0XwsFFs",
    alt: "Mini cake",
    category: "cakes",
    type: ["mini"],
    slug: "mini-cake-8"
  },

  // STANDARD CAKES
  {
    id: "3",
    name: "Standard Cake (8 inches)",
    basePrice: 40000,
    description: "2 layers / 2 flavors",
    detailedDescription: "A standard celebration cake with two layers and rich flavor combinations.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD5n99UP3E2_QYVUWe6O3sOKYYdCYZ25_tjAs_rb4dDIhdRoIWBRn_iZApA6E-LvWPrUdV8L2_I7QDvB4n3Iz2UkjWn5_sDdtwlf8BP3coqV9-q2SoA2nAIGZ9-G3SjBG33f7LXkYB9yRD1MXGPLJUVgdStATBLWcLrxmJ3A8Uj4uGu2esOyXbtQchJQ5C-ZvgnfIgSvFpWmlTj-b7kfhVO4tuG5efkVEh4HhWICfydebKn9wojd_7aZOjErqkIfGhCCBuMYgIFLwg",
    alt: "Standard cake",
    category: "cakes",
    type: ["standard"],
    slug: "standard-cake-8"
  },

  // PREMIUM CAKES
  {
    id: "4",
    name: "Premium Cake (10 inches)",
    basePrice: 85000,
    description: "3 layers / 3 flavors",
    detailedDescription: "A premium cake designed for large celebrations with multiple layers and flavors.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC6J2yabCe_cjgNa9ODHhN4FoKW68MvbdKcJj6ohp-9Sj9qRiZT0PqGCkJdThkYdubbCsCsRF8eEWovnTdsQcS68L6ixEKCApLhjlLVAdrBwJncLVDqbdaaiholUs5xgfWcGZQepz4AUTDQhiqPSYfrUN1d8oi5Nj8kkokOz7HuaaDkGzLrkOG-b5BlJjbMHQ6iAVNY92AO7NnlBEXUlM38LSLuCl0Nu_fkoKCmfMAN3PGnPgh1DCKz-_jGo9ES0DOXXwIA0XwsFFs",
    alt: "Premium cake",
    category: "cakes",
    type: ["premium"],
    slug: "premium-cake-10"
  },

  // BENTO CAKES
  {
    id: "5",
    name: "Bento Cake (Top Iced)",
    basePrice: 8000,
    description: "5-inch mini cake",
    detailedDescription: "A small, cute bento cake with top icing design.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD5n99UP3E2_QYVUWe6O3sOKYYdCYZ25_tjAs_rb4dDIhdRoIWBRn_iZApA6E-LvWPrUdV8L2_I7QDvB4n3Iz2UkjWn5_sDdtwlf8BP3coqV9-q2SoA2nAIGZ9-G3SjBG33f7LXkYB9yRD1MXGPLJUVgdStATBLWcLrxmJ3A8Uj4uGu2esOyXbtQchJQ5C-ZvgnfIgSvFpWmlTj-b7kfhVO4tuG5efkVEh4HhWICfydebKn9wojd_7aZOjErqkIfGhCCBuMYgIFLwg",
    alt: "Bento cake",
    category: "cakes",
    type: ["bento"],
    slug: "bento-cake-top"
  },

  // COOKIES
  {
    id: "6",
    name: "Chocolate Chip Cookies",
    basePrice: 3000,
    description: "Freshly baked cookies",
    detailedDescription: "Crispy on the outside and chewy on the inside chocolate chip cookies.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuByoq-5UUA92Cil-QicRvndtmm2EunRJYnyddxxVgp1MKwV41V2X7ddT8eEjdpbsIXGTCrCdNoqET-aDlJcxkOGy3DG826Txc7qarJ3CJHc50y6TkSrW9aufq9G-9ctPdvdrYvVEc9uS1rFgSJCGpwjiMk3wgbAX64DFqP41w1qPWyYPkqml6JdyuwDnfIiNFSEQteJs375BUVeYkeljD_D5GtNcRfgYgFk4YGjJ1dTgdOv1dF_MThDsj2MAzJ-f4pNvHle04gQbCI",
    alt: "Chocolate chip cookies",
    category: "cookies",
    type: ["chocolate-chip"],
    slug: "chocolate-chip-cookies"
  },

  // BROWNIES
  {
    id: "7",
    name: "Brownie Slab (9 inches)",
    basePrice: 30000,
    description: "Rich chocolate brownie slab",
    detailedDescription: "Dense and fudgy brownie slab perfect for sharing.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDa-o0tcRatcPaYCApcwYhuE36mOd67vKOzh8dh6wSK0fo9fDNv9vFWfwxNgJwTNvOWdfs7xLhVWvLmizRWQFzGA6J0CbGVF5H-OjLGjaZ8UrCABO4EqV-uKZ0x4wq-hOnIX7E7GBBDoviwtsWrL-4959wA5iEVM8J0vb9yLRM_dQJPdONPo4GNAFTIXf3eruMZ5xsbLsG4Jc6PPUQrnof3zgxDpzmwbdU6ouio5XOSkkDTOF2y4zssAwIJWSKcG1iLsqj6EKIIXY0",
    alt: "Brownie slab",
    category: "pastries",
    type: ["brownie"],
    slug: "brownie-slab"
  },

  // BANANA BREAD
  {
    id: "8",
    name: "Banana Bread (4 Pack)",
    basePrice: 6000,
    description: "Mini loaf pack",
    detailedDescription: "Soft and moist banana bread mini loaves.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDa-o0tcRatcPaYCApcwYhuE36mOd67vKOzh8dh6wSK0fo9fDNv9vFWfwxNgJwTNvOWdfs7xLhVWvLmizRWQFzGA6J0CbGVF5H-OjLGjaZ8UrCABO4EqV-uKZ0x4wq-hOnIX7E7GBBDoviwtsWrL-4959wA5iEVM8J0vb9yLRM_dQJPdONPo4GNAFTIXf3eruMZ5xsbLsG4Jc6PPUQrnof3zgxDpzmwbdU6ouio5XOSkkDTOF2y4zssAwIJWSKcG1iLsqj6EKIIXY0",
    alt: "Banana bread",
    category: "bread",
    type: ["loaf"],
    slug: "banana-bread-4"
  }
];

export interface TypeFilter {
  id: string;
  label: string;
}

export interface CategoryFilter {
  id: string;
  label: string;
  types: TypeFilter[];
}

export const categoryFilters: CategoryFilter[] = [
  { id: "all", label: "All Items", types: [] },

  {
    id: "cakes",
    label: "Cakes",
    types: [
      { id: "mini", label: "Mini Cakes" },
      { id: "standard", label: "Standard Cakes" },
      { id: "premium", label: "Premium Cakes" },
      { id: "bento", label: "Bento Cakes" },
      { id: "naked", label: "Naked Cakes" },
      { id: "semi-naked", label: "Semi-Naked Cakes" },
    ],
  },

  {
    id: "pastries",
    label: "Pastries & Treats",
    types: [
      { id: "brownie", label: "Brownies" },
      { id: "muffins", label: "Muffins" },
      { id: "waffles", label: "Waffles" },
    ],
  },

  {
    id: "cookies",
    label: "Cookies",
    types: [
      { id: "chocolate-chip", label: "Chocolate Chip" },
      { id: "sugar", label: "Sugar Cookies" },
    ],
  },

  {
    id: "bread",
    label: "Bread & Loaves",
    types: [
      { id: "banana", label: "Banana Bread" },
      { id: "pound", label: "Pound Cake Loaf" },
    ],
  },
];
