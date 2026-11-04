import type { Metadata } from "next";
import ContactPanel from "@/components/ContactPanel";

export const metadata: Metadata = { title: "Contact", description: "Call or message Charlotte Realty Group about buying or selling in the Capital District and Southern Adirondacks." };

export default function Contact() {
  return (
    <section className="sell-contact contact-page">
      <div className="cov-inner">
        <ContactPanel headingTag="h1" heading="Let's begin a conversation." />
      </div>
    </section>
  );
}
