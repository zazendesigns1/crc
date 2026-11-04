import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AGENTS, getAgent } from "@/lib/agents";
import MessageAgent from "@/components/MessageAgent";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return AGENTS.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const a = getAgent((await params).slug);
  return a ? { title: `${a.name}, ${a.title.replace(" | ", ", ")}`, description: a.bio } : {};
}

export default async function AgentProfile({ params }: Props) {
  const a = getAgent((await params).slug);
  if (!a) notFound();
  return (
    <>
      <div className="wrap crumbs"><Link href="/agents" style={{ fontWeight: 700, textDecoration: "none" }}>← Our team</Link></div>
      <section className="band profile">
        <div className="wrap profile-grid">
          <aside className="profile-side">
            <div className="profile-photo"><Image src={a.photo} alt={a.name} fill sizes="320px" style={{ objectFit: "cover", objectPosition: "50% 25%" }} priority /></div>
            <div className="profile-contact">
              <a href={a.phoneHref}>{a.phone}</a>
              <a href={`mailto:${a.email}`}>{a.email}</a>
              {a.license && <span>{a.license}</span>}
            </div>
            <MessageAgent name={a.name} photo={a.photo} title={a.title} className="btn profile-msg" />
          </aside>
          <article className="profile-body">
            <h1>{a.name}</h1>
            <div className="agent-title">{a.title}</div>
            <p className="profile-headline">{a.headline}</p>
            {a.story.map((p, i) => <p key={i}>{p}</p>)}
            {a.beyond && (<><h2>Beyond Real Estate</h2><p className="profile-placeholder">{a.beyond}</p></>)}
            <h2>Experience</h2>
            <ul className="brings">{a.highlights.map((h) => <li key={h}>{h}</li>)}</ul>
          </article>
        </div>
      </section>
    </>
  );
}
