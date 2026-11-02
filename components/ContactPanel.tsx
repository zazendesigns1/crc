"use client";
import { useState } from "react";
import { BROKERAGE } from "@/lib/listings";

/** Shared green contact form, used by the Get in touch overlay look and the Contact page. TODO (live site): POST to an API route. */
export default function ContactPanel({ headingTag = "h2" }: { headingTag?: "h1" | "h2" }) {
  const [sent, setSent] = useState(false);
  const H = headingTag;
  if (sent)
    return (
      <div className="cov-sent">
        <H>Thanks, we&apos;ll be in touch soon.</H>
        <p>This preview doesn&apos;t send messages yet. On the live site, your note goes straight to the office.</p>
      </div>
    );
  return (
    <>
      <H>Thinking about buying or selling?</H>
      <p className="cov-sub">We&apos;d love to hear from you. Fill out the form below, or call us at <a href={BROKERAGE.phoneHref}>{BROKERAGE.phone}</a>. We usually reply the same day.</p>
      <form className="cov-form" onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
        <div className="cov-row">
          <input aria-label="Your name" placeholder="Your name *" required autoComplete="name" />
          <input aria-label="Phone number" placeholder="Phone number" type="tel" autoComplete="tel" />
        </div>
        <input aria-label="Your email" placeholder="Your email *" type="email" required autoComplete="email" />
        <div className="cov-row">
          <select aria-label="I'm interested in" defaultValue="">
            <option value="" disabled>I&apos;m interested in…</option>
            <option>Buying</option><option>Selling</option><option>Buying and selling</option><option>Land or acreage</option><option>Something else</option>
          </select>
          <input aria-label="Town or area" placeholder="Town or area" />
        </div>
        <textarea aria-label="Message" placeholder="Tell us a little about what you're looking for" rows={4} />
        <p className="cov-consent">By sending your message, you agree that {BROKERAGE.name} may call or text you about your inquiry. Consent is not a condition of buying any property, goods or services.</p>
        <button type="submit" className="cov-send">Send message</button>
      </form>
    </>
  );
}
