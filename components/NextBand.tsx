import Link from "next/link";
import Image from "next/image";

export default function NextBand() {
  return (
    <section className="v2next">
      <div className="v2next-img"><Image src="/placeholder-home.webp" alt="" fill sizes="(max-width: 820px) 100vw, 50vw" style={{ objectFit: "cover" }} /></div>
      <div className="v2next-copy">
        <div className="eyebrow">When it&apos;s time for what&apos;s next</div>
        <h2>Your real estate journey doesn&apos;t end at the closing.</h2>
        <p>Whether you&apos;re selling a long-held property, repositioning your holdings or exploring new investments, we can help you find the right next step, including Section 1031 exchanges and connections to the right tax, legal and investment professionals.</p>
        <p className="v2next-tag"><em>Thoughtful strategies. Seamless transitions.</em></p>
        <div><Link href="/investment" className="btn ghost">Investment &amp; transition strategies <span aria-hidden="true">→</span></Link></div>
      </div>
    </section>
  );
}
