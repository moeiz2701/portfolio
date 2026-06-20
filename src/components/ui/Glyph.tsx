type GlyphName = "star" | "play" | "plus" | "cross" | "arrow";

const GLYPHS: Record<GlyphName, string> = {
  star: "✦",
  play: "▸",
  plus: "+",
  cross: "✚",
  arrow: "↗",
};

export function Glyph({
  name = "star",
  className = "",
}: {
  name?: GlyphName;
  className?: string;
}) {
  return (
    <span aria-hidden className={`inline-block ${className}`}>
      {GLYPHS[name]}
    </span>
  );
}
