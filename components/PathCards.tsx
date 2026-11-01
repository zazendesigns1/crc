import Link from "next/link";

const S = { stroke: "#24401f", strokeWidth: 3, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };

function BuyArt() {
  return (
    <svg viewBox="0 0 320 200" role="img" aria-label="Farmhouse with a key">
      <path d="M0 168 C80 150 200 158 320 148 L320 200 L0 200Z" fill="#c9d1b0" />
      <g {...S} fill="#fffdf7">
        <path d="M92 168 V104 L142 64 L192 104 V168Z" />
        <rect x="190" y="118" width="46" height="50" />
        <path d="M190 118 L213 98 L236 118" fill="none" />
      </g>
      <g {...S} fill="#e9dfc6">
        <rect x="108" y="116" width="22" height="22" /><rect x="154" y="116" width="22" height="22" />
        <rect x="204" y="132" width="18" height="18" />
      </g>
      <path d="M131 168 V146 H153 V168" {...S} fill="#b3974f" />
      <g {...S} fill="none"><circle cx="256" cy="56" r="14" stroke="#b3974f" /><path d="M256 70 V112 M256 92 H266 M256 102 H263" stroke="#b3974f" /></g>
      <g {...S} fill="#8c9a6e"><circle cx="46" cy="132" r="22" /><path d="M46 154 V170" fill="none" /></g>
    </svg>
  );
}

function SellArt() {
  return (
    <svg viewBox="0 0 320 200" role="img" aria-label="For Sale sign">
      <path d="M0 170 C90 156 210 164 320 152 L320 200 L0 200Z" fill="#c9d1b0" />
      <g {...S} fill="none"><path d="M96 172 V44 H230" /><path d="M150 44 V60 M210 44 V60" /></g>
      <rect x="132" y="60" width="96" height="70" rx="4" {...S} fill="#fffdf7" />
      <rect x="132" y="104" width="96" height="26" fill="#24401f" />
      <text x="180" y="122" textAnchor="middle" fontFamily="Scoutie Sans Variable, sans-serif" fontSize="15" fontWeight="800" fill="#fffdf7">FOR SALE</text>
      <g fill="#8c9a6e"><circle cx="180" cy="78" r="9" /><rect x="179" y="84" width="2" height="8" fill="#24401f" /></g>
      <path d="M150 96 C165 88 195 88 210 96" stroke="#b3974f" strokeWidth="2" fill="none" />
      <g {...S} fill="#e9dfc6"><circle cx="262" cy="150" r="12" /><circle cx="280" cy="154" r="10" /><circle cx="50" cy="156" r="11" /></g>
    </svg>
  );
}

function AgentsArt() {
  const person = (x: number, headY: number, r: number, w: number, top: number, fill: string, head: string) => (
    <g {...S}>
      <path d={`M${x - w} 206 V${top + w * 0.75} A${w} ${w * 0.75} 0 0 1 ${x + w} ${top + w * 0.75} V206 Z`} fill={fill} />
      <circle cx={x} cy={headY} r={r} fill={head} />
    </g>
  );
  return (
    <svg viewBox="0 0 320 200" role="img" aria-label="Three agents">
      <path d="M0 172 C90 160 210 168 320 156 L320 200 L0 200Z" fill="#c9d1b0" />
      <g {...S} fill="#8c9a6e"><circle cx="40" cy="128" r="20" /><path d="M40 148 V170" fill="none" /></g>
      <g {...S} fill="#e9dfc6"><circle cx="276" cy="156" r="11" /><circle cx="293" cy="160" r="9" /></g>
      {person(104, 104, 18, 34, 132, "#e9dfc6", "#fffdf7")}
      {person(216, 104, 18, 34, 132, "#e9dfc6", "#fffdf7")}
      {person(160, 92, 22, 40, 124, "#fffdf7", "#fffdf7")}
      <path d="M150 127 L160 141 L170 127" {...S} fill="none" stroke="#b3974f" />
    </svg>
  );
}

const CARDS = [
  { title: "Buy a Home", text: "Search every MLS listing in Washington County, from village homes to farms with acreage.", href: "/search", cta: "Browse homes", art: <BuyArt />, bg: "#e6e9d9" },
  { title: "Sell a Home", text: "Get a free market analysis and a local marketing plan built around what makes your place special.", href: "/sell", cta: "How it works", art: <SellArt />, bg: "#efe7d2" },
  { title: "Meet Our Agents", text: "Work directly with a local agent who knows the back roads, the schools and the land.", href: "/agents", cta: "Our agents", art: <AgentsArt />, bg: "#dfe5d8" },
];

export default function PathCards() {
  return (
    <section className="band">
      <div className="wrap">
        <div className="paths">
          {CARDS.map((c) => (
            <article className="path-card" key={c.title}>
              <div className="path-art" style={{ background: c.bg }}>{c.art}</div>
              <div className="path-body">
                <h2>{c.title}</h2>
                <p>{c.text}</p>
                <Link className="btn ghost" href={c.href}>{c.cta}</Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
