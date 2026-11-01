import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { AGENTS } from "@/lib/agents";
import { TOWNS } from "@/lib/listings";

export const metadata: Metadata = {
  title: "Our Agents",
  description: "Meet the agents of Charlotte Realty Group, a boutique brokerage serving Washington County and the Battenkill Valley.",
};

export default function Agents() {
  return (
    <>
      <div className="page-head"><div className="wrap">
        <div className="eyebrow">Our agents</div>
        <h1>Local agents who know every back road</h1>
        <p>Charlotte Realty Group is a small, independent brokerage. Every client works directly with one of our three agents, from the first showing to the closing table.</p>
      </div></div>

      <section className="band">
        <div className="wrap">
          <div className="agents">
            {AGENTS.map((a) => (
              <article className="agent-card" key={a.slug} id={a.slug}>
                <div className="agent-photo">
                  {a.photo ? (
                    <Image src={a.photo} alt={a.name} fill sizes="(max-width: 700px) 100vw, 380px" style={{ objectFit: "cover", objectPosition: "50% 20%" }} />
                  ) : (
                    <div className="agent-initials"><span>{a.initials}</span><small>Photo coming soon</small></div>
                  )}
                </div>
                <div className="agent-body">
                  <div className="eyebrow">{a.title}</div>
                  <h2>{a.name}</h2>
                  <p>{a.bio}</p>
                  <ul className="featlist">{a.focus.map((f) => <li key={f}>{f}</li>)}</ul>
                  <div className="agent-contact">
                    <a href={a.phoneHref}>{a.phone}</a>
                    <a href={`mailto:${a.email}`}>{a.email}</a>
                  </div>
                  <Link className="btn" href={`/contact?agent=${a.slug}`}>Contact {a.placeholder ? "this agent" : a.name}</Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="band" style={{ background: "var(--paper)", borderTop: "1px solid var(--line)" }}>
        <div className="wrap split">
          <div className="photo-frame"><Image src="/brand-photo.webp" alt="Charlotte Realty Group For Sale sign in front of a stone house" fill sizes="(max-width: 820px) 100vw, 560px" style={{ objectFit: "cover", objectPosition: "50% 30%" }} /></div>
          <div className="prose" style={{ display: "grid", gap: 4 }}>
            <div className="eyebrow">Why a small brokerage</div>
            <h2 style={{ fontSize: "2rem", marginBottom: 10 }}>Country real estate has its own questions</h2>
            <p>Wells and septic, right-to-farm, river frontage, Agricultural District rules, and which roads the plow reaches first. Our agents help you get clear answers before you make an offer.</p>
            <p style={{ color: "var(--muted)" }}>Serving {TOWNS.join(", ")}.</p>
            <div><Link className="btn ghost" href="/search">Browse listings</Link></div>
          </div>
        </div>
      </section>
    </>
  );
}
