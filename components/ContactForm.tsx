"use client";
import { useState } from "react";
import { BROKERAGE } from "@/lib/listings";

/** General contact form. TODO (live site): POST to an API route that emails the office. */
export default function ContactForm() {
  const [sent, setSent] = useState(false);
  if (sent)
    return (
      <div className="cf-sent">
        <h2>Thanks, we&apos;ll be in touch soon.</h2>
        <p>This preview doesn&apos;t send messages yet. On the live site, your note goes straight to the office.</p>
      </div>
    );
  return (
    <form className="cf" onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
      <h2>Send us a message</h2>
      <div className="cf-row">
        <div className="field"><label htmlFor="cfName">Full name</label><input id="cfName" required autoComplete="name" /></div>
        <div className="field"><label htmlFor="cfPhone">Phone number</label><input id="cfPhone" type="tel" autoComplete="tel" placeholder="(###) ###-####" /></div>
      </div>
      <div className="field"><label htmlFor="cfEmail">Email address</label><input id="cfEmail" type="email" required autoComplete="email" /></div>
      <div className="field"><label htmlFor="cfWhat">I&apos;m interested in</label>
        <select id="cfWhat" defaultValue="Buying"><option>Buying</option><option>Selling</option><option>Buying and selling</option><option>Land or acreage</option><option>Something else</option></select>
      </div>
      <div className="field"><label htmlFor="cfMsg">Message</label><textarea id="cfMsg" rows={4} placeholder="How can we help?" /></div>
      <p className="msg-consent">By sending your message, you agree that {BROKERAGE.name} may call or text you about your inquiry at the number you provided. Consent is not a condition of buying any property, goods or services. Message and data rates may apply.</p>
      <button type="submit" className="btn accent cf-send">Send message</button>
    </form>
  );
}
