"use client";
import { useEffect, useState } from "react";

/** Submit button + preview confirmation for the valuation form. TODO (live site): POST to an API route. */
export default function ValuationSubmit() {
  const [sent, setSent] = useState(false);
  useEffect(() => {
    const f = document.getElementById("valForm") as HTMLFormElement | null;
    if (!f) return;
    const on = (e: Event) => { e.preventDefault(); setSent(true); };
    f.addEventListener("submit", on);
    return () => f.removeEventListener("submit", on);
  }, []);
  return (
    <>
      <button type="submit" className="btn accent cf-send">Request my valuation</button>
      {sent && <div className="ok">Thanks! This preview doesn&apos;t send requests yet. On the live site, we&apos;ll be in touch within one business day.</div>}
    </>
  );
}
