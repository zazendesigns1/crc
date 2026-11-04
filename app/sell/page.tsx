import type { Metadata } from "next";
import SellContact from "@/components/SellContact";
import SellSections from "@/components/SellSections";

export const metadata: Metadata = { title: "Home Valuation", description: "Request a free market analysis of your home or property." };



export default function Sell() {
  return (
    <>
      <div className="page-head agents-head"><div className="wrap">
        <div className="eyebrow">Sell with Charlotte Realty Group</div>
        <h1>Our Selling Process</h1>
        <p>Three stages, one local team, start to finish.</p>
      </div></div>
      <SellSections />
      <SellContact />
    </>
  );
}
