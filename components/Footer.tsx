import Link from "next/link";
import { BROKERAGE } from "@/lib/listings";

const I = ({ d }: { d: string }) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={d} /></svg>
);
const HOUSE = "M3 11.5 12 4l9 7.5M5.5 9.5V20h13V9.5M10 20v-5.5h4V20";
const TAG = "M20.6 13.4 13.4 20.6a2 2 0 0 1-2.8 0L3 13V3h10l7.6 7.6a2 2 0 0 1 0 2.8zM7.5 7.5h.01";
const PEOPLE = "M9 11a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM2.5 20c0-3.6 2.9-6 6.5-6s6.5 2.4 6.5 6M16 4.3a3.5 3.5 0 0 1 0 6.4M18 14.3c2 .8 3.5 2.8 3.5 5.7";

export default function Footer() {
  return (
    <footer className="site">
      <div className="wrap foot">
        <div className="foot-pills">
          <Link href="/search" className="fpill"><I d={HOUSE} />Homes for sale</Link>
          <Link href="/agents" className="fpill"><I d={PEOPLE} />Meet our team</Link>
          <Link href="/sell" className="fpill fpill-accent"><I d={TAG} />Sell your home</Link>
        </div>
        <nav className="foot-links" aria-label="Footer">
          <Link href="/search">Properties</Link>
          <Link href="/expertise">Expertise</Link>
          <Link href="/approach">Our Approach</Link>
          <Link href="/investment">Investment</Link>
          <Link href="/agents">About</Link>
          <Link href="/sell">Sell</Link>
          <Link href="/contact">Contact</Link>
        </nav>
        <div className="foot-legal">
          <p>{BROKERAGE.name} is a licensed real estate broker in New York State, serving the Capital District and Southern Adirondacks.</p>
          <p>{BROKERAGE.office} · Phone: <a href={BROKERAGE.phoneHref}>{BROKERAGE.phone}</a> · <a href={`mailto:${BROKERAGE.email}`}>{BROKERAGE.email}</a></p>
          <p>Equal Housing Opportunity · <a href="#">NYS Fair Housing Notice</a> · <a href="#">NYS Standard Operating Procedures</a></p>
        </div>
        <div className="foot-bottom">© {new Date().getFullYear()} {BROKERAGE.name} · All Rights Reserved · Website by <a href="https://zazenwebdesign.com">Zazen Designs</a></div>
      </div>
    </footer>
  );
}
