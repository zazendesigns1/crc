"use client";
import { useCallback, useEffect, useRef, useState } from "react";

/* PLACEHOLDER testimonials: replace with real client reviews from Michele before launch. */
const ITEMS = [
  { quote: "Michele caught an easement issue in the title work that would have cost us dearly. Having a broker with her legal background made all the difference.", name: "[Client name]", detail: "Bought a home in Saratoga Springs" },
  { quote: "Billy understood exactly what we needed for our horses, from the barn and fencing to the footing in the arena. He spoke our language.", name: "[Client name]", detail: "Bought a horse farm in Greenwich" },
  { quote: "Scott walked the property with us and pointed out things we never would have noticed. We went into the inspection knowing exactly what to ask.", name: "[Client name]", detail: "Bought a home in Cambridge" },
  { quote: "They priced our family's land thoughtfully and handled every detail of a complicated sale. We felt looked after from the first call to the closing.", name: "[Client name]", detail: "Sold land in Salem" },
];

export default function Testimonials() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const startX = useRef<number | null>(null);
  const n = ITEMS.length;
  const go = useCallback((d: number) => setI((v) => (v + d + n) % n), [n]);

  useEffect(() => {
    if (paused) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const t = setTimeout(() => go(1), 7000);
    return () => clearTimeout(t);
  }, [i, paused, go]);

  return (
    <section className="band testi" aria-roledescription="carousel" aria-label="Client testimonials"
      onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <div className="wrap testi-inner">
        <div className="eyebrow">In our clients&apos; words</div>
        <svg className="testi-mark" width="56" height="44" viewBox="0 0 56 44" aria-hidden="true"><path fill="currentColor" d="M0 44V27C0 12.5 7.6 3.3 22.6 0l2.6 5.4C17.7 8 13.7 12.6 13 19.5h10.3V44H0zm30.8 0V27C30.8 12.5 38.4 3.3 53.4 0L56 5.4C48.5 8 44.5 12.6 43.8 19.5h10.3V44H30.8z"/></svg>
        <div className="testi-stage"
          onTouchStart={(e) => { startX.current = e.touches[0].clientX; }}
          onTouchEnd={(e) => { if (startX.current === null) return; const dx = e.changedTouches[0].clientX - startX.current; if (Math.abs(dx) > 40) go(dx < 0 ? 1 : -1); startX.current = null; }}>
          {ITEMS.map((t, k) => (
            <figure key={k} className={`testi-slide${k === i ? " on" : ""}`} aria-hidden={k !== i} role="group" aria-roledescription="slide" aria-label={`${k + 1} of ${n}`}>
              <blockquote>{t.quote}</blockquote>
              <figcaption><b>{t.name}</b><span>{t.detail}</span></figcaption>
            </figure>
          ))}
        </div>
        <div className="testi-nav">
          <button type="button" className="testi-arrow" onClick={() => go(-1)} aria-label="Previous testimonial">←</button>
          <div className="testi-dots">
            {ITEMS.map((_, k) => (
              <button key={k} type="button" className={`testi-dot${k === i ? " on" : ""}`} onClick={() => setI(k)} aria-label={`Show testimonial ${k + 1}`} aria-current={k === i}>
                <span style={k === i && !paused ? { animationDuration: "7s" } : undefined} />
              </button>
            ))}
          </div>
          <button type="button" className="testi-arrow" onClick={() => go(1)} aria-label="Next testimonial">→</button>
        </div>
      </div>
    </section>
  );
}
