export function Eyebrow({
  index,
  label,
  className = "",
}: {
  index?: string;
  label: string;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center font-mono uppercase tracking-[0.2em] text-[clamp(0.7rem,0.9vw,0.8rem)] opacity-60 ${className}`}
    >
      {index && <span className="mr-2">[{index}]</span>}/ {label}
    </span>
  );
}
