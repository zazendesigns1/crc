import type { Metadata } from "next";
import LeadForm from "@/components/LeadForm";

export const metadata: Metadata = { title: "Home Valuation", description: "Request a free market analysis of your Washington County home." };

const STEPS = [
  ["Step one", "Walk-through", "Michele visits, sees what makes your place special, and talks through your timing."],
  ["Step two", "Pricing", "A written market analysis with comparable sales from your town and the surrounding area."],
  ["Step three", "Marketing", "Professional photos, MLS exposure across the region, and a feature on this site."],
  ["Step four", "Closing", "Offers, inspections and paperwork handled personally, start to finish."],
];

export default function Sell() {
  return (
    <>
      <div className="page-head"><div className="wrap">
        <div className="eyebrow">Sell with Charlotte Realty Group</div>
        <h1>What is your home worth?</h1>
        <p>Tell Michele a little about your property and she&apos;ll put together a free market analysis using recent sales near you.</p>
      </div></div>
      <section className="band"><div className="wrap split" style={{ alignItems: "start" }}>
        <div className="steps">
          {STEPS.map(([n, h, p]) => <div className="step" key={n}><div className="n">{n}</div><h3>{h}</h3><p>{p}</p></div>)}
        </div>
        <LeadForm submitLabel="Send request" thanks="Thanks! This preview doesn't send messages yet. On the live site, Michele will get your request by email.">
          <h3 style={{ fontSize: "1.5rem" }}>Request a valuation</h3>
          <div className="field"><label htmlFor="sAddr">Property address</label><input id="sAddr" required placeholder="Street, town" /></div>
          <div className="two">
            <div className="field"><label htmlFor="sBeds">Beds</label><input id="sBeds" inputMode="numeric" /></div>
            <div className="field"><label htmlFor="sAcres">Acres</label><input id="sAcres" inputMode="decimal" /></div>
          </div>
          <div className="field"><label htmlFor="sName">Your name</label><input id="sName" required /></div>
          <div className="field"><label htmlFor="sEmail">Email or phone</label><input id="sEmail" required /></div>
          <div className="field"><label htmlFor="sWhen">Timeline</label><select id="sWhen"><option>Just curious</option><option>Within 3 months</option><option>3–6 months</option><option>6+ months</option></select></div>
        </LeadForm>
      </div></section>
    </>
  );
}
