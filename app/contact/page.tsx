import type { Metadata } from "next";
import { BROKERAGE } from "@/lib/listings";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = { title: "Contact", description: "Call or email Charlotte Realty Group about buying or selling in Washington County." };

const CHAT = "M5.5 3.5h13a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H10l-3.5 4v-4h-1a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2z";

export default function Contact() {
  return (
    <section className="contact-wrap">
      <div className="wrap">
        <div className="contact-card">
          <div className="eyebrow">Contact</div>
          <h1 className="contact-h1">Charlotte Realty Group</h1>
          <div className="c-block">
            <h2>Get in touch?</h2>
            <p>Contact the team that can help you best with your question.</p>
          </div>
          <div className="c-block">
            <span className="c-icon">
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={CHAT} /></svg>
            </span>
            <h2>Office</h2>
            <p>Buying, selling, or general questions.</p>
            <div className="c-lines">
              <a href={BROKERAGE.phoneHref}>{BROKERAGE.phone}</a>
              <a href={`mailto:${BROKERAGE.email}`}>{BROKERAGE.email}</a>
            </div>
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
