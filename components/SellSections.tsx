import Image from "next/image";
const S = { stroke: "#24401f", strokeWidth: 3, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };

function AssessArt() {
  return (
    <svg viewBox="0 0 320 220" role="img" aria-label="Clipboard checklist beside a farmhouse">
      <path d="M0 186 C90 172 210 180 320 168 L320 220 L0 220Z" fill="#c9d1b0" />
      <g {...S} fill="#fffdf7"><path d="M150 180 V122 L196 86 L242 122 V180Z" /><rect x="242" y="136" width="40" height="44" /></g>
      <g {...S} fill="#e9dfc6"><rect x="164" y="130" width="18" height="18" /><rect x="210" y="130" width="18" height="18" /></g>
      <path d="M187 180 V158 H205 V180" {...S} fill="#b3974f" />
      <g transform="rotate(-8 90 120)">
        <rect x="46" y="54" width="92" height="124" rx="8" {...S} fill="#fffdf7" />
        <rect x="74" y="46" width="36" height="16" rx="5" {...S} fill="#e9dfc6" />
        {[86, 114, 142].map((y) => (
          <g key={y}><path d={`M62 ${y} l6 6 l12 -12`} {...S} fill="none" stroke="#b3974f" /><path d={`M90 ${y + 2} H124`} {...S} fill="none" /></g>
        ))}
      </g>
    </svg>
  );
}
function MarketArt() {
  return (
    <svg viewBox="0 0 320 220" role="img" aria-label="Camera framing a house photo">
      <path d="M0 190 C90 178 210 184 320 172 L320 220 L0 220Z" fill="#c9d1b0" />
      <rect x="70" y="52" width="180" height="124" rx="10" {...S} fill="#fffdf7" />
      <path d="M70 140 C120 122 180 128 250 116 V166 a10 10 0 0 1 -10 10 H80 a10 10 0 0 1 -10 -10Z" fill="#c9d1b0" />
      <g {...S} fill="#e9dfc6"><path d="M128 156 V118 L160 94 L192 118 V156Z" /></g>
      <rect x="152" y="134" width="16" height="22" {...S} fill="#b3974f" />
      <rect x="70" y="52" width="180" height="124" rx="10" {...S} fill="none" />
      <g {...S} fill="none" stroke="#b3974f"><path d="M58 40 H84 M58 40 V64" /><path d="M262 40 H236 M262 40 V64" /><path d="M58 188 H84 M58 188 V164" /><path d="M262 188 H236 M262 188 V164" /></g>
      <circle cx="226" cy="74" r="8" fill="#b3974f" />
    </svg>
  );
}
function CloseArt() {
  return (
    <svg viewBox="0 0 320 220" role="img" aria-label="House keys with a sold sign">
      <path d="M0 188 C90 176 210 182 320 170 L320 220 L0 220Z" fill="#c9d1b0" />
      <g {...S} fill="none"><path d="M70 190 V60 H170" /><path d="M110 60 V74 M154 60 V74" /></g>
      <rect x="96" y="74" width="72" height="50" rx="4" {...S} fill="#fffdf7" />
      <rect x="96" y="102" width="72" height="22" fill="#24401f" />
      <text x="132" y="118" textAnchor="middle" fontFamily="Cereal, sans-serif" fontSize="13" fontWeight="700" fill="#fffdf7">SOLD</text>
      <g transform="translate(232 92) rotate(28)">
        <circle cx="0" cy="0" r="22" {...S} fill="#e9dfc6" /><circle cx="0" cy="0" r="8" {...S} fill="#fffdf7" />
        <path d="M0 22 V96 M0 64 H14 M0 80 H10" {...S} fill="none" stroke="#b3974f" />
      </g>
      <g transform="translate(206 120) rotate(-14)">
        <circle cx="0" cy="0" r="18" {...S} fill="#fffdf7" />
        <path d="M0 18 V80 M0 54 H12 M0 68 H9" {...S} fill="none" />
      </g>
    </svg>
  );
}

const STEPS = [
  { title: "Pricing Your Home", text: "We walk the property with you, then put together a written market analysis so you can list with confidence.", points: ["Recent sales from your town and nearby", "Land, outbuildings and updates accounted for", "A pricing range you can understand"], art: <Image src="/sell-assessment.webp" alt="Property assessment checklist on a clipboard in front of a white farmhouse" fill sizes="(max-width: 900px) 100vw, 380px" style={{ objectFit: "cover", objectPosition: "50% 40%" }} />, bg: "#e6e9d9", tone: "sage" },
  { title: "Getting It Seen", text: "Your listing goes on the MLS, out to buyer agents across the region, and in front of buyers searching online.", points: ["Professional listing photos", "Syndicated to the major home search sites", "Featured on our site and social media"], art: <MarketArt />, bg: "#efe7d2", tone: "gold" },
  { title: "Offer to Closing", text: "We review every offer with you, negotiate on your behalf, and keep the sale moving through to closing day.", points: ["Showing feedback after every visit", "Inspection and appraisal coordinated", "Regular updates until the keys change hands"], art: <CloseArt />, bg: "#dfe5d8", tone: "coral" },
];



const Check = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7.5" /></svg>
);

export default function SellSections() {
  return (
    <>
      <section className="band process">
        <div className="wrap">
          <div className="process-head">
            <h2>Our Selling Process</h2>
            <p>Three stages, one local team, start to finish.</p>
          </div>
          <div className="process-grid">
            {STEPS.map((s) => (
              <article key={s.title} className={`process-col tone-${s.tone}`}>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
                <ul>{s.points.map((pt) => <li key={pt}><span className="tick"><Check /></span>{pt}</li>)}</ul>
                <div className="process-art" style={{ background: s.bg }}>{s.art}</div>
              </article>
            ))}
          </div>
        </div>
      </section>

    </>
  );
}
