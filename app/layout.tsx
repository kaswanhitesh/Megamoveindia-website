import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mega Move India Private Limited",
  description:
    "Project Logistics, Freight Forwarding, Heavy Lift Transportation, Equipment Rentals and Supply Chain Solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body
        className="
          min-h-screen
          flex
          flex-col
          bg-[#f7f7f7]
          overflow-x-hidden
        "
      >
        {/* Global Header */}
        <Header />

        {/* Page Content */}
        <main className="flex-1 w-full overflow-x-hidden">
          {children}
        </main>

        {/* Global Footer */}
        <Footer />
      </body>
    </html>
  );
}