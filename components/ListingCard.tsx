import Link from "next/link";
import PropertyPhoto from "./PropertyPhoto";
import { type Listing, money, bathTxt, statusClass, courtesyOf } from "@/lib/listings";

export function Facts({ l }: { l: Listing }) {
  if (l.type === "Land")
    return (
      <div className="facts"><span><b>{l.acres}</b> acres</span><span>Land</span></div>
    );
  return (
    <div className="facts">
      <span><b>{l.beds}</b> bd</span>
      <span><b>{bathTxt(l.baths)}</b> ba</span>
      <span><b className="num">{l.sqft.toLocaleString("en-US")}</b> sqft</span>
      <span><b>{l.acres}</b> ac</span>
    </div>
  );
}

export default function ListingCard({ l, highlighted, onHover }: { l: Listing; highlighted?: boolean; onHover?: (id: string | null) => void }) {
  return (
    <Link
      href={`/listings/${l.id}`}
      className="card"
      style={highlighted ? { outline: "2px solid var(--gold)" } : undefined}
      onMouseEnter={onHover ? () => onHover(l.id) : undefined}
      onMouseLeave={onHover ? () => onHover(null) : undefined}
    >
      <div className="ph">
        <PropertyPhoto src={l.photos[0]} alt={`${l.addr}, ${l.town}`} />
        <span className={`pill ${statusClass(l.status)}`}>{l.status}</span>
        {l.ours && <span className="ours">CRG Listing</span>}
      </div>
      <div className="body">
        <div className="addr">{l.addr}, {l.town}</div>
        <Facts l={l} />
        <div className="price num">{money(l.price)}</div>
        <div className="courtesy">Listing courtesy of {courtesyOf(l)} · MLS# {l.mls}</div>
      </div>
    </Link>
  );
}
