import type { Metadata } from "next";
import { Lora, Manrope } from "next/font/google";
import "./globals.css";

const lora = Lora({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-lora",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-manrope",
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
    <html lang="mn" className={`${lora.variable} ${manrope.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}