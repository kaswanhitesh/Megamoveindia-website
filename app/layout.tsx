import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Header from "./components/Header";
import HeadingReveal from "./components/HeadingReveal";
import Footer from "./components/Footer";
import OrganizationJsonLd from "./components/OrganizationJsonLd";
import WhatsAppButton from "./components/WhatsAppButton";
import { SITE_URL } from "./lib/seo";
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
  metadataBase: new URL(SITE_URL),
  title: "Mega Move India — Project & Heavy Cargo Logistics",
  description:
    "Mega Move India provides heavy haulage, ODC transportation, project logistics, freight forwarding and equipment rentals across India and globally.",
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
          <WhatsAppButton />
          <HeadingReveal />
          <OrganizationJsonLd />
        </HeaderFooterProvider>
      </body>
    </html>
  );
}
