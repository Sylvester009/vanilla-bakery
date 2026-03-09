import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CartProvider from "@/components/CartProvider";

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
      <body>

<CartProvider>
        <Header />

        <main>{children}</main>

        <Footer />
</CartProvider>
      </body>
    </html>
  );
}