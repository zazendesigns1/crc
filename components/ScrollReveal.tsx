"use client";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

/** Adds entrance animations as sections scroll into view. Content stays visible without JS or with reduced motion. */
const RULES: [string, "up" | "left" | "right" | "zoom", boolean?][] = [
  [".section-head", "up"],
  [".page-head .wrap > *", "up", true],
  [".path-card", "zoom", true],
  [".grid .card", "up", true],
  [".map-list .card", "up", true],
  [".town", "zoom", true],
  [".split > :first-child", "left"],
  [".split > :last-child", "right"],
  [".agent-row", "up", true],
  [".process-col", "up", true],
  [".sell-contact .cov-inner", "up"],
  [".contact-card", "zoom"],
  [".detail .gallery", "left"],
  [".detail aside.side", "right"],
  [".detail .prose, .detail .featlist, .detail table.specs", "up"],
  [".foot-pills, .foot-links", "up"],
  [".v2rule-head, .v2lede", "up"],
  [".v2exp-card", "zoom", true],
  [".v2next-img", "left"],
  [".v2next-copy", "right"],
  [".v2approach-col", "up", true],
  [".inv-card", "up", true],
  [".profile-side", "left"],
  [".profile-body", "right"],
];

export default function ScrollReveal() {
  const path = usePathname();
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) return;
    const root = document.documentElement;
    root.classList.add("reveal-ready");
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }),
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 }
    );
    const raf = requestAnimationFrame(() => {
      for (const [sel, kind, stagger] of RULES) {
        const groups = new Map<Element | null, number>();
        document.querySelectorAll<HTMLElement>(sel).forEach((el) => {
          if (el.closest(".hdr, .menu-ov, .contact-ov, .msg-dialog, .hero, .v2hero") || el.dataset.reveal) return;
          el.dataset.reveal = kind;
          if (stagger) {
            const n = groups.get(el.parentElement) ?? 0;
            groups.set(el.parentElement, n + 1);
            el.style.transitionDelay = `${Math.min(n, 6) * 90}ms`;
          }
          io.observe(el);
        });
      }
    });
    return () => { cancelAnimationFrame(raf); io.disconnect(); };
  }, [path]);
  return null;
}
