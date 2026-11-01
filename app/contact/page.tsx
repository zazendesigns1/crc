import type { Metadata } from "next";
import LeadForm from "@/components/LeadForm";
import AgentCard from "@/components/AgentCard";
import { BROKERAGE } from "@/lib/listings";

export const metadata: Metadata = { title: "Contact", description: "Call, email, or send Michele a note about buying or selling in Washington County." };

export default function Contact() {
  return (
    <>
      <div className="page-head"><div className="wrap">
        <div className="eyebrow">Contact</div>
        <h1>Let&apos;s talk about your move</h1>
        <p>Call, email, or send a note below. Michele usually replies the same day.</p>
      </div></div>
      <section className="band"><div className="wrap split" style={{ alignItems: "start" }}>
        <div className="box">
          <AgentCard sub="Broker/Owner, Charlotte Realty Group" />
          <div><div className="small">Phone</div><a href={BROKERAGE.phoneHref}>{BROKERAGE.phone}</a></div>
          <div><div className="small">Email</div><a href={`mailto:${BROKERAGE.email}`}>{BROKERAGE.email}</a></div>
          <div><div className="small">Office hours</div>Mon–Sat, 9am–6pm · Showings by appointment</div>
        </div>
        <LeadForm submitLabel="Send message" thanks="Thanks! This preview doesn't send messages yet. On the live site, this will go straight to Michele's inbox.">
          <h3 style={{ fontSize: "1.5rem" }}>Send a message</h3>
          <div className="field"><label htmlFor="cName">Name</label><input id="cName" required /></div>
          <div className="field"><label htmlFor="cEmail">Email or phone</label><input id="cEmail" required /></div>
          <div className="field"><label htmlFor="cWhat">I&apos;m interested in</label><select id="cWhat"><option>Buying</option><option>Selling</option><option>Both</option><option>Land or acreage</option></select></div>
          <div className="field"><label htmlFor="cMsg">Message</label><textarea id="cMsg" rows={4} /></div>
        </LeadForm>
      </div></section>
    </>
  );
}
