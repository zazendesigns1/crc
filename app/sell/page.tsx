import type { Metadata } from "next";
import LeadForm from "@/components/LeadForm";
import SellSections from "@/components/SellSections";

export const metadata: Metadata = { title: "Home Valuation", description: "Request a free market analysis of your Washington County home." };

const STEPS = [
  ["Step one", "Walk-through", "Michele visits, sees what makes your place special, and talks through your timing.", "M3 11.5 12 4l9 7.5M5.5 9.5V20h13V9.5M10 20v-5.5h4V20"],
  ["Step two", "Pricing", "A written market analysis with comparable sales from your town and the surrounding area.", "M4 20V10m5.3 10V4m5.4 16v-7M20 20V8M3 20h18"],
  ["Step three", "Marketing", "Professional photos, MLS exposure across the region, and a feature on this site.", "M4 8.5h3l1.6-2.5h6.8L17 8.5h3v10.5H4zM12 16.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"],
  ["Step four", "Closing", "Offers, inspections and paperwork handled personally, start to finish.", "M15.5 3a5.5 5.5 0 0 0-5.2 7.3L3 17.6V21h3.4v-2.2h2.2v-2.2h2.2l1.9-1.9A5.5 5.5 0 1 0 15.5 3zM17 7.5h.01"],
];

export default function Sell() {
  return (
    <>
      <div className="page-head"><div className="wrap">
        <div className="eyebrow">Sell with Charlotte Realty Group</div>
        <h1>What is your home worth?</h1>
        <p>Tell Michele a little about your property and she&apos;ll put together a free market analysis using recent sales near you.</p>
      </div></div>
      <SellSections />
      <section className="band" id="valuation"><div className="wrap split" style={{ alignItems: "start" }}>
        <div className="steps">
          {STEPS.map(([n, h, p, d]) => (
            <div className="step" key={n}>
              <span className="step-icon"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={d} /></svg></span>
              <div className="n">{n}</div><h3>{h}</h3><p>{p}</p>
            </div>
          ))}
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
