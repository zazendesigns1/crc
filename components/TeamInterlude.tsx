import Link from "next/link";
import Image from "next/image";
import { AGENTS } from "@/lib/agents";

const ROLE: Record<string, string> = {
  michele: "Real estate law",
  billy: "Equestrian & land",
  scott: "Technical eye",
};

export default function TeamInterlude() {
  return (
    <section className="team-int">
      <div className="wrap team-int-inner">
        <div className="team-int-copy">
          <div className="eyebrow">The people behind every move</div>
          <h2>Three specialists.<br /><em>One conversation.</em></h2>
          <p>Real estate law, a lifetime in the equestrian world and a mechanic&apos;s eye for how things are built, all working together on your purchase or sale.</p>
          <Link href="/agents" className="btn team-int-btn">Meet the team <span aria-hidden="true">→</span></Link>
        </div>
        <div className="team-int-arches">
          {AGENTS.map((a) => (
            <Link key={a.slug} href={`/agents/${a.slug}`} className="arch">
              <span className="arch-frame">
                <Image src={a.portrait} alt={a.name} fill sizes="(max-width: 820px) 30vw, 220px" quality={85} style={{ objectFit: "cover", objectPosition: "50% 18%" }} />
              </span>
              <span className="arch-name">{a.firstName}</span>
              <span className="arch-role">{ROLE[a.slug] ?? a.specialty}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
