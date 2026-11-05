import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import NextBand from "@/components/NextBand";

export const metadata: Metadata = { title: "Areas of Expertise", description: "Distinguished residences, equestrian estates, investment real estate, and land and legacy properties across the Capital District and Southern Adirondacks." };

const AREAS = [
  { title: "Distinguished Residences", img: "/exp-residences.webp", href: "/search?type=House", text: "Exceptional homes, luxury estates and properties defined by character, craftsmanship and setting. We help buyers look past the staging to what matters, and help sellers present a home the way it deserves." },
  { title: "Equestrian Estates", img: "/exp-equestrian-2.webp", href: "/search?type=Farm", text: "Horse farms, training facilities and country properties, represented by people who understand the lifestyle: pasture and footing, fencing, barns, water, riding facilities and the realities of daily care." },
  { title: "Investment Real Estate", img: "/exp-investment.webp", href: "/search?type=Multi-family", text: "Multifamily properties, income-producing assets and strategic acquisitions, with an eye on title, ownership structure and the details that shape long-term value." },
  { title: "Land & Legacy Properties", img: "/exp-land.webp", href: "/search?type=Land", text: "Expansive acreage, recreational land and rural estates with lasting potential, including the questions buyers should ask about surveys, access, zoning and use before they commit." },
];

export default function Expertise() {
  return (
    <>
      <div className="page-head agents-head"><div className="wrap">
        <div className="eyebrow">Our areas of expertise</div>
        <h1>Exceptional properties. Distinctive perspectives.</h1>
        <p>Real estate law, equestrian expertise and a technical eye for how properties are built: we focus on the properties where experience matters most.</p>
      </div></div>

      <section className="band">
        <div className="wrap area-list">
          {AREAS.map((a, i) => (
            <article key={a.title} className={`area-row${i % 2 ? " flip" : ""}`}>
              <div className="area-img"><Image src={a.img} alt="" fill sizes="(max-width: 820px) 100vw, 560px" style={{ objectFit: "cover" }} /></div>
              <div className="area-copy">
                <h2>{a.title}</h2>
                <p>{a.text}</p>
                <div><Link href={a.href} className="btn ghost">View properties <span aria-hidden="true">→</span></Link></div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <NextBand />
    </>
  );
}
