import type { Metadata } from "next";
import "./globals.css";

import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import ScrollReset from "@/app/components/ScrollReset";

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
      className="antialiased"
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
        {/* Global Scroll Reset */}
        <ScrollReset />

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