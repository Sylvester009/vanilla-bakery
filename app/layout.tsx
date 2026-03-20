import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import {Noto_Serif, Plus_Jakarta_Sans, Sansita_Swashed} from 'next/font/google';
import {Poppins, Pacifico} from 'next/font/google';
import {CartProvider} from '@/contexts/CartContext';
import Cart from '@/components/Cart';

export const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});
export const pacifico = Pacifico({
  subsets: ['latin'],
  weight: ['400'],
});

export const sansita = Sansita_Swashed({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

const notoSerif = Noto_Serif({
  subsets: ['latin'],
  variable: '--font-headline',
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-body',
});

export const metadata = {
  title: 'Vanilla Bakery',
  description: 'Delicious cakes and pastries',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${notoSerif.variable} ${plusJakarta.variable}`}>
        <CartProvider>
          <Header />

          <main>{children}</main>

          <Footer />
          <Cart />
        </CartProvider>
      </body>
    </html>
  );
}
