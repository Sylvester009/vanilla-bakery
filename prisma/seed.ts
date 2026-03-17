import { prisma } from "@/lib/prisma";

const products = [
  {
    name: "Vanilla Cake with Chocolate Frosting",
    description: "Our fluffy and moist carrot cake with lemon cream cheese filling with an additional layer of vanilla cheesecake in the middle, covered with our swiss meringue buttercream frosting.",
    priceMin: 30000,
    priceMax: 80000,
    image: "/products/cake1 (1).png",
  },
  {
    name: "Strawberry Drip Cake",
    description: "Our fluffy and moist carrot cake with lemon cream cheese filling with an additional layer of vanilla cheesecake in the middle, covered with our swiss meringue buttercream frosting.",
    priceMin: 30000,
    priceMax: 80000,
    image: "/products/cake1 (2).png",
  },
  {
    name: "Cupcake Set",
    description: "Our fluffy and moist carrot cake with lemon cream cheese filling with an additional layer of vanilla cheesecake in the middle, covered with our swiss meringue buttercream frosting.",
    priceMin: 30000,
    priceMax: 80000,
    image: "/products/cake1 (3).png",
  },
  {
    name: "Vanilla Cake with Chocolate Frosting",
    description: "Our fluffy and moist carrot cake with lemon cream cheese filling with an additional layer of vanilla cheesecake in the middle, covered with our swiss meringue buttercream frosting.",
    priceMin: 30000,
    priceMax: 80000,
    image: "/products/cake1 (4).png",
  },
  {
    name: "Strawberry Drip Cake",
    description: "Our fluffy and moist carrot cake with lemon cream cheese filling with an additional layer of vanilla cheesecake in the middle, covered with our swiss meringue buttercream frosting.",
    priceMin: 30000,
    priceMax: 80000,
    image: "/products/cake1 (5).png",
  },
  {
    name: "Cupcake Set",
    description: "Our fluffy and moist carrot cake with lemon cream cheese filling with an additional layer of vanilla cheesecake in the middle, covered with our swiss meringue buttercream frosting.",
    priceMin: 30000,
    priceMax: 80000,
    image: "/products/cake1 (6).png",
  },
];

async function main() {
  await prisma.product.createMany({ data: products });
  console.log("Products seeded!");
}

main()
  .catch((e) => console.error(e))
  .finally(async () => await prisma.$disconnect());