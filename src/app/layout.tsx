import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Beauty Queen Oslo | PMU · Brows · Lashes · Nails · Expert Training",
  description:
    "Oslos mest eksklusive skjønnhetssalong. Spesialist på PMU, brows, lashes og negler. Tredjeplass verdensmester OMC. Bestill din luksusopplevelse i dag.",
  keywords:
    "skjønnhetssalong Oslo, negler Oslo, lashes Oslo, brows Oslo, PMU Oslo, beauty salon Oslo, vippeextensions Oslo, permanent makeup Oslo, nail salon Oslo, brow lamination Oslo",
  openGraph: {
    title: "Beauty Queen Oslo | Luxury Beauty Destination",
    description:
      "Premiumsalong i Oslo – PMU, Brows, Lashes & Negler. Tredjeplass verdensmester OMC.",
    type: "website",
    locale: "nb_NO",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nb" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
