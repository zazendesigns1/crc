import Link from "next/link";

const STEPS = [
  { n: "01", title: "Sell", text: "Get the most from a long-held home, farm or investment property.", d: "M3 11.5 12 4l9 7.5M5.5 9.5V20h13V9.5M10 20v-5.5h4V20" },
  { n: "02", title: "Exchange", text: "Explore a Section 1031 exchange or another structure that fits your goals.", d: "M4 8h13l-3-3M20 16H7l3 3" },
  { n: "03", title: "Reinvest", text: "Find replacement property and connect with the right tax, legal and investment pros.", d: "M4 20V10m5.3 10V4m5.4 16v-7M20 20V8M3 20h18" },
];

export default function NextBand() {
  return (
    <section className="nextband">
      <div className="wrap nextband-inner">
        <div className="nextband-head">
          <div className="eyebrow">When it&apos;s time for what&apos;s next</div>
          <h2>Your real estate journey doesn&apos;t end at the closing.</h2>
          <p><em>Thoughtful strategies. Seamless transitions.</em></p>
          <Link href="/investment" className="btn nextband-btn">Explore investment &amp; transition <span aria-hidden="true">→</span></Link>
        </div>
        <ol className="nextband-steps">
          {STEPS.map((s) => (
            <li key={s.n}>
              <span className="nb-icon"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={s.d} /></svg></span>
              <span className="nb-num">{s.n}</span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
