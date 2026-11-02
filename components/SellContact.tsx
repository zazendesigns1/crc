"use client";
import { useState } from "react";
import { BROKERAGE } from "@/lib/listings";

/** Full-width green valuation section, styled like the Get in touch overlay. TODO (live site): POST to an API route. */
export default function SellContact() {
  const [sent, setSent] = useState(false);
  return (
    <section className="sell-contact" id="valuation">
      <div className="cov-inner">
        {sent ? (
          <div className="cov-sent">
            <h2>Thanks, we&apos;ll be in touch soon.</h2>
            <p>This preview doesn&apos;t send requests yet. On the live site, we&apos;ll reply within one business day.</p>
          </div>
        ) : (
          <>
            <h2>What is your home worth?</h2>
            <p className="cov-sub">Tell us about your property and we&apos;ll send a free market analysis based on recent sales near you, or call us at <a href={BROKERAGE.phoneHref}>{BROKERAGE.phone}</a>.</p>
            <form className="cov-form" onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
              <input aria-label="Property address" placeholder="Property address *" required />
              <div className="cov-row">
                <input aria-label="Bedrooms" placeholder="Bedrooms" inputMode="numeric" />
                <input aria-label="Acres" placeholder="Acres" inputMode="decimal" />
              </div>
              <div className="cov-row">
                <input aria-label="Your name" placeholder="Your name *" required autoComplete="name" />
                <input aria-label="Phone number" placeholder="Phone number" type="tel" autoComplete="tel" />
              </div>
              <input aria-label="Your email" placeholder="Your email *" type="email" required autoComplete="email" />
              <select aria-label="Timeline" defaultValue="">
                <option value="" disabled>When are you thinking of selling?</option>
                <option>Just curious</option><option>Within 3 months</option><option>3–6 months</option><option>6+ months</option>
              </select>
              <p className="cov-consent">By sending your request, you agree that {BROKERAGE.name} may call or text you about your property. Consent is not a condition of buying any property, goods or services.</p>
              <button type="submit" className="cov-send">Request my valuation</button>
            </form>
          </>
        )}
      </div>
    </section>
  );
}
