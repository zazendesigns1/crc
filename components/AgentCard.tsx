import { BROKERAGE } from "@/lib/listings";

export default function AgentCard({ sub }: { sub?: string }) {
  return (
    <div className="agent">
      <div className="avatar">M</div>
      <div><strong>{BROKERAGE.agent}</strong><span>{sub ?? `${BROKERAGE.title} · ${BROKERAGE.phone}`}</span></div>
    </div>
  );
}
