import type { Metadata } from "next";
import { Sora, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import { CartProvider } from "./components/CartContext";

const sora = Sora({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-sora",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Marvel Technological Innovations | Nigeria Tech Company",
  description:
    "Software development, web & mobile apps, IT consultancy, and premium hardware sales. Your trusted technology partner in Nigeria.",
  keywords:
    "software development Nigeria, mobile app development Nigeria, web development company Nigeria, IT consultancy Nigeria, buy laptops Nigeria",
  icons: {
    icon: "/marvel.jpg",
    shortcut: "/marvel.jpg",
    apple: "/marvel.jpg",
  },
  openGraph: {
    title: "Marvel Technological Innovations | Nigeria Tech Company",
    description:
      "Software development, web & mobile apps, IT consultancy, and premium hardware sales. Your trusted technology partner in Nigeria.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sora.variable} ${inter.variable}`}>
      <body
        style={
          {
            "--font-heading": "var(--font-sora)",
            "--font-body": "var(--font-inter)",
          } as React.CSSProperties
        }
      >
        <CartProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <WhatsAppButton />
        </CartProvider>
      </body>
    </html>
  );
}
