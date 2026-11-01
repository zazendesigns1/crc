import Link from "next/link";
import Image from "next/image";
import HeroSearch from "@/components/HeroSearch";
import ListingCard from "@/components/ListingCard";
import { getListings, TOWNS, money, PLACEHOLDER_PHOTO } from "@/lib/listings";

export default function Home() {
  const all = getListings();
  const ours = all.filter((l) => l.ours);
  return (
    <>
      <section className="hero">
        <div className="bg"><Image src={PLACEHOLDER_PHOTO} alt="" fill priority sizes="100vw" style={{ objectFit: "cover", objectPosition: "70% 50%" }} /></div>
        <div className="wrap">
          <div className="hero-inner">
            <div className="eyebrow">Washington County · Battenkill Valley · Upstate New York</div>
            <h1>Find your place in the country.</h1>
            <p className="lede">Farmhouses, acreage and village homes along the Battenkill, with a local broker who knows every back road.</p>
            <HeroSearch />
            <div className="stats">
              <div><b className="num">{all.filter((l) => l.status !== "Pending").length}</b>active listings</div>
              <div><b className="num">{TOWNS.length}</b>towns covered</div>
              <div><b className="num">{ours.length}</b>listed by CRG</div>
            </div>
          </div>
        </div>
      </section>

      <section className="band">
        <div className="wrap">
          <div className="section-head">
            <div><div className="eyebrow">Our listings</div><h2>Featured properties</h2><p>Homes and land listed by Charlotte Realty Group.</p></div>
            <Link className="btn ghost" href="/search">See all homes</Link>
          </div>
          <div className="grid">{ours.map((l) => <ListingCard key={l.id} l={l} />)}</div>
        </div>
      </section>

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
            <div><Link className="btn gold" href="/sell">Request a home valuation</Link></div>
          </div>
          <div className="panel" style={{ background: "transparent", borderColor: "transparent" }}>
            <p className="quote">“A small brokerage, on purpose. When you call, you get Michele. Every showing, every offer, every closing.”</p>
            <div className="small">Michele, Broker/Owner</div>
          </div>
        </div>
      </section>
    </>
  );
}
