export function SideRail() {
  return (
    <div
      aria-hidden
      // mix-blend-difference keeps the rail legible over both ink and paper sections
      className="pointer-events-none fixed right-0 top-0 z-40 hidden h-screen w-10 items-center justify-center mix-blend-difference lg:flex"
    >
      <div className="flex items-center gap-6" style={{ writingMode: "vertical-rl" }}>
        <span className="font-mono text-[0.7rem] uppercase tracking-[0.35em] text-white/80">
          ABDUL MOEIZ
        </span>
        <span className="h-16 w-px bg-white/40" />
        <span className="font-mono text-[0.7rem] uppercase tracking-[0.35em] text-white/80">
          &apos;26
        </span>
      </div>
    </div>
  );
}
