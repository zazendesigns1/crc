"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const NAV = [
  { href: "/", label: "Home" },
  { href: "/search", label: "Search Homes" },
  { href: "/sell", label: "Sell" },
  { href: "/agents", label: "Agents" },
];

export default function Header() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => setOpen(false), [path]);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const overHero = path === "/";
  const isOn = (href: string) => (href === "/" ? path === "/" : path.startsWith(href) || (href === "/search" && path.startsWith("/listings")));
  return (
    <>
      <header className={`site${overHero ? " over-hero" : ""}${scrolled || open ? " solid" : ""}`}>
        <div className="wrap nav">
          <Link className="brand" href="/" aria-label="Charlotte Realty Group home">
            <Image className="logo-dark" src="/logo-header.webp" alt="" width={900} height={357} priority />
            <Image className="logo-light" src="/logo-header-light.webp" alt="" width={900} height={357} priority />
          </Link>
          <button className="menu-btn" aria-expanded={open} aria-controls="links" aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen((o) => !o)}><span className={`burger${open ? " x" : ""}`} aria-hidden="true"><span /><span /></span></button>
          <nav className={`links${open ? " open" : ""}`} id="links">
            {NAV.map((n) => (
              <Link key={n.href} href={n.href} className={isOn(n.href) ? "on" : ""}>{n.label}</Link>
            ))}
            <Link href="/contact" className="cta">Contact Us</Link>
          </nav>
        </div>
      </header>
    </>
  );
}
