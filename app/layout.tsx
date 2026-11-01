import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "Charlotte Realty Group | Washington County & Battenkill Valley Real Estate", template: "%s | Charlotte Realty Group" },
  description: "Farmhouses, acreage and village homes in Washington County, NY. Search listings and work directly with a local broker.",
  icons: { icon: "/logo-mark.webp" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
