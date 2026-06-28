import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import { HeaderFooterProvider } from "./components/HeaderFooterContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MegaMoveIndia — Cinematic Scroll Experience",
  description:
    "An immersive, scroll-driven cinematic experience by MegaMoveIndia. Explore our story frame by frame.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#f7f7f7] text-black">
        <HeaderFooterProvider>
          <Header />
          <main className="flex-grow w-full relative flex flex-col">
            <div className="flex-grow w-full relative">
              {children}
            </div>
            <Footer />
          </main>
        </HeaderFooterProvider>
      </body>
    </html>
  );
}
