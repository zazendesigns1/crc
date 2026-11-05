import type { Metadata } from "next";
import ContactPanel from "@/components/ContactPanel";

export const metadata: Metadata = {
  title: "Investment & Transition Strategies",
  description: "Selling investment real estate? Charlotte Realty Group helps owners plan the next step, from Section 1031 exchange replacement property to connecting with the right professionals.",
};

const BLOCKS = [
  {
    title: "Section 1031 Exchanges",
    body: [
      "Selling investment real estate may let you exchange into another qualifying property and defer certain gains under Section 1031 of the Internal Revenue Code.",
      "We help you find potential replacement property and work alongside your qualified intermediary and tax advisor so the real estate side of the exchange stays on schedule.",
    ],
  },
  {
    title: "Alternative Real Estate Investments",
    body: [
      "Some owners want real estate exposure without the work of managing property. Structures such as Delaware Statutory Trusts (DSTs) may allow a beneficial interest in qualifying real estate without direct management.",
      "We can explain the real estate considerations and introduce you to appropriately licensed investment professionals.",
    ],
  },
  {
    title: "A Thoughtful Transition",
    body: [
      "Every owner's goals are different. Some want another actively managed property. Others are looking for a more passive structure, a different asset class or a broader repositioning of their holdings.",
      "We start with your objectives, then help you navigate the real estate side of the move.",
    ],
  },
];

export default function Investment() {
  return (
    <>
      <div className="page-head agents-head"><div className="wrap">
        <div className="eyebrow">Investment &amp; Transition Strategies</div>
        <h1>When one investment leads to the next.</h1>
        <p>For many owners, selling a property is only the beginning of the next chapter. Whether you&apos;ve built a portfolio, held a multifamily property for decades or are ready to step back from active management, the decisions around a sale can have lasting effects.</p>
      </div></div>

      <section className="band">
        <div className="wrap inv-grid">
          {BLOCKS.map((b, i) => (
            <article key={b.title} className="inv-card">
              <h2>{b.title}</h2>
              {b.body.map((p, j) => <p key={j}>{p}</p>)}
            </article>
          ))}
        </div>
        <div className="wrap">
          <p className="inv-note">Charlotte Realty Group is a licensed real estate brokerage. We do not provide tax, legal or investment advice. Please consult a qualified intermediary, tax advisor, attorney and, for securities such as DSTs, a licensed investment professional before making any decision.</p>
        </div>
      </section>

      <section className="sell-contact">
        <div className="cov-inner">
          <ContactPanel heading="A significant decision deserves a thoughtful next step." sub={<>Tell us a little about your property and what you&apos;re considering, and we&apos;ll be in touch.</>} />
        </div>
      </section>
    </>
  );
}
