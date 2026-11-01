"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const NAV = [
  { href: "/", label: "Home" },
  { href: "/search", label: "Search Homes" },
  { href: "/sell", label: "Sell" },
  { href: "/about", label: "About" },
];

export default function Header() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  useEffect(() => setOpen(false), [path]);
  const isOn = (href: string) => (href === "/" ? path === "/" : path.startsWith(href) || (href === "/search" && path.startsWith("/listings")));
  return (
    <>
      <div className="sample">
        <b>Design preview:</b>{" "}
        <span className="long">the listings shown are sample data. Live MLS listings will appear here once Charlotte Realty Group&apos;s IDX feed is connected.</span>
        <span className="short">sample listings until the MLS feed is connected.</span>
      </div>
      <header className="site">
        <div className="wrap nav">
          <Link className="brand" href="/" aria-label="Charlotte Realty Group home">
            <Image src="/logo-mark.webp" alt="" width={99} height={52} priority />
            <span>Charlotte<small>Realty Group</small></span>
          </Link>
          <button className="menu-btn" aria-expanded={open} aria-controls="links" onClick={() => setOpen((o) => !o)}>Menu</button>
          <nav className={`links${open ? " open" : ""}`} id="links">
            {NAV.map((n) => (
              <Link key={n.href} href={n.href} className={isOn(n.href) ? "on" : ""}>{n.label}</Link>
            ))}
            <Link href="/contact" className="cta">Contact Michele</Link>
          </nav>
        </div>
      </header>
    </>
  );
}
