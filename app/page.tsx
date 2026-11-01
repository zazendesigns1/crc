import Link from "next/link";
import Image from "next/image";
import HeroSearch from "@/components/HeroSearch";
import PathCards from "@/components/PathCards";
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
            <div className="hero-title">
              <h1 className="eyebrow"><span className="seg-txt">Washington County ·</span> <span className="seg-txt">Battenkill Valley ·</span> <span className="seg-txt">Upstate New York Real Estate</span></h1>
            <p className="hero-h">Find your place in the country.</p>
            </div>
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

      <PathCards />

      <section className="band" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="section-head">
            <div><div className="eyebrow">Our listings</div><h2>Featured properties</h2><p>Homes and land listed by Charlotte Realty Group.</p></div>
            <Link className="btn ghost" href="/search">See all homes</Link>
          </div>
          <div className="grid grid-4">{ours.map((l) => <ListingCard key={l.id} l={l} />)}</div>
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
            <div><Link className="btn ghost" href="/sell">Request a home valuation</Link></div>
          </div>
          <div className="panel" style={{ background: "transparent", borderColor: "transparent", padding: 0 }}>
            <div className="photo-frame"><Image src="/team-photo.webp" alt="The Charlotte Realty Group team in front of a home for sale" fill sizes="(max-width: 820px) 100vw, 560px" style={{ objectFit: "cover", objectPosition: "50% 22%" }} /></div>
            <p className="quote">“A small brokerage, on purpose. When you call, you get one of us. Every showing, every offer, every closing.”</p>
            <div className="small">The Charlotte Realty Group team</div>
          </div>
        </div>
      </section>
    </>
  );
}
