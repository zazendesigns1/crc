"use client";
import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import ListingCard from "./ListingCard";
import ValleyMap from "./ValleyMap";
import { type Listing, TOWNS, TYPES } from "@/lib/listings";

type Sort = "new" | "plow" | "phigh" | "acres" | "sqft";

export default function SearchClient({ listings }: { listings: Listing[] }) {
  const params = useSearchParams();
  const init = {
    town: params.get("town") ?? "",
    min: "0",
    max: params.get("max") ?? "",
    beds: Number(params.get("beds") ?? 0),
  };
  const [town, setTown] = useState(init.town);
  const [min, setMin] = useState(init.min);
  const [max, setMax] = useState(init.max);
  const [beds, setBeds] = useState(init.beds);
  const [baths, setBaths] = useState(0);
  const [types, setTypes] = useState<string[]>([]);
  const [acres, setAcres] = useState("0");
  const [kw, setKw] = useState("");
  const [ours, setOurs] = useState(false);
  const [sort, setSort] = useState<Sort>("new");
  const [mode, setMode] = useState<"grid" | "map">("grid");
  const [hot, setHot] = useState<string | null>(null);

  const reset = () => {
    setTown(""); setMin("0"); setMax(""); setBeds(0); setBaths(0); setTypes([]); setAcres("0"); setKw(""); setOurs(false);
  };

  const results = useMemo(() => {
    const lo = Number(min), hi = Number(max) || Infinity, ac = Number(acres), q = kw.trim().toLowerCase();
    const r = listings.filter((l) => {
      if (town && l.town !== town) return false;
      if (l.price < lo || l.price > hi) return false;
      if (beds && l.beds < beds) return false;
      if (baths && l.baths < baths) return false;
      if (types.length && !types.includes(l.type)) return false;
      if (l.acres < ac) return false;
      if (ours && !l.ours) return false;
      if (q && !`${l.desc} ${l.feat.join(" ")} ${l.addr} ${l.town}`.toLowerCase().includes(q)) return false;
      return true;
    });
    const cmp: Record<Sort, (a: Listing, b: Listing) => number> = {
      new: (a, b) => a.dom - b.dom,
      plow: (a, b) => a.price - b.price,
      phigh: (a, b) => b.price - a.price,
      acres: (a, b) => b.acres - a.acres,
      sqft: (a, b) => b.sqft - a.sqft,
    };
    return [...r].sort(cmp[sort]);
  }, [listings, town, min, max, beds, baths, types, acres, kw, ours, sort]);

  const chips = (vals: [number, string][], cur: number, set: (n: number) => void, label: string) => (
    <div className="chips" role="group" aria-label={label}>
      {vals.map(([v, t]) => (
        <button key={v} type="button" className="chip" aria-pressed={cur === v} onClick={() => set(v)}>{t}</button>
      ))}
    </div>
  );

  return (
    <div className="wrap search-layout">
      <form className="filters" onSubmit={(e) => e.preventDefault()}>
        <h3>Filter homes</h3>
        <div className="field">
          <label htmlFor="fTown">Town</label>
          <select id="fTown" value={town} onChange={(e) => setTown(e.target.value)}>
            <option value="">All towns</option>
            {TOWNS.map((t) => <option key={t}>{t}</option>)}
          </select>
        </div>
        <div className="field">
          <span className="lab">Price</span>
          <div className="two">
            <select aria-label="Minimum price" value={min} onChange={(e) => setMin(e.target.value)}>
              <option value="0">No min</option><option value="150000">$150K</option><option value="250000">$250K</option><option value="400000">$400K</option><option value="600000">$600K</option>
            </select>
            <select aria-label="Maximum price" value={max} onChange={(e) => setMax(e.target.value)}>
              <option value="">No max</option><option value="250000">$250K</option><option value="400000">$400K</option><option value="600000">$600K</option><option value="900000">$900K</option>
            </select>
          </div>
        </div>
        <div className="field"><span className="lab">Bedrooms</span>{chips([[0, "Any"], [1, "1+"], [2, "2+"], [3, "3+"], [4, "4+"]], beds, setBeds, "Bedrooms")}</div>
        <div className="field"><span className="lab">Bathrooms</span>{chips([[0, "Any"], [1, "1+"], [2, "2+"], [3, "3+"]], baths, setBaths, "Bathrooms")}</div>
        <div className="field">
          <span className="lab">Property type</span>
          <div className="chips" role="group" aria-label="Property type">
            {TYPES.map((t) => (
              <button key={t} type="button" className="chip" aria-pressed={types.includes(t)}
                onClick={() => setTypes((cur) => (cur.includes(t) ? cur.filter((x) => x !== t) : [...cur, t]))}>{t}</button>
            ))}
          </div>
        </div>
        <div className="field">
          <label htmlFor="fAcres">Minimum acreage</label>
          <select id="fAcres" value={acres} onChange={(e) => setAcres(e.target.value)}>
            <option value="0">Any</option><option value="1">1+ acre</option><option value="5">5+ acres</option><option value="10">10+ acres</option><option value="25">25+ acres</option>
          </select>
        </div>
        <div className="field">
          <label htmlFor="fKw">Keyword</label>
          <input id="fKw" placeholder="Barn, pond, river frontage…" value={kw} onChange={(e) => setKw(e.target.value)} />
        </div>
        <label style={{ display: "flex", gap: 8, alignItems: "center", fontWeight: 600, fontSize: ".92rem" }}>
          <input type="checkbox" checked={ours} onChange={(e) => setOurs(e.target.checked)} /> Only Charlotte Realty Group listings
        </label>
        <button className="btn ghost" type="button" onClick={reset}>Clear filters</button>
      </form>

      <div>
        <div className="results-bar">
          <h2>{results.length} home{results.length === 1 ? "" : "s"} for sale</h2>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            <select className="sort" aria-label="Sort listings" value={sort} onChange={(e) => setSort(e.target.value as Sort)}>
              <option value="new">Newest</option><option value="plow">Price: low to high</option><option value="phigh">Price: high to low</option><option value="acres">Most acreage</option><option value="sqft">Largest home</option>
            </select>
            <div className="seg" role="group" aria-label="View">
              <button type="button" aria-pressed={mode === "grid"} onClick={() => setMode("grid")}>Grid</button>
              <button type="button" aria-pressed={mode === "map"} onClick={() => setMode("map")}>Map</button>
            </div>
          </div>
        </div>

        {results.length === 0 ? (
          <div className="empty">
            <p style={{ margin: "0 0 12px" }}>No homes match those filters.</p>
            <button className="btn ghost" type="button" onClick={reset}>Clear filters</button>
          </div>
        ) : mode === "grid" ? (
          <div className="grid">{results.map((l) => <ListingCard key={l.id} l={l} />)}</div>
        ) : (
          <>
            <ValleyMap list={results} hot={hot} onHover={setHot} />
            <div className="map-list">{results.map((l) => <ListingCard key={l.id} l={l} highlighted={hot === l.id} onHover={setHot} />)}</div>
          </>
        )}
      </div>
    </div>
  );
}
