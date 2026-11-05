"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { BROKERAGE } from "@/lib/listings";
import ContactPanel from "./ContactPanel";

type Item = { href: string; label: string };
const NAV: (Item & { sub?: Item[] })[] = [
  { href: "/search", label: "Properties", sub: [
    { href: "/search", label: "All properties" },
    { href: "/search?type=Farm", label: "Equestrian estates" },
    { href: "/search?type=Land", label: "Land and acreage" },
    { href: "/search?type=Multi-family", label: "Investment property" },
    { href: "/search?type=House", label: "Residences" },
    { href: "/sell", label: "Sell your property" },
  ] },
  { href: "/expertise", label: "Expertise", sub: [
    { href: "/expertise", label: "Our areas of expertise" },
    { href: "/investment", label: "Investment and transition" },
  ] },
  { href: "/approach", label: "Our Approach" },
  { href: "/agents", label: "About", sub: [
    { href: "/agents", label: "Our team" },
    { href: "/agents/michele", label: "Michele Anderson" },
    { href: "/agents/billy", label: "Billy Smith" },
    { href: "/agents/scott", label: "Scott Morrissey" },
  ] },
];
const MENU: Item[] = [
  { href: "/", label: "Home" },
  { href: "/search", label: "Properties" },
  { href: "/expertise", label: "Expertise" },
  { href: "/approach", label: "Our Approach" },
  { href: "/agents", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  const [contact, setContact] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);
  const cRef = useRef<HTMLButtonElement>(null);
  const overHero = path === "/";
  const hidden = path === "/unlock";

  useEffect(() => { setOpen(false); setContact(false); }, [path]);
  useEffect(() => {
    document.documentElement.style.overflow = open || contact ? "hidden" : "";
    if (open) closeRef.current?.focus();
    if (contact) cRef.current?.focus();
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") { setOpen(false); setContact(false); } };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, contact]);

  const isOn = (href: string) => (href === "/" ? path === "/" : path.startsWith(href) || (href === "/search" && path.startsWith("/listings")));
  const startConversation = () => { setOpen(false); setContact(true); };

  if (hidden) return null;
  return (
    <>
      <header className={`hdr hdr3${overHero ? " hdr-hero" : ""}`}>
        <div className="wrap hdr-row">
          <Link className="hdr-logo" href="/" aria-label="Charlotte Realty Group home">
            <Image className="logo-dark" src="/logo-header.webp" alt="" width={900} height={357} priority />
            <Image className="logo-light" src="/logo-header-light.webp" alt="" width={900} height={357} priority />
          </Link>
          <nav className="hdr3-nav" aria-label="Main">
            {NAV.map((n) => (
              <div className={`hdr3-item${n.sub ? " has-sub" : ""}`} key={n.label}>
                <Link href={n.href} className={isOn(n.href) ? "on" : ""}>
                  {n.label}{n.sub && <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" aria-hidden="true"><path d="m6 9 6 6 6-6" /></svg>}
                </Link>
                {n.sub && (
                  <div className="hdr3-sub">
                    {n.sub.map((s) => <Link key={s.href + s.label} href={s.href}>{s.label}</Link>)}
                  </div>
                )}
              </div>
            ))}
          </nav>
          <div className="hdr-actions">
            <button type="button" className="hpill hpill-soft" onClick={startConversation}>Get in touch</button>
            <button type="button" className="hpill hpill-main hdr3-menu" aria-expanded={open} aria-controls="site-menu" onClick={() => setOpen(true)}>
              Menu <span className="hbars" aria-hidden="true"><span /><span /></span>
            </button>
          </div>
        </div>
      </header>

      <div id="site-menu" className={`menu-ov${open ? " open" : ""}`} role="dialog" aria-modal="true" aria-label="Site menu" aria-hidden={!open}>
        <div className="menu-panel">
          <img className="menu-mark" src="/logo-mark-light.webp" alt="" aria-hidden="true" />
          <div className="menu-top">
            <Link className="hdr-logo" href="/" aria-label="Charlotte Realty Group home" tabIndex={open ? 0 : -1}>
              <Image src="/logo-header-light.webp" alt="" width={900} height={357} />
            </Link>
            <div className="hdr-actions">
              <button type="button" className="hpill hpill-soft-dark" tabIndex={open ? 0 : -1} onClick={startConversation}>Get in touch</button>
              <button ref={closeRef} type="button" className="hpill hpill-light" onClick={() => setOpen(false)} tabIndex={open ? 0 : -1}>
                Close <span className="hx" aria-hidden="true">×</span>
              </button>
            </div>
          </div>
          <nav className="menu-links" aria-label="Main">
            {MENU.map((n, i) => (
              <Link key={n.href} href={n.href} className={isOn(n.href) ? "on" : ""} tabIndex={open ? 0 : -1} onClick={() => setOpen(false)} style={{ transitionDelay: open ? `${120 + i * 60}ms` : "0ms" }}>
                <span className="menu-num">{String(i).padStart(2, "0")}</span>
                <span className="menu-label">{n.label}</span>
              </Link>
            ))}
          </nav>
          <div className="menu-extra" style={{ transitionDelay: open ? `${120 + MENU.length * 60}ms` : "0ms" }}>
            {[{ href: "/sell", label: "Sell your home" }, { href: "/investment", label: "Investment & transition" }].map((n) => (
              <Link key={n.href} href={n.href} className={isOn(n.href) ? "on" : ""} tabIndex={open ? 0 : -1} onClick={() => setOpen(false)}>
                {n.label} <span aria-hidden="true">→</span>
              </Link>
            ))}
          </div>
          <div className="menu-foot">
            <span>Say hello: <a href={`mailto:${BROKERAGE.email}`} tabIndex={open ? 0 : -1}>{BROKERAGE.email}</a></span>
            <span><a href={BROKERAGE.phoneHref} tabIndex={open ? 0 : -1}>{BROKERAGE.phone}</a></span>
          </div>
        </div>
      </div>

      <div className={`contact-ov${contact ? " open" : ""}`} role="dialog" aria-modal="true" aria-label="Get in touch" aria-hidden={!contact}>
        <button ref={cRef} type="button" className="cov-x" aria-label="Close" onClick={() => setContact(false)} tabIndex={contact ? 0 : -1}>×</button>
        <div className="cov-inner">
          {contact && <ContactPanel heading="Let's begin a conversation." />}
        </div>
      </div>
    </>
  );
}
