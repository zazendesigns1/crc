import Link from "next/link";
import Image from "next/image";
import HeroSearch from "@/components/HeroSearch";
import ExpertiseCards from "@/components/ExpertiseCards";
import NextBand from "@/components/NextBand";
import TeamInterlude from "@/components/TeamInterlude";
import Testimonials from "@/components/Testimonials";
import ListingCard from "@/components/ListingCard";
import { getListings, TOWNS, money, PLACEHOLDER_PHOTO } from "@/lib/listings";

export default function Home() {
  const all = getListings();
  const ours = all.filter((l) => l.ours);
  return (
    <>
      <section className="hero">
        <div className="bg"><Image src="/hero-estate.webp" alt="" fill priority sizes="100vw" style={{ objectFit: "cover", objectPosition: "80% 60%" }} /></div>
        <div className="wrap">
          <div className="hero-inner">
            <div className="hero-title">
              <h1 className="eyebrow">Capital District &amp; Southern Adirondack Real Estate</h1>
            <p className="hero-h">Real estate.<br /><em>Informed by<br />experience.</em></p>
            </div>
            <p className="lede">Distinguished residences, equestrian estates, investment property and land, represented by a team of three specialists who understand what&apos;s at stake.</p>
            <HeroSearch />
            <div className="stats">
              <div><b className="num">{all.filter((l) => l.status !== "Pending").length}</b>active listings</div>
              <div><b className="num">{TOWNS.length}</b>towns covered</div>
              <div><b className="num">{ours.length}</b>listed by CRG</div>
            </div>
          </div>
        </div>
      </section>

      <ExpertiseCards />

      <TeamInterlude />

      <section className="band">
        <div className="wrap">
          <div className="section-head">
            <div><div className="eyebrow">Our listings</div><h2>Featured properties</h2><p>Homes and land listed by Charlotte Realty Group.</p></div>
            <Link className="btn ghost" href="/search">See all homes</Link>
          </div>
          <div className="grid grid-4">{ours.map((l) => <ListingCard key={l.id} l={l} />)}</div>
        </div>
      </section>

      <Testimonials />

      <NextBand />

      <section className="band" style={{ background: "var(--paper)", borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)" }}>
        <div className="wrap">
          <div className="section-head"><div><div className="eyebrow">Explore by town</div><h2>Where would you like to live?</h2></div></div>
          <div className="towns">
            {TOWNS.map((t) => {
              const n = all.filter((l) => l.town === t);
              const lo = Math.min(...n.map((l) => l.price));
              return (
                <Link key={t} className="town" href={`/search?town=${encodeURIComponent(t)}`}>
                  <strong>{t}</strong>
                  <span>{n.length} listing{n.length === 1 ? "" : "s"}{n.length ? ` · from ${money(lo)}` : ""}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="band">
        <div className="wrap split">
          <div className="panel">
            <div className="eyebrow">Thinking of selling?</div>
            <h2 style={{ fontSize: "2rem" }}>Find out what your home is worth</h2>
            <p style={{ margin: 0, color: "var(--muted)" }}>Get a free, no-obligation market analysis based on recent sales in your town, not a website&apos;s guess.</p>
            <div><Link className="btn ghost" href="/sell">Request a home valuation</Link></div>
          </div>
          <div className="panel" style={{ background: "transparent", borderColor: "transparent", padding: 0 }}>
            <div className="photo-frame"><Image src="/team.webp" alt="The Charlotte Realty Group team in front of a home for sale" fill sizes="(max-width: 820px) 100vw, 560px" style={{ objectFit: "cover", objectPosition: "50% 30%" }} /></div>
            <p className="quote">“Real estate is more than a transaction. It&apos;s an investment, a way of life, and often a&nbsp;legacy.”</p>
            <div className="small quote-by">The Charlotte Realty Group team</div>
          </div>
        </div>
      </section>
    </>
  );
}
