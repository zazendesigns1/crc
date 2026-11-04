import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Preview", robots: { index: false, follow: false } };

export default async function Unlock({ searchParams }: { searchParams: Promise<{ next?: string; error?: string }> }) {
  const { next = "/", error } = await searchParams;
  return (
    <div className="unlock">
      <form className="unlock-card" method="post" action="/api/unlock">
        <Image src="/logo-header.webp" alt="Charlotte Realty Group" width={900} height={357} priority />
        <label htmlFor="pw">Enter password to view this site</label>
        <input id="pw" name="password" type="password" autoFocus required autoComplete="current-password" />
        <input type="hidden" name="next" value={next} />
        {error && <p className="unlock-err">That password isn&apos;t right. Try again.</p>}
        <button type="submit" className="btn">View site</button>
      </form>
    </div>
  );
}
