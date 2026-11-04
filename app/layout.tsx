import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "Charlotte Realty Group | Real Estate. Informed by Experience.", template: "%s | Charlotte Realty Group" },
  description: "Distinguished residences, equestrian estates, investment property and land across the Capital District and Southern Adirondacks.",
  icons: { icon: "/logo-mark.webp" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <ScrollReveal />
      </body>
    </html>
  );
}
