import Link from "next/link";
import Image from "next/image";
import ListingCard from "@/components/ListingCard";
import ContactPanel from "@/components/ContactPanel";
import { getListings } from "@/lib/listings";

const EXPERTISE = [
  { title: "Distinguished Residences", text: "Exceptional homes defined by character, craftsmanship and setting.", img: "/v2-exp-1-hd.webp", href: "/search?type=House" },
  { title: "Equestrian Estates", text: "Horse farms and equestrian facilities, represented by people who know the lifestyle.", img: "/v2-exp-2-hd.webp", href: "/search?type=Farm" },
  { title: "Investment Real Estate", text: "Multifamily and income-producing property for investors who value informed advice.", img: "/v2-exp-3-hd.webp", href: "/search?type=Multi-family" },
  { title: "Land & Legacy Properties", text: "Expansive acreage, recreational land and rural estates with lasting potential.", img: "/v2-exp-4-hd.webp", href: "/search?type=Land" },
];

const APPROACH = [
  { title: "Experience", text: "Three decades of real estate legal experience bring depth and perspective to every transaction.", d: "M12 3 4 7v5c0 4.4 3.4 8.3 8 9 4.6-.7 8-4.6 8-9V7l-8-4zM9 12l2 2 4-4" },
  { title: "Insight", text: "A clear understanding of the property, the market and what shapes ownership and value.", d: "M2.5 12s3.5-7 9.5-7 9.5 7 9.5 7-3.5 7-9.5 7-9.5-7-9.5-7zM12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" },
  { title: "Personal Representation", text: "A boutique approach built on relationships, responsiveness and your goals.", d: "M8 11a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM2 20c0-3.3 2.7-5.5 6-5.5s6 2.2 6 5.5M16 4.3a3.5 3.5 0 0 1 0 6.4M18 14.5c2 .8 4 2.5 4 5.5" },
];

export default function Home() {
  const featured = getListings().filter((l) => l.ours);
  return (
    <>
      <section className="v2hero">
        <div className="v2hero-bg"><Image src="/v2-hero-hd.webp" alt="" fill priority sizes="100vw" style={{ objectFit: "cover", objectPosition: "100% 60%" }} /></div>
        <div className="wrap v2hero-inner">
          <h1 className="eyebrow">Capital District &amp; Southern Adirondack Real Estate</h1>
          <p className="v2hero-h">Real Estate.<br />Informed by <em>Experience.</em></p>
          <span className="v2hero-rule" aria-hidden="true" />
          <p className="v2hero-sub">Exceptional properties. Thoughtful representation.<br />A more informed approach to real estate.</p>
          <div className="v2hero-btns">
            <Link href="/search" className="btn v2btn-solid">Explore Properties <span aria-hidden="true">→</span></Link>
            <Link href="/agents" className="btn v2btn-line">Meet Our Team</Link>
          </div>
        </div>
      </section>

      <section className="band v2perspective" id="expertise">
        <div className="wrap">
          <div className="v2rule-head">
            <h2>A Different Perspective on Real Estate</h2>
          </div>
          <p className="v2lede">With 30 years of real estate legal experience, a deep understanding of investment property and a lifelong connection to the equestrian world, Charlotte Realty Group offers a boutique approach to real estate.</p>
          <div className="v2exp">
            {EXPERTISE.map((e) => (
              <Link key={e.title} href={e.href} className="v2exp-card">
                <span className="v2exp-img"><Image src={e.img} alt="" fill sizes="(max-width: 700px) 100vw, 300px" style={{ objectFit: "cover" }} /></span>
                <span className="v2exp-label">{e.title}</span>
                <span className="v2exp-text">{e.text}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="band" style={{ paddingTop: 24 }}>
        <div className="wrap">
          <div className="section-head">
            <div><div className="eyebrow">Our listings</div><h2>Featured Properties</h2><p>Homes, farms and land listed by Charlotte Realty Group.</p></div>
            <Link className="btn ghost" href="/search">Search all properties</Link>
          </div>
          <div className="grid grid-4">{featured.map((l) => <ListingCard key={l.id} l={l} />)}</div>
        </div>
      </section>

      <section className="v2next">
        <div className="v2next-img"><Image src="/v2-compass.webp" alt="" fill sizes="(max-width: 820px) 100vw, 50vw" style={{ objectFit: "cover" }} /></div>
        <div className="v2next-copy">
          <div className="eyebrow">When it&apos;s time for what&apos;s next</div>
          <h2>Your real estate journey doesn&apos;t end at the closing.</h2>
          <p>Whether you&apos;re selling a long-held property, repositioning your holdings or exploring new investments, we can help you find the right next step, including Section 1031 exchanges and connections to the right tax, legal and investment professionals.</p>
          <p className="v2next-tag"><em>Thoughtful strategies. Seamless transitions.</em></p>
          <div><Link href="/investment" className="btn ghost">Investment &amp; transition strategies <span aria-hidden="true">→</span></Link></div>
        </div>
      </section>

      <section className="band v2approach" id="approach">
        <div className="wrap">
          <div className="v2rule-head"><h2>Our Approach</h2></div>
          <p className="v2lede">Informed. Considered. Personal.</p>
          <div className="v2approach-grid">
            {APPROACH.map((a) => (
              <div key={a.title} className="v2approach-col">
                <span className="v2approach-icon"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={a.d} /></svg></span>
                <h3>{a.title}</h3>
                <p>{a.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="band">
        <div className="wrap split">
          <div className="photo-frame"><Image src="/team.webp" alt="The Charlotte Realty Group team" fill sizes="(max-width: 820px) 100vw, 560px" style={{ objectFit: "cover", objectPosition: "50% 30%" }} /></div>
          <div className="v2team">
            <div className="eyebrow">Meet Charlotte Realty Group</div>
            <h2>Experience and local knowledge, together.</h2>
            <p><strong>Michele Anderson</strong> brings 30 years of real estate legal experience and a deep understanding of how transactions work.</p>
            <p><strong>Billy Smith</strong> brings an established local reputation, a lifetime in the equestrian world and real roots in the horse and land community.</p>
            <div><Link href="/agents" className="btn">Meet Michele &amp; Billy</Link></div>
          </div>
        </div>
      </section>

      <section className="sell-contact v2close">
        <div className="cov-inner">
          <div className="eyebrow" style={{ color: "var(--gold)", marginBottom: 10 }}>A more informed real estate experience</div>
          <ContactPanel heading="Let's begin a conversation." />
        </div>
      </section>
    </>
  );
}
