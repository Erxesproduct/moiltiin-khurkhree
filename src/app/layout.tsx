import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Мойлтын хүрхрээ — Байгальд ойрхон, өөртөө илүү ойрхон",
  description:
    "Горхи-Тэрэлж байгалийн цогцолборт газар дахь Мойлтын хүрхрээ амралтын газар. Гэр, зуны байшин, люкс өрөө — байгальд ойрхон амралт.",
  openGraph: {
    title: "Мойлтын хүрхрээ — Riverside Escape",
    description: "Байгальд ойрхон, өөртөө илүү ойрхон.",
    locale: "mn_MN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="mn" className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}