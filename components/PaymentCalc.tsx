"use client";
import { useState } from "react";
import { money } from "@/lib/listings";

export default function PaymentCalc({ price, tax }: { price: number; tax: number }) {
  const [down, setDown] = useState("20");
  const [rate, setRate] = useState("6.25");
  const [term, setTerm] = useState("30");
  const P = price * (1 - (Number(down) || 0) / 100);
  const r = (Number(rate) || 0) / 1200;
  const n = Number(term) * 12;
  const m = r ? (P * r) / (1 - Math.pow(1 + r, -n)) : P / n;
  return (
    <div className="box">
      <h3 style={{ fontSize: "1.4rem" }}>Estimate your payment</h3>
      <div className="calc-out num">{money(Math.round(m))}</div>
      <div className="small">per month, principal and interest</div>
      <div className="two">
        <div className="field"><label htmlFor="cDown">Down payment %</label><input id="cDown" type="number" min={0} max={100} value={down} onChange={(e) => setDown(e.target.value)} /></div>
        <div className="field"><label htmlFor="cRate">Rate %</label><input id="cRate" type="number" step={0.05} min={0} value={rate} onChange={(e) => setRate(e.target.value)} /></div>
      </div>
      <div className="field"><label htmlFor="cTerm">Loan term</label>
        <select id="cTerm" value={term} onChange={(e) => setTerm(e.target.value)}><option value="30">30 years</option><option value="15">15 years</option></select>
      </div>
      <div className="small">Plus about {money(Math.round(tax / 12))}/mo in property taxes, before insurance.</div>
    </div>
  );
}
