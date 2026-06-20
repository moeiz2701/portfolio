import Image from "next/image";

export function ShotWell({
  src,
  alt,
  label,
  tone = "ink",
  ratio = "16 / 10",
  sizes = "(max-width:768px) 100vw, 70vw",
  priority = false,
}: {
  src?: string;
  alt?: string;
  label?: string;
  tone?: "ink" | "paper";
  ratio?: string;
  sizes?: string;
  priority?: boolean;
}) {
  const borderColor =
    tone === "paper" ? "rgba(0,0,0,0.35)" : "rgba(200,200,200,0.4)";
  return (
    <div
      className="relative w-full overflow-hidden border-2"
      style={{ aspectRatio: ratio, background: "var(--color-smoke)", borderColor }}
    >
      {src ? (
        <Image
          src={src}
          alt={alt ?? ""}
          fill
          priority={priority}
          unoptimized={src.endsWith(".gif")}
          sizes={sizes}
          className="object-cover object-top"
        />
      ) : (
        <>
          <span className="absolute left-3 top-3 font-mono text-xs uppercase tracking-[0.15em] text-paper/60">
            [{label ?? "screenshot.png"}]
          </span>
          <span
            aria-hidden
            className="absolute inset-0"
            style={{
              backgroundImage:
                "repeating-linear-gradient(45deg, rgba(200,200,200,0.04) 0 1px, transparent 1px 14px)",
            }}
          />
        </>
      )}
    </div>
  );
}
