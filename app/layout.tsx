import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CartProvider from "@/components/CartProvider";
import { Sansita_Swashed } from "next/font/google";
import { Poppins, Pacifico } from "next/font/google";

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});
export const pacifico = Pacifico({
  subsets: ["latin"],
  weight: ["400"],
});

export const sansita = Sansita_Swashed({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Vanilla Bakery",
  description: "Delicious cakes and pastries",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>

<CartProvider>
        <Header />

        <main>{children}</main>

        <Footer />
</CartProvider>
      </body>
    </html>
  );
}