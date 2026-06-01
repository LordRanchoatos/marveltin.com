import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shop | Marvel Tech — Hardware, Gadgets & Accessories",
  description:
    "Shop premium laptops, phones, networking gear, AI hardware, and accessories. Secure checkout powered by Paystack.",
};

export default function ShopLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
