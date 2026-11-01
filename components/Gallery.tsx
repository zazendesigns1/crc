"use client";
import { useState } from "react";
import PropertyPhoto from "./PropertyPhoto";

// Different crops so the single placeholder photo reads as a gallery. Real MLS media won't need these.
const FOCUS = ["50% 50%", "15% 40%", "85% 60%", "50% 90%"];

export default function Gallery({ photos, alt }: { photos: string[]; alt: string }) {
  const [i, setI] = useState(0);
  return (
    <div className="gallery">
      <div className="main"><PropertyPhoto src={photos[i]} alt={`${alt}, photo ${i + 1}`} focus={FOCUS[i % FOCUS.length]} sizes="(max-width: 960px) 100vw, 780px" priority /></div>
      <div className="thumbs">
        {photos.map((p, n) => (
          <button key={n} type="button" aria-pressed={i === n} aria-label={`Photo ${n + 1}`} onClick={() => setI(n)}>
            <PropertyPhoto src={p} alt="" focus={FOCUS[n % FOCUS.length]} sizes="200px" />
          </button>
        ))}
      </div>
    </div>
  );
}
