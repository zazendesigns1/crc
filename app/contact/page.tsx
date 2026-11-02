import type { Metadata } from "next";
import ContactPanel from "@/components/ContactPanel";

export const metadata: Metadata = { title: "Contact", description: "Call or message Charlotte Realty Group about buying or selling in Washington County." };

export default function Contact() {
  return (
    <section className="sell-contact contact-page">
      <div className="cov-inner">
        <ContactPanel headingTag="h1" />
      </div>
    </section>
  );
}
