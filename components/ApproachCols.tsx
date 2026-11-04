const APPROACH = [
  { title: "Experience", text: "Three decades of real estate legal experience bring depth and perspective to every transaction.", d: "M12 3 4 7v5c0 4.4 3.4 8.3 8 9 4.6-.7 8-4.6 8-9V7l-8-4zM9 12l2 2 4-4" },
  { title: "Insight", text: "A clear understanding of the property, the market and what shapes ownership and value.", d: "M2.5 12s3.5-7 9.5-7 9.5 7 9.5 7-3.5 7-9.5 7-9.5-7-9.5-7zM12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" },
  { title: "Personal Representation", text: "A boutique approach built on relationships, responsiveness and your goals.", d: "M8 11a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM2 20c0-3.3 2.7-5.5 6-5.5s6 2.2 6 5.5M16 4.3a3.5 3.5 0 0 1 0 6.4M18 14.5c2 .8 4 2.5 4 5.5" },
];

export default function ApproachCols() {
  return (
    <div className="v2approach-grid">
      {APPROACH.map((a) => (
        <div key={a.title} className="v2approach-col">
          <span className="v2approach-icon"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={a.d} /></svg></span>
          <h3>{a.title}</h3>
          <p>{a.text}</p>
        </div>
      ))}
    </div>
  );
}
