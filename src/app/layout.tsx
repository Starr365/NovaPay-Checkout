import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { PaymentProvider } from "../context/PaymentContext";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Crypto Checkout",
  description: "Secure crypto payment checkout",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${outfit.variable} antialiased font-sans`}
      >
        <PaymentProvider>
          {children}
        </PaymentProvider>
      </body>
    </html>
  );
}
