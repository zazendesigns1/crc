"use client";
import { useState, type ReactNode } from "react";

/** TODO (live site): POST to an API route that emails Michele (e.g. Resend) instead of showing the preview note. */
export default function LeadForm({ children, submitLabel, thanks, buttonClass = "btn" }: { children: ReactNode; submitLabel: string; thanks: string; buttonClass?: string }) {
  const [sent, setSent] = useState(false);
  return (
    <form className="box form" onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
      {children}
      <button className={buttonClass} type="submit">{submitLabel}</button>
      {sent && <div className="ok">{thanks}</div>}
    </form>
  );
}
