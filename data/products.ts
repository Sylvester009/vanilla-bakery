export interface Product {
    id: string;
    name: string;
    price: number;
    description: string;
    detailedDescription: string;
    image: string;
    alt: string;
    category: string;
    type?: string[];
    slug: string;
}

export const products: Product[] = [
    {
        id: "1",
        name: "Rose & Pistachio Box",
        price: 32.00,
        description: "Pack of 12 signature macarons",
        detailedDescription: "Delicate macarons filled with rose-infused ganache and pistachio cream. Each bite offers a perfect balance of floral and nutty notes.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuByoq-5UUA92Cil-QicRvndtmm2EunRJYnyddxxVgp1MKwV41V2X7ddT8eEjdpbsIXGTCrCdNoqET-aDlJcxkOGy3DG826Txc7qarJ3CJHc50y6TkSrW9aufq9G-9ctPdvdrYvVEc9uS1rFgSJCGpwjiMk3wgbAX64DFqP41w1qPWyYPkqml6JdyuwDnfIiNFSEQteJs375BUVeYkeljD_D5GtNcRfgYgFk4YGjJ1dTgdOv1dF_MThDsj2MAzJ-f4pNvHle04gQbCI",
        alt: "Delicate pink and green macarons on marble surface",
        category: "macarons",
        type: ["gluten-free"],
        slug: "rose-pistachio-box"
    },
    {
        id: "2",
        name: "Earl Grey Berry Tart",
        price: 12.00,
        description: "Botanical infusion with local cream",
        detailedDescription: "A delicate tart featuring Earl Grey infused pastry cream, topped with fresh seasonal berries and a light dusting of edible flowers.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDa-o0tcRatcPaYCApcwYhuE36mOd67vKOzh8dh6wSK0fo9fDNv9vFWfwxNgJwTNvOWdfs7xLhVWvLmizRWQFzGA6J0CbGVF5H-OjLGjaZ8UrCABO4EqV-uKZ0x4wq-hOnIX7E7GBBDoviwtsWrL-4959wA5iEVM8J0vb9yLRM_dQJPdONPo4GNAFTIXf3eruMZ5xsbLsG4Jc6PPUQrnof3zgxDpzmwbdU6ouio5XOSkkDTOF2y4zssAwIJWSKcG1iLsqj6EKIIXY0",
        alt: "Elegant tart with edible lavender flowers and purple cream",
        category: "tarts",
        type: [],
        slug: "earl-grey-berry-tart"
    },
    {
        id: "3",
        name: "Classic Vanilla Petite",
        price: 45.00,
        description: "Madagascar bean sponge",
        detailedDescription: "A timeless classic featuring layers of light Madagascar vanilla bean sponge, filled with silky vanilla bean buttercream and finished with a smooth vanilla glaze.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC6J2yabCe_cjgNa9ODHhN4FoKW68MvbdKcJj6ohp-9Sj9qRiZT0PqGCkJdThkYdubbCsCsRF8eEWovnTdsQcS68L6ixEKCApLhjlLVAdrBwJncLVDqbdaaiholUs5xgfWcGZQepz4AUTDQhiqPSYfrUN1d8oi5Nj8kkokOz7HuaaDkGzLrkOG-b5BlJjbMHQ6iAVNY92AO7NnlBEXUlM38LSLuCl0Nu_fkoKCmfMAN3PGnPgh1DCKz-_jGo9ES0DOXXwIA0XwsFFs",
        alt: "Minimalist white layered cake with delicate pink petals",
        category: "cakes",
        type: [],
        slug: "classic-vanilla-petite"
    },
    {
        id: "4",
        name: "Raspberry Cloud",
        price: 6.50,
        description: "Whipped berry buttercream",
        detailedDescription: "Light and airy cupcakes topped with a cloud-like swirl of raspberry-infused buttercream, finished with fresh raspberries and a dusting of powdered sugar.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD5n99UP3E2_QYVUWe6O3sOKYYdCYZ25_tjAs_rb4dDIhdRoIWBRn_iZApA6E-LvWPrUdV8L2_I7QDvB4n3Iz2UkjWn5_sDdtwlf8BP3coqV9-q2SoA2nAIGZ9-G3SjBG33f7LXkYB9yRD1MXGPLJUVgdStATBLWcLrxmJ3A8Uj4uGu2esOyXbtQchJQ5C-ZvgnfIgSvFpWmlTj-b7kfhVO4tuG5efkVEh4HhWICfydebKn9wojd_7aZOjErqkIfGhCCBuMYgIFLwg",
        alt: "Gourmet cupcakes with high-swirl pink raspberry frosting",
        category: "cakes",
        type: ["nut-free"],
        slug: "raspberry-cloud"
    },
    {
        id: "5",
        name: "Citron Bloom Tart",
        price: 9.00,
        description: "Zesty curd with torched meringue",
        detailedDescription: "A bright and refreshing tart filled with tangy lemon curd, topped with fluffy Italian meringue that's torched to perfection.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAx1zSw7gCzVA4DHoAjmnLi0l5C5D0G8TCkfbVAhLZowAnSHGVAcErq2YBDE1hHcXL8XSRtOvONAYTz-o8DKZc90Gv5RjoZeRHmVaeJ6HhEEKnIcGQDGKammIeDDsTTBHQphD0en7Un4X07JfDghW5I7g7vALi0BP8EHY3idu0OOKpCDKnWvpUEkTibRV_gOVCZJHXynUQ_oG1HaiHa-vAx-SZsmfm9TODXbvQkP_EzMTZ-I29vNbZmhsGLtodw3qbfl7wZxv-CAq4",
        alt: "Small tartlet with toasted meringue peaks and lemon zest",
        category: "tarts",
        type: [],
        slug: "citron-bloom-tart"
    },
    {
        id: "6",
        name: "Raspberry Rose Macaron Tower",
        price: 85.00,
        description: "Pack of 48 signature macarons",
        detailedDescription: "An architectural masterpiece of flavor. Forty-eight handcrafted macarons flavored with Madagascar vanilla, wild raspberry reduction, and a delicate hint of Damask rose water. Each layer is meticulously piped to achieve a soft, whipped visual texture.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBx5sVqjVMfhWcMnNaONLlurb4lMyozYfREsCiAfYFweYUh7OZ02elK7gAf2gH5_xXnGvxYTBroeLx1P8ZumcNLITNdo8xINRSD59u31OKqF_qyr76lZcJzSIj1jNflgIwfnlpRHx7zLQlpfEVcNt3ukpp1W4jZvlC7pdAqDQYQCZoQR3I8WRrwnO2ZAJOERGxzbppVBtxtId2xwZ06yLGVssSJ3Nx-vSTWWhknaT1AqIlPdr7QSqwHAqZ_ZlwQaJHHyriyNnAzd9M",
        alt: "Exquisite raspberry rose macaron tower on a marble pedestal",
        category: "macarons",
        type: [],
        slug: "raspberry-rose-macaron-tower"
    },
    {
        id: "7",
        name: "Citron Bloom Tart7",
        price: 9.00,
        description: "Zesty curd with torched meringue",
        detailedDescription: "A bright and refreshing tart filled with tangy lemon curd, topped with fluffy Italian meringue that's torched to perfection.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAx1zSw7gCzVA4DHoAjmnLi0l5C5D0G8TCkfbVAhLZowAnSHGVAcErq2YBDE1hHcXL8XSRtOvONAYTz-o8DKZc90Gv5RjoZeRHmVaeJ6HhEEKnIcGQDGKammIeDDsTTBHQphD0en7Un4X07JfDghW5I7g7vALi0BP8EHY3idu0OOKpCDKnWvpUEkTibRV_gOVCZJHXynUQ_oG1HaiHa-vAx-SZsmfm9TODXbvQkP_EzMTZ-I29vNbZmhsGLtodw3qbfl7wZxv-CAq4",
        alt: "Small tartlet with toasted meringue peaks and lemon zest",
        category: "tarts",
        type: [],
        slug: "citron-bloom-tart"
    },
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
  {
    id: "all",
    label: "All Items",
    types: [],
  },

  {
    id: "cakes",
    label: "Cakes",
    types: [
      { id: "birthday", label: "Birthday Cakes" },
      { id: "wedding", label: "Wedding Cakes" },
      { id: "chocolate", label: "Chocolate Cakes" },
      { id: "fruit", label: "Fruit Cakes" },
      { id: "custom", label: "Custom Cakes" },
    ],
  },

  {
    id: "cupcakes",
    label: "Cupcakes",
    types: [
      { id: "vanilla", label: "Vanilla Cupcakes" },
      { id: "chocolate", label: "Chocolate Cupcakes" },
      { id: "filled", label: "Filled Cupcakes" },
      { id: "mini", label: "Mini Cupcakes" },
    ],
  },

  {
    id: "pastries",
    label: "Pastries",
    types: [
      { id: "croissant", label: "Croissants" },
      { id: "danish", label: "Danish Pastries" },
      { id: "puff", label: "Puff Pastries" },
    ],
  },

  {
    id: "cookies",
    label: "Cookies",
    types: [
      { id: "chocolate-chip", label: "Chocolate Chip" },
      { id: "oatmeal", label: "Oatmeal Cookies" },
      { id: "shortbread", label: "Shortbread" },
    ],
  },

  {
    id: "bread",
    label: "Bread & Loaves",
    types: [
      { id: "white", label: "White Bread" },
      { id: "whole-wheat", label: "Whole Wheat" },
      { id: "sourdough", label: "Sourdough" },
    ],
  },

  {
    id: "tarts",
    label: "Tarts",
    types: [
      { id: "fruit", label: "Fruit Tarts" },
      { id: "chocolate", label: "Chocolate Tarts" },
    ],
  },

  {
    id: "macarons",
    label: "Macarons",
    types: [
      { id: "assorted", label: "Assorted Packs" },
      { id: "single-flavor", label: "Single Flavor" },
    ],
  },
];

