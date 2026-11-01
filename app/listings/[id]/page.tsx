import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Gallery from "@/components/Gallery";
import PaymentCalc from "@/components/PaymentCalc";
import SaveButton from "@/components/SaveButton";
import LeadForm from "@/components/LeadForm";
import AgentCard from "@/components/AgentCard";
import { BROKERAGE, getListing, getListings, money, bathTxt, statusClass, courtesyOf } from "@/lib/listings";

type Props = { params: Promise<{ id: string }> };

export function generateStaticParams() {
  return getListings().map((l) => ({ id: l.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const l = getListing((await params).id);
  if (!l) return {};
  return { title: `${l.addr}, ${l.town}, NY ${l.zip}`, description: `${money(l.price)} · ${l.desc.slice(0, 140)}` };
}

export default async function ListingPage({ params }: Props) {
  const l = getListing((await params).id);
  if (!l) notFound();
  const land = l.type === "Land";
  const rows: [string, string | number | null][] = [
    ["Property type", l.type], ["MLS number", l.mls], ["Lot size", `${l.acres} acres`],
    ...(land ? [] : ([["Year built", l.year], ["Heating", l.heat], ["Water", l.water], ["Sewer", l.sewer]] as [string, string | number | null][])),
    ["School district", l.school], ["Annual taxes (est.)", money(l.tax)],
  ];
  return (
    <div className="wrap">
      <div className="crumbs"><Link href="/search" style={{ fontWeight: 700, textDecoration: "none" }}>← Back to search</Link></div>
      <div className="detail">
        <div>
          <Gallery photos={l.photos} alt={`${l.addr}, ${l.town}`} />
          <div className="d-head">
            <div>
              <div style={{ display: "flex", gap: 8, alignItems: "center", flexWrap: "wrap" }}>
                <span className={`pill ${statusClass(l.status)}`} style={{ position: "static" }}>{l.status}</span>
                {l.ours && <span className="ours" style={{ position: "static" }}>CRG Listing</span>}
                <span className="small">{l.dom} day{l.dom === 1 ? "" : "s"} on market</span>
              </div>
              <div className="price num" style={{ marginTop: 10 }}>{money(l.price)}</div>
              <h1>{l.addr}</h1>
              <div className="addr">{l.town}, NY {l.zip}</div>
            </div>
            <div style={{ display: "flex", gap: 8 }}>
              <SaveButton />
              <Link className="btn" href="/contact">Schedule a showing</Link>
            </div>
          </div>
          <div className="keyfacts">
            {!land && (<>
              <div><b>{l.beds}</b><span>Beds</span></div>
              <div><b>{bathTxt(l.baths)}</b><span>Baths</span></div>
              <div><b className="num">{l.sqft.toLocaleString("en-US")}</b><span>Sq ft</span></div>
            </>)}
            <div><b>{l.acres}</b><span>Acres</span></div>
            {l.year && <div><b>{l.year}</b><span>Built</span></div>}
          </div>
          <h2 className="h3">About this property</h2>
          <div className="prose"><p>{l.desc}</p></div>
          <h2 className="h3">Highlights</h2>
          <ul className="featlist">{l.feat.map((f) => <li key={f}>{f}</li>)}</ul>
          <h2 className="h3">Property details</h2>
          <table className="specs"><tbody>
            {rows.map(([k, v]) => <tr key={k}><th>{k}</th><td>{v}</td></tr>)}
          </tbody></table>
          <div className="idx">
            <span className="idx-badge">IDX</span>
            <div>Listing courtesy of <b>{courtesyOf(l)}</b>. Listing information provided by the {BROKERAGE.mlsName} Internet Data Exchange program. Information is deemed reliable but not guaranteed and should be independently verified. Data last updated {BROKERAGE.dataUpdated}. [Exact disclaimer wording will follow the MLS&apos;s IDX rules.]</div>
          </div>
        </div>
        <aside className="side">
          <LeadForm submitLabel="Ask about this home" thanks="Thanks! This preview doesn't send messages yet. On the live site, Michele will get this by email.">
            <AgentCard />
            <div className="field"><label htmlFor="dName">Name</label><input id="dName" required /></div>
            <div className="field"><label htmlFor="dEmail">Email or phone</label><input id="dEmail" required /></div>
            <div className="field"><label htmlFor="dMsg">Message</label><textarea id="dMsg" rows={3} defaultValue={`I'd like to learn more about ${l.addr}.`} /></div>
          </LeadForm>
          <PaymentCalc price={l.price} tax={l.tax} />
        </aside>
      </div>
    </div>
  );
}
