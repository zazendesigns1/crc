import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { AGENTS } from "@/lib/agents";
import MessageAgent from "@/components/MessageAgent";
import { TOWNS } from "@/lib/listings";

export const metadata: Metadata = {
  title: "Our Agents",
  description: "Meet the agents of Charlotte Realty Group, a boutique brokerage serving Washington County and the Battenkill Valley.",
};

const PhoneIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z" /></svg>
);
const MailIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m2 6 10 7 10-7" /></svg>
);

export default function Agents() {
  return (
    <>
      <div className="page-head agents-head"><div className="wrap">
        <div className="eyebrow">Charlotte Realty Group</div>
        <h1>Meet Our Agents</h1>
        <p>Three specialists, not three generalists. A real estate attorney, an equestrian professional and a hands-on property expert, all working for you.</p>
      </div></div>

      <section className="band team-intro">
        <div className="wrap split">
          <div className="photo-frame"><Image src="/team.webp" alt="The Charlotte Realty Group team in front of a home for sale" fill sizes="(max-width: 820px) 100vw, 560px" style={{ objectFit: "cover", objectPosition: "50% 30%" }} /></div>
          <div className="prose" style={{ display: "grid", gap: 4 }}>
            <div className="eyebrow">What each of us brings</div>
            <h2 style={{ fontSize: "2rem", marginBottom: 10 }}>Country real estate has its own questions</h2>
            <p>Most agents get their license from a short online course. Our team brings decades of experience from the fields that matter most when you buy or sell in the country.</p>
            <ul className="brings">
              <li><strong>The legal side.</strong> 30 years practicing real estate law: contracts, title, easements and zoning.</li>
              <li><strong>Horse properties.</strong> A trainer who works at the region&apos;s major horse farms and knows the buyers.</li>
              <li><strong>The property itself.</strong> A mechanic&apos;s eye for construction, barns, outbuildings and systems.</li>
            </ul>
            <p style={{ color: "var(--muted)" }}>Serving {TOWNS.join(", ")}.</p>
            <div><Link className="btn ghost" href="/search">Browse listings</Link></div>
          </div>
        </div>
      </section>

      <section className="band">
        <div className="wrap">
          <div className="agent-list">
            {AGENTS.map((a) => (
              <article className="agent-row" key={a.slug} id={a.slug}>
                <div className="agent-avatar"><Image src={a.photo} alt={a.name} width={128} height={128} /></div>
                <div className="agent-id">
                  <h2>{a.name}</h2>
                  <div className="agent-title">{a.title}</div>
                  {a.license && <div className="agent-lic">{a.license}</div>}
                  <span className="agent-tag">{a.specialty}</span>
                </div>
                <p className="agent-bio">{a.bio}</p>
                <div className="agent-contact-col">
                  <a href={a.phoneHref}><PhoneIcon />{a.phone}</a>
                  <a href={`mailto:${a.email}`}><MailIcon />{a.email}</a>
                  <MessageAgent name={a.name} photo={a.photo} title={a.title} />
                </div>

              </article>
            ))}
          </div>
        </div>
      </section>


    </>
  );
}
