import Link from "next/link";
import Image from "next/image";
import { BROKERAGE } from "@/lib/listings";

export default function Footer() {
  return (
    <footer className="site">
      <div className="wrap">
        <div className="cols">
          <div style={{ display: "grid", gap: 12 }}>
            <Image className="footer-mark" src="/logo-mark-light.webp" alt="Charlotte Realty Group" width={160} height={84} />
            <p style={{ margin: 0, fontSize: ".9rem", maxWidth: "40ch" }}>Independent real estate brokerage serving Washington County and the Battenkill Valley, New York.</p>
          </div>
          <div>
            <h4>Explore</h4>
            <ul>
              <li><Link href="/search">Search homes</Link></li>
              <li><Link href="/sell">Home valuation</Link></li>
              <li><Link href="/agents">Our agents</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4>Contact</h4>
            <ul>
              <li><a href={BROKERAGE.phoneHref}>{BROKERAGE.phone}</a></li>
              <li><a href={`mailto:${BROKERAGE.email}`}>{BROKERAGE.email}</a></li>
              <li>{BROKERAGE.office}</li>
            </ul>
          </div>
        </div>
        <div className="legal">
          <span>© {new Date().getFullYear()} Charlotte Realty Group · Licensed Real Estate Broker, New York State · Equal Housing Opportunity · NYS Fair Housing Notice · NYS Standard Operating Procedures</span>
          <span>Website by <a href="https://zazenwebdesign.com">Zazen Designs</a></span>
        </div>
      </div>
    </footer>
  );
}
