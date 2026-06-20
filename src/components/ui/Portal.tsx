export function Portal({
  className = "",
  rings = 10,
}: {
  className?: string;
  rings?: number;
}) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 600 600"
      className={`pointer-events-none ${className}`}
      fill="none"
    >
      {Array.from({ length: rings }).map((_, i) => {
        const inset = 8 + i * (292 / rings);
        const w = 600 - inset * 2;
        const h = 600 - inset * 2;
        const r = Math.min(w, h) / 2;
        return (
          <rect
            key={i}
            x={inset}
            y={inset}
            width={w}
            height={h}
            rx={r}
            stroke="currentColor"
            strokeWidth={1}
            opacity={0.4 + (i / rings) * 0.4}
          />
        );
      })}
    </svg>
  );
}
