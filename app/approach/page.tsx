import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import ApproachCols from "@/components/ApproachCols";
import NextBand from "@/components/NextBand";

export const metadata: Metadata = { title: "Our Approach", description: "Informed. Considered. Personal. How Charlotte Realty Group represents buyers and sellers across the Capital District and Southern Adirondacks." };

export default function Approach() {
  return (
    <>
      <div className="page-head agents-head"><div className="wrap">
        <div className="eyebrow">Our approach</div>
        <h1>Informed. Considered. Personal.</h1>
        <p>We believe great real estate representation is built on three principles.</p>
      </div></div>

      <section className="band approach-band"><div className="wrap"><ApproachCols /></div></section>

      <section className="band">
        <div className="wrap split">
          <div className="photo-frame"><Image src="/team.webp" alt="The Charlotte Realty Group team" fill sizes="(max-width: 820px) 100vw, 560px" style={{ objectFit: "cover", objectPosition: "50% 30%" }} /></div>
          <div className="v2team">
            <div className="eyebrow">A different perspective</div>
            <h2>Experience that extends beyond the transaction.</h2>
            <p>Real estate is more than a property. It&apos;s an investment, a way of life and often a legacy. We start with the bigger picture: your goals, the property and the details that can make or break a deal.</p>
            <p>Whether you&apos;re buying a distinctive home, investing in income property or moving on from a long-held asset, you get a more considered approach to representation.</p>
            <div><Link href="/agents" className="btn">Meet our team</Link></div>
          </div>
        </div>
      </section>

      <NextBand />
    </>
  );
}
