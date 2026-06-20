export function HairlineGrid({ tone = "ink" }: { tone?: "ink" | "paper" }) {
  const c = tone === "ink" ? "rgba(255,255,255,0.09)" : "rgba(0,0,0,0.13)";
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0"
      style={{
        backgroundImage: `linear-gradient(to right, ${c} 1px, transparent 1px), linear-gradient(to bottom, ${c} 1px, transparent 1px)`,
        backgroundSize: "80px 80px",
      }}
    />
  );
}
