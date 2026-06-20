export function Pill({
  children,
  acid = false,
}: {
  children: React.ReactNode;
  acid?: boolean;
}) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-current px-3.5 py-1 font-mono text-[0.68rem] uppercase tracking-[0.12em] whitespace-nowrap">
      {acid && <span className="h-1.5 w-1.5 rounded-full bg-acid" />}
      {children}
    </span>
  );
}
