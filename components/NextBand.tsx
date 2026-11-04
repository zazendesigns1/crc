import Link from "next/link";

const STEPS = [
  { n: "01", title: "Sell", text: "Get the most from a long-held home, farm or investment property." },
  { n: "02", title: "Exchange", text: "Explore a Section 1031 exchange or another structure that fits your goals." },
  { n: "03", title: "Reinvest", text: "Find replacement property and connect with the right tax, legal and investment professionals." },
];

export default function NextBand() {
  return (
    <section className="nextband">
      <div className="wrap nextband-inner">
        <div className="nextband-head">
          <div className="eyebrow">When it&apos;s time for what&apos;s next</div>
          <h2>Your real estate journey doesn&apos;t end at the closing.</h2>
          <p className="nb-tag">Thoughtful strategies. Seamless transitions.</p>
          <p>Whether you&apos;re selling a long-held property, repositioning your holdings or exploring new investments, we can help you find the right next step.</p>
          <Link href="/investment" className="btn nextband-btn">Investment &amp; transition strategies <span aria-hidden="true">→</span></Link>
        </div>
        <ol className="nextband-steps">
          {STEPS.map((s) => (
            <li key={s.n}>
              <Link href="/investment">
                <span className="nb-num">{s.n}</span>
                <span className="nb-body"><h3>{s.title}</h3><p>{s.text}</p></span>
                <span className="nb-arrow" aria-hidden="true">→</span>
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
