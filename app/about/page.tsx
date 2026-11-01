import Link from "next/link";
import type { Metadata } from "next";
import AgentCard from "@/components/AgentCard";
import { BROKERAGE, TOWNS } from "@/lib/listings";

export const metadata: Metadata = { title: "About", description: "Charlotte Realty Group is a boutique, independent brokerage serving Washington County and the Battenkill Valley." };

export default function About() {
  return (
    <>
      <div className="page-head"><div className="wrap">
        <div className="eyebrow">About us</div>
        <h1>A small brokerage, by design</h1>
        <p>Charlotte Realty Group is a boutique, independent brokerage serving Washington County and the Battenkill Valley.</p>
      </div></div>
      <section className="band"><div className="wrap split" style={{ alignItems: "start" }}>
        <div className="prose">
          <p>[Placeholder bio. Michele can tell her story here: how long she&apos;s lived in the area, her background in real estate and hospitality, and why she opened her own brokerage.]</p>
          <p>Buying land or a farmhouse out here comes with questions you won&apos;t get in a subdivision: wells and septic, right-to-farm, river frontage, Agricultural District rules, and which roads the plow reaches first. We help you get clear answers before you make an offer.</p>
          <p>Whether you&apos;re relocating from the city, moving up the road, or selling the family place, you&apos;ll work directly with the broker from the first call to the closing table.</p>
        </div>
        <div className="box">
          <AgentCard sub="Licensed Real Estate Broker, Owner" />
          <table className="specs" style={{ border: 0 }}><tbody>
            <tr><th>Phone</th><td>{BROKERAGE.phone}</td></tr>
            <tr><th>Email</th><td>{BROKERAGE.email}</td></tr>
            <tr><th>Office</th><td>{BROKERAGE.office}</td></tr>
            <tr><th>Serving</th><td>{TOWNS.join(", ")}</td></tr>
          </tbody></table>
          <Link className="btn" href="/contact">Get in touch</Link>
        </div>
      </div></section>
    </>
  );
}
