import type { Metadata } from "next";
import ValuationSubmit from "@/components/ValuationSubmit";
import SellSections from "@/components/SellSections";

export const metadata: Metadata = { title: "Home Valuation", description: "Request a free market analysis of your Washington County home." };



export default function Sell() {
  return (
    <>
      <div className="page-head agents-head"><div className="wrap">
        <div className="eyebrow">Sell with Charlotte Realty Group</div>
        <h1>What is your home worth?</h1>
        <p>Get a free market analysis based on recent sales near you, plus a selling plan built around your property.</p>
      </div></div>
      <SellSections />
      <section className="contact-wrap valuation-wrap" id="valuation">
        <div className="wrap">
          <div className="contact-card">
            <h2 className="val-title">Request a free valuation</h2>
            <p className="val-sub">Tell us about your property and we&apos;ll send a market analysis based on recent sales near you.</p>
            <form className="cf" id="valForm">
              <div className="field"><label htmlFor="sAddr">Property address</label><input id="sAddr" required placeholder="Street, town" /></div>
              <div className="cf-row">
                <div className="field"><label htmlFor="sBeds">Bedrooms</label><input id="sBeds" inputMode="numeric" /></div>
                <div className="field"><label htmlFor="sAcres">Acres</label><input id="sAcres" inputMode="decimal" /></div>
              </div>
              <div className="cf-row">
                <div className="field"><label htmlFor="sName">Full name</label><input id="sName" required autoComplete="name" /></div>
                <div className="field"><label htmlFor="sPhone">Phone number</label><input id="sPhone" type="tel" autoComplete="tel" placeholder="(###) ###-####" /></div>
              </div>
              <div className="field"><label htmlFor="sEmail">Email address</label><input id="sEmail" type="email" required autoComplete="email" /></div>
              <div className="field"><label htmlFor="sWhen">Timeline</label><select id="sWhen"><option>Just curious</option><option>Within 3 months</option><option>3–6 months</option><option>6+ months</option></select></div>
              <ValuationSubmit />
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
