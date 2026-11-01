"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { TOWNS } from "@/lib/listings";

export default function HeroSearch() {
  const router = useRouter();
  const [town, setTown] = useState("");
  const [max, setMax] = useState("");
  const [beds, setBeds] = useState("0");
  return (
    <form
      className="searchbar"
      onSubmit={(e) => {
        e.preventDefault();
        const q = new URLSearchParams();
        if (town) q.set("town", town);
        if (max) q.set("max", max);
        if (beds !== "0") q.set("beds", beds);
        router.push(`/search${q.size ? `?${q}` : ""}`);
      }}
    >
      <label htmlFor="hTown">Town
        <select id="hTown" value={town} onChange={(e) => setTown(e.target.value)}>
          <option value="">All towns</option>
          {TOWNS.map((t) => <option key={t}>{t}</option>)}
        </select>
      </label>
      <label htmlFor="hMax">Max price
        <select id="hMax" value={max} onChange={(e) => setMax(e.target.value)}>
          <option value="">Any</option><option value="250000">$250K</option><option value="400000">$400K</option><option value="600000">$600K</option><option value="900000">$900K</option>
        </select>
      </label>
      <label htmlFor="hBeds">Beds
        <select id="hBeds" value={beds} onChange={(e) => setBeds(e.target.value)}>
          <option value="0">Any</option><option value="2">2+</option><option value="3">3+</option><option value="4">4+</option>
        </select>
      </label>
      <button className="btn" type="submit">Search homes</button>
    </form>
  );
}
