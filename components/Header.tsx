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
  { href: "/#expertise", label: "Expertise", sub: [
    { href: "/#expertise", label: "Our areas of expertise" },
    { href: "/investment", label: "Investment and transition" },
  ] },
  { href: "/#approach", label: "Our Approach" },
  { href: "/agents", label: "About", sub: [
    { href: "/agents", label: "Our team" },
    { href: "/agents/michele", label: "Michele Anderson" },
    { href: "/agents/billy", label: "Billy Smith" },
  ] },
  { href: "/contact", label: "Contact" },
];
const MENU: Item[] = [
  { href: "/", label: "Home" },
  { href: "/search", label: "Properties" },
  { href: "/#expertise", label: "Expertise" },
  { href: "/#approach", label: "Our Approach" },
  { href: "/agents", label: "About" },
  { href: "/contact", label: "Contact" },
];

function Brand({ light }: { light?: boolean }) {
  return (
    <span className={`brand2${light ? " light" : ""}`}>
      <Image src={light ? "/logo-mark-light.webp" : "/logo-mark.webp"} alt="" width={800} height={421} priority />
      <span className="brand2-t"><span>Charlotte</span><span>Realty Group</span></span>
    </span>
  );
}

export default function Header() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  const [contact, setContact] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);
  const cRef = useRef<HTMLButtonElement>(null);
  const overHero = path === "/";

  useEffect(() => { setOpen(false); setContact(false); }, [path]);
  useEffect(() => {
    document.documentElement.style.overflow = open || contact ? "hidden" : "";
    if (open) closeRef.current?.focus();
    if (contact) cRef.current?.focus();
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") { setOpen(false); setContact(false); } };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, contact]);

  const isOn = (href: string) => (href === "/" ? path === "/" : !href.startsWith("/#") && (path.startsWith(href) || (href === "/search" && path.startsWith("/listings"))));
  const startConversation = () => { setOpen(false); setContact(true); };

  return (
    <>
      <header className={`hdr hdr2${overHero ? " hdr-hero" : ""}`}>
        <div className="wrap hdr2-row">
          <Link href="/" aria-label="Charlotte Realty Group home" className="hdr2-logo">
            <span className="logo-dark"><Brand /></span>
            <span className="logo-light"><Brand light /></span>
          </Link>
          <nav className="hdr2-nav" aria-label="Main">
            {NAV.map((n) => (
              <div className={`hdr2-item${n.sub ? " has-sub" : ""}`} key={n.label}>
                <Link href={n.href} className={isOn(n.href) ? "on" : ""}>
                  {n.label}{n.sub && <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" aria-hidden="true"><path d="m6 9 6 6 6-6" /></svg>}
                </Link>
                {n.sub && (
                  <div className="hdr2-sub">
                    {n.sub.map((s) => <Link key={s.href + s.label} href={s.href}>{s.label}</Link>)}
                  </div>
                )}
              </div>
            ))}
          </nav>
          <div className="hdr2-actions">
            <button type="button" className="btn hdr2-cta" onClick={startConversation}>Start a Conversation</button>
            <button type="button" className="hpill hpill-soft hdr2-m" onClick={startConversation}>Get in touch</button>
            <button type="button" className="hpill hpill-main hdr2-m" aria-expanded={open} aria-controls="site-menu" onClick={() => setOpen(true)}>
              Menu <span className="hbars" aria-hidden="true"><span /><span /></span>
            </button>
          </div>
        </div>
      </header>

      <div id="site-menu" className={`menu-ov${open ? " open" : ""}`} role="dialog" aria-modal="true" aria-label="Site menu" aria-hidden={!open}>
        <div className="menu-panel">
          <img className="menu-mark" src="/logo-mark-light.webp" alt="" aria-hidden="true" />
          <div className="menu-top">
            <Link href="/" aria-label="Charlotte Realty Group home" tabIndex={open ? 0 : -1}><Brand light /></Link>
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
          <div className="menu-foot">
            <span>Say hello: <a href={`mailto:${BROKERAGE.email}`} tabIndex={open ? 0 : -1}>{BROKERAGE.email}</a></span>
            <span><a href={BROKERAGE.phoneHref} tabIndex={open ? 0 : -1}>{BROKERAGE.phone}</a></span>
          </div>
        </div>
      </div>

      <div className={`contact-ov${contact ? " open" : ""}`} role="dialog" aria-modal="true" aria-label="Start a conversation" aria-hidden={!contact}>
        <button ref={cRef} type="button" className="cov-x" aria-label="Close" onClick={() => setContact(false)} tabIndex={contact ? 0 : -1}>×</button>
        <div className="cov-inner">
          {contact && <ContactPanel heading="Let's begin a conversation." />}
        </div>
      </div>
    </>
  );
}
