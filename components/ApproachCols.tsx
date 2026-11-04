import type { ReactNode } from "react";

/* Two-tone line icons: forest strokes with a gold accent */
const G = { stroke: "var(--gold)" };

const ICONS: Record<string, ReactNode> = {
  // Deed with a wax seal: three decades of real estate law
  Experience: (
    <>
      <path d="M11 6h18l8 8v21" />
      <path d="M29 6v8h8" />
      <path d="M11 6v34h14" />
      <path d="M16 16h8M16 21h14M16 26h9" />
      <circle cx="33" cy="34" r="5.5" {...G} />
      <path d="M30 39l-1.5 6 4.5-2.5 4.5 2.5L36 39" {...G} />
    </>
  ),
  // Lens over a roofline: understanding the property and the market
  Insight: (
    <>
      <circle cx="21" cy="21" r="13" />
      <path d="M30.5 30.5 41 41" strokeWidth="2.4" />
      <path d="M14 24l7-6 7 6" {...G} />
      <path d="M16.5 22v6h9v-6" {...G} />
    </>
  ),
  // Home with a keyhole door: trusted, one-to-one representation
  "Personal Representation": (
    <>
      <path d="M5 22 24 6l19 16" />
      <path d="M10 18v23h28V18" />
      <circle cx="24" cy="27" r="3.6" {...G} />
      <path d="M22.4 30.2 21 36h6l-1.4-5.8" {...G} />
    </>
  ),
};

/* Flaticon PNGs, tinted with the brand color via CSS mask */
const PNG: Record<string, string> = {
  "Personal Representation": "/icons/hand-keys.png",
};

const APPROACH = [
  { title: "Experience", text: "Three decades of real estate legal experience bring depth and perspective to every transaction." },
  { title: "Insight", text: "A clear understanding of the property, the market and what shapes ownership and value." },
  { title: "Personal Representation", text: "A boutique approach built on relationships, responsiveness and your goals." },
];

export default function ApproachCols() {
  return (
    <div className="v2approach-grid">
      {APPROACH.map((a) => (
        <div key={a.title} className="v2approach-col">
          {PNG[a.title] ? (
            <span className="v2approach-png" style={{ WebkitMaskImage: `url(${PNG[a.title]})`, maskImage: `url(${PNG[a.title]})` }} aria-hidden="true" />
          ) : <svg className="v2approach-svg" width="56" height="56" viewBox="0 0 48 48" fill="none" stroke="var(--forest)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{ICONS[a.title]}</svg>}
          <h3>{a.title}</h3>
          <p>{a.text}</p>
        </div>
      ))}
    </div>
  );
}
