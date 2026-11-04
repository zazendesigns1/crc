import Link from "next/link";
import Image from "next/image";

const CARDS = [
  { title: "Distinguished Residences", text: "Exceptional homes defined by character, craftsmanship and setting.", img: "/exp-residences.webp", href: "/search?type=House" },
  { title: "Equestrian Estates", text: "Horse farms and equestrian facilities, represented by people who know the lifestyle.", img: "/exp-equestrian.webp", href: "/search?type=Farm" },
  { title: "Investment Real Estate", text: "Multifamily and income-producing property for investors who value informed advice.", img: "/exp-investment.webp", href: "/search?type=Multi-family" },
  { title: "Land & Legacy Properties", text: "Expansive acreage, recreational land and rural estates with lasting potential.", img: "/exp-land.webp", href: "/search?type=Land" },
];

export default function ExpertiseCards() {
  return (
    <section className="band expertise" id="expertise">
      <div className="wrap">
        <div className="exp-head">
          <div className="eyebrow">Our areas of expertise</div>
          <h2>A different perspective on real estate</h2>
          <p>Thirty years of real estate legal experience, a lifelong connection to the equestrian world and a licensed aircraft mechanic&apos;s technical eye: three perspectives, one boutique approach to real estate.</p>
        </div>
        <div className="exp-grid">
          {CARDS.map((c) => (
            <Link key={c.title} href={c.href} className="exp-card">
              <span className="exp-img"><Image src={c.img} alt="" fill sizes="(max-width: 600px) 100vw, (max-width: 1100px) 50vw, 300px" style={{ objectFit: "cover" }} /></span>
              <span className="exp-band">{c.title}</span>
              <span className="exp-body">
                <span className="exp-text">{c.text}</span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
