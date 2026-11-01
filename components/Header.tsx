"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const NAV = [
  { href: "/", label: "Home", sub: "Start here", mobileOnly: true },
  { href: "/search", label: "Search Homes", sub: "Browse listings" },
  { href: "/sell", label: "Sell", sub: "Home valuation" },
  { href: "/agents", label: "Agents", sub: "Meet the team" },
];
const Arrow = () => (
  <span className="nav-arrow" aria-hidden="true"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17 17 7M9 7h8v8" /></svg></span>
);

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
        <div className="wrap nav"><div className="nav-bar">
          <Link className="brand" href="/" aria-label="Charlotte Realty Group home">
            <Image className="logo-dark" src="/logo-header.webp" alt="" width={900} height={357} priority />
            <Image className="logo-light" src="/logo-header-light.webp" alt="" width={900} height={357} priority />
          </Link>
          <button className="menu-btn" aria-expanded={open} aria-controls="links" aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen((o) => !o)}><span className={`burger${open ? " x" : ""}`} aria-hidden="true"><span /><span /></span></button>
          <nav className={`links${open ? " open" : ""}`} id="links">
            {NAV.map((n) => (
              <Link key={n.href} href={n.href} className={`nav-item${isOn(n.href) ? " on" : ""}${n.mobileOnly ? " m-only" : ""}`}>
                <span className="nav-t">{n.label}</span><span className="nav-s">{n.sub}</span>
              </Link>
            ))}
            <div className="nav-ctas">
              <Link href="/contact" className="npill npill-ghost">Get in touch <Arrow /></Link>
              <a href="tel:+15185550142" className="npill npill-solid">Call the office <Arrow /></a>
            </div>
          </nav>
        </div></div>
      </header>
    </>
  );
}
