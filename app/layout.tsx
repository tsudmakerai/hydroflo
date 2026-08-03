import type { Metadata } from "next";
import { Manrope, Oswald } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["cyrillic", "latin"],
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["cyrillic", "latin"],
});

export const metadata: Metadata = {
  title: "Гидропоставка — гидравлическое оборудование в Россию",
  description:
    "Гидроцилиндры, насосы, гидромоторы, распределители и РВД. Поставка европейских брендов и оборудования из Китая в Москву, Московскую область и по России.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${manrope.variable} ${oswald.variable}`}>
        {children}
      </body>
    </html>
  );
}
