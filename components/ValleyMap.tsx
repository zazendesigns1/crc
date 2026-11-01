"use client";
import { useRouter } from "next/navigation";
import { type Listing, money } from "@/lib/listings";

const TOWN_LABELS: Record<string, [number, number]> = {
  Schuylerville: [120, 215], Greenwich: [300, 320], Easton: [250, 430], Argyle: [440, 75],
  Salem: [760, 128], Shushan: [660, 232], Cambridge: [560, 450], "Hoosick Falls": [610, 528],
};

/** Illustrative map for the preview. The live site will use an interactive street map (e.g. Mapbox) with real coordinates. */
export default function ValleyMap({ list, hot, onHover }: { list: Listing[]; hot: string | null; onHover: (id: string | null) => void }) {
  const router = useRouter();
  return (
    <div className="mapbox">
      <svg viewBox="0 0 900 560" role="img" aria-label="Map of listings in the Battenkill Valley">
        <rect width="900" height="560" fill="#eef0e2" />
        <path d="M60 0 C80 120 50 220 90 320 S70 480 100 560" stroke="#a9c3cc" strokeWidth="22" fill="none" />
        <path d="M900 230 C800 250 720 240 650 265 S520 300 430 300 S300 290 230 270 S140 250 88 250" stroke="#a9c3cc" strokeWidth="9" fill="none" />
        <text x="70" y="40" fontSize="13" fill="#5f6a57" fontStyle="italic" transform="rotate(80 70 40)">Hudson River</text>
        <text x="470" y="290" fontSize="13" fill="#5f6a57" fontStyle="italic">Battenkill</text>
        <path d="M880 0 L880 560" stroke="#b3974f" strokeDasharray="6 6" strokeWidth="1.5" />
        <text x="872" y="540" fontSize="12" fill="#8a7a50" textAnchor="end">Vermont</text>
        <g stroke="#d9d3bd" strokeWidth="3" fill="none">
          <path d="M120 230 L300 300 L560 400 L610 500" /><path d="M300 300 L420 120 L760 150 L820 200" /><path d="M560 400 L640 250 L760 150" />
        </g>
        {Object.entries(TOWN_LABELS).map(([t, [x, y]]) => (
          <text key={t} x={x} y={y} fontSize="15" fontWeight="700" fill="#24401f" textAnchor="middle" fontFamily="Mulish, sans-serif">{t}</text>
        ))}
        {list.map((l) => {
          const lab = l.price >= 1e6 ? (l.price / 1e6).toFixed(1) + "M" : Math.round(l.price / 1000) + "K";
          const w = lab.length * 9 + 18;
          const go = () => router.push(`/listings/${l.id}`);
          return (
            <g key={l.id} className={`pin${hot === l.id ? " hot" : ""}`} tabIndex={0} role="link" aria-label={`${l.addr}, ${money(l.price)}`}
              onClick={go} onKeyDown={(e) => e.key === "Enter" && go()} onMouseEnter={() => onHover(l.id)} onMouseLeave={() => onHover(null)}>
              <rect x={l.x - w / 2} y={l.y - 14} width={w} height={24} rx={12} fill={l.ours ? "#24401f" : "#5f6a57"} stroke="#fffdf7" strokeWidth={2} />
              <text x={l.x} y={l.y + 3} fontSize="13" fontWeight="800" fill="#fff" textAnchor="middle" fontFamily="Mulish, sans-serif">${lab}</text>
            </g>
          );
        })}
      </svg>
      <span className="map-note">Illustrative map · live site uses an interactive street map</span>
    </div>
  );
}
