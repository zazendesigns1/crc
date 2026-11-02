"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { BROKERAGE } from "@/lib/listings";

const NAV = [
  { href: "/", label: "Home" },
  { href: "/search", label: "Search Homes" },
  { href: "/sell", label: "Sell" },
  { href: "/agents", label: "Agents" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  const [contact, setContact] = useState(false);
  const [sent, setSent] = useState(false);
  const cRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
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

  const isOn = (href: string) => (href === "/" ? path === "/" : path.startsWith(href) || (href === "/search" && path.startsWith("/listings")));

  return (
    <>
      <header className={`hdr${overHero ? " hdr-hero" : ""}`}>
        <div className="wrap hdr-row">
          <Link className="hdr-logo" href="/" aria-label="Charlotte Realty Group home">
            <Image className="logo-dark" src="/logo-header.webp" alt="" width={900} height={357} priority />
            <Image className="logo-light" src="/logo-header-light.webp" alt="" width={900} height={357} priority />
          </Link>
          <div className="hdr-actions">
            <button type="button" className="hpill hpill-soft" onClick={() => { setSent(false); setContact(true); }}>Get in touch</button>
            <button type="button" className="hpill hpill-main" aria-expanded={open} aria-controls="site-menu" onClick={() => setOpen(true)}>
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
              <button type="button" className="hpill hpill-soft-dark" tabIndex={open ? 0 : -1} onClick={() => { setOpen(false); setSent(false); setContact(true); }}>Get in touch</button>
              <button ref={closeRef} type="button" className="hpill hpill-light" onClick={() => setOpen(false)} tabIndex={open ? 0 : -1}>
                Close <span className="hx" aria-hidden="true">×</span>
              </button>
            </div>
          </div>
          <nav className="menu-links" aria-label="Main">
            {NAV.map((n, i) => (
              <Link key={n.href} href={n.href} className={isOn(n.href) ? "on" : ""} tabIndex={open ? 0 : -1} style={{ transitionDelay: open ? `${120 + i * 60}ms` : "0ms" }}>
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
      <div className={`contact-ov${contact ? " open" : ""}`} role="dialog" aria-modal="true" aria-labelledby="cov-title" aria-hidden={!contact}>
        <button ref={cRef} type="button" className="cov-x" aria-label="Close" onClick={() => setContact(false)} tabIndex={contact ? 0 : -1}>×</button>
        <div className="cov-inner">
          {sent ? (
            <div className="cov-sent">
              <h2 id="cov-title">Thanks, we&apos;ll be in touch soon.</h2>
              <p>This preview doesn&apos;t send messages yet. On the live site, your note goes straight to the office.</p>
              <button type="button" className="cov-send" onClick={() => setContact(false)}>Close</button>
            </div>
          ) : (
            <>
              <h2 id="cov-title">Thinking about buying or selling?</h2>
              <p className="cov-sub">We&apos;d love to hear from you. Fill out the form below, or call us at <a href={BROKERAGE.phoneHref}>{BROKERAGE.phone}</a>. We usually reply the same day.</p>
              <form className="cov-form" onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
                <div className="cov-row">
                  <input aria-label="Your name" placeholder="Your name *" required autoComplete="name" tabIndex={contact ? 0 : -1} />
                  <input aria-label="Phone number" placeholder="Phone number" type="tel" autoComplete="tel" tabIndex={contact ? 0 : -1} />
                </div>
                <input aria-label="Your email" placeholder="Your email *" type="email" required autoComplete="email" tabIndex={contact ? 0 : -1} />
                <div className="cov-row">
                  <select aria-label="I'm interested in" defaultValue="" tabIndex={contact ? 0 : -1}>
                    <option value="" disabled>I&apos;m interested in…</option>
                    <option>Buying</option><option>Selling</option><option>Buying and selling</option><option>Land or acreage</option><option>Something else</option>
                  </select>
                  <input aria-label="Town or area" placeholder="Town or area" tabIndex={contact ? 0 : -1} />
                </div>
                <textarea aria-label="Message" placeholder="Tell us a little about what you're looking for" rows={4} tabIndex={contact ? 0 : -1} />
                <p className="cov-consent">By sending your message, you agree that {BROKERAGE.name} may call or text you about your inquiry. Consent is not a condition of buying any property, goods or services.</p>
                <button type="submit" className="cov-send" tabIndex={contact ? 0 : -1}>Send message</button>
              </form>
            </>
          )}
        </div>
      </div>
    </>
  );
}
