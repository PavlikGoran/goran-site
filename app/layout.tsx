import type { Metadata } from "next";
import { Fraunces, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-fraunces", display: "swap" });
const geist = Geist({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-geist", display: "swap" });
const geistMono = Geist_Mono({ subsets: ["latin"], weight: ["500"], variable: "--font-geist-mono", display: "swap" });

export const metadata: Metadata = {
  title: "Goran Pavlik — Revenue Operations & Commercial Intelligence",
  description:
    "I build the metrics, forecasts, and systems revenue leaders act on with confidence. Revenue Operations and Commercial Intelligence, London.",
  openGraph: {
    title: "Goran Pavlik — Revenue Operations & Commercial Intelligence",
    description: "Metrics, forecasts, and systems revenue leaders act on with confidence.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${geist.variable} ${geistMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}