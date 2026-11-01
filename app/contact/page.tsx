import type { Metadata } from "next";
import Image from "next/image";
import MessageAgent from "@/components/MessageAgent";
import { BROKERAGE } from "@/lib/listings";
import { AGENTS } from "@/lib/agents";

export const metadata: Metadata = { title: "Contact", description: "Call, email, or message a Charlotte Realty Group agent about buying or selling in Washington County." };

const Icon = ({ d }: { d: string }) => (
  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={d} /></svg>
);
const CHAT = "M4 4h16v11H9l-4 4v-4H4z";
const PEOPLE = "M9 11a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM2.5 20c0-3.6 2.9-6 6.5-6s6.5 2.4 6.5 6M16 4.3a3.5 3.5 0 0 1 0 6.4M18 14.3c2 .8 3.5 2.8 3.5 5.7";
const CLOCK = "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM12 7v5l3 2";

export default function Contact() {
  return (
    <section className="contact-wrap">
      <div className="wrap">
        <div className="contact-card">
          <h1>Contact Charlotte Realty Group</h1>
          <div className="c-block">
            <h2>Get in touch?</h2>
            <p>Reach the office, or message the agent who can help you best.</p>
          </div>

          <div className="c-block">
            <span className="c-icon"><Icon d={CHAT} /></span>
            <h2>Office</h2>
            <p>Buying, selling, or general questions.</p>
            <div className="c-lines">
              <a href={BROKERAGE.phoneHref}>{BROKERAGE.phone}</a>
              <a href={`mailto:${BROKERAGE.email}`}>{BROKERAGE.email}</a>
              <span>{BROKERAGE.office}</span>
            </div>
          </div>

          <div className="c-block">
            <span className="c-icon"><Icon d={PEOPLE} /></span>
            <h2>Our agents</h2>
            <p>Send a message straight to one of our agents.</p>
            <ul className="c-agents">
              {AGENTS.map((a) => (
                <li key={a.slug}>
                  <Image src={a.photo} alt="" width={48} height={48} />
                  <div><strong>{a.name}</strong><span>{a.title} · <a href={a.phoneHref}>{a.phone}</a></span></div>
                  <MessageAgent name={a.name} photo={a.photo} title={a.title} label="Message" className="btn ghost c-msg" />
                </li>
              ))}
            </ul>
          </div>

          <div className="c-block">
            <span className="c-icon"><Icon d={CLOCK} /></span>
            <h2>Office hours</h2>
            <p>Monday to Saturday, 9am to 6pm. Showings by appointment.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
