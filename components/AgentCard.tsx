import Image from "next/image";
import { BROKERAGE } from "@/lib/listings";

export default function AgentCard({ sub }: { sub?: string }) {
  return (
    <div className="agent">
      <Image className="avatar" src="/michele-headshot.webp" alt={BROKERAGE.agent} width={58} height={58} style={{ objectFit: "cover" }} />
      <div><strong>{BROKERAGE.agent}</strong><span>{sub ?? `${BROKERAGE.title} · ${BROKERAGE.phone}`}</span></div>
    </div>
  );
}
