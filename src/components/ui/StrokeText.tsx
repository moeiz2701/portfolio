export function StrokeText({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <span className={`stroke-text font-display ${className}`}>{children}</span>;
}
