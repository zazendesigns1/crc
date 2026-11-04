import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { AGENTS } from "@/lib/agents";
import MessageAgent from "@/components/MessageAgent";

export const metadata: Metadata = {
  title: "About Us",
  description: "Meet Michele Anderson, Billy Smith and Scott Morrissey of Charlotte Realty Group, a boutique brokerage serving the Capital District and Southern Adirondacks.",
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
        <div className="eyebrow">About Charlotte Realty Group</div>
        <h1>Meet Our Team</h1>
        <p>Experience. Expertise. Local knowledge.</p>
      </div></div>

      <section className="band team-intro">
        <div className="wrap split">
          <div className="photo-frame"><Image src="/team.webp" alt="The Charlotte Realty Group team" fill sizes="(max-width: 820px) 100vw, 560px" style={{ objectFit: "cover", objectPosition: "50% 30%" }} /></div>
          <div className="prose" style={{ display: "grid", gap: 4 }}>
            <div className="eyebrow">What we bring</div>
            <h2 style={{ fontSize: "2rem", marginBottom: 10 }}>Experience that extends beyond the transaction.</h2>
            <p>Real estate is more than a property. It&apos;s an investment, a way of life and often a legacy. Charlotte Realty Group brings together professional experience, specialized knowledge and established local relationships.</p>
            <ul className="brings">
              <li><strong>The legal perspective.</strong> 30 years practicing real estate law: contracts, title, ownership structures and due diligence.</li>
              <li><strong>The equestrian world.</strong> A lifelong connection to the horse community, with an authentic understanding of horse properties, land and the rural lifestyle.</li>
              <li><strong>The technical eye.</strong> A licensed aircraft mechanic&apos;s precision and understanding of how things are built and how they work.</li>
            </ul>
            <div><Link className="btn ghost" href="/search">Explore properties</Link></div>
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
                <div className="agent-bio">
                  <p style={{ margin: 0 }}>{a.bio}</p>
                  <Link href={`/agents/${a.slug}`} className="agent-more">Read {a.firstName}&apos;s story <span aria-hidden="true">→</span></Link>
                </div>
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
