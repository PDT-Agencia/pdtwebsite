import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PDT Agencia",
  description: "Agencia PDT",
};

export default async function LocaleLayout({
  children
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="es">
        <body className={inter.className}>{children}</body>
    </html>
  );
}