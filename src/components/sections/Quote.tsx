"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import { wipeUp, viewportOnce } from "@/lib/motion";
import { HairlineGrid } from "@/components/ui/HairlineGrid";
import { StrokeText } from "@/components/ui/StrokeText";
import { Marquee } from "@/components/ui/Marquee";

type QuoteProps = {
  lines: string[];
  accent: string;
  marquee?: string[];
  uppercase?: boolean;
};

function renderLine(line: string, accent: string, uppercase: boolean) {
  const text = uppercase ? line.toUpperCase() : line;
  const needle = uppercase ? accent.toUpperCase() : accent;
  const idx = text.toLowerCase().indexOf(accent.toLowerCase());
  if (idx === -1) return text;
  const before = text.slice(0, idx);
  const match = text.slice(idx, idx + needle.length);
  const after = text.slice(idx + needle.length);
  return (
    <>
      {before}
      <span className="relative inline-block">
        {match}
        <span
          aria-hidden
          className="absolute -bottom-1 left-0 h-[3px] w-full bg-acid"
        />
      </span>
      {after}
    </>
  );
}

export function Quote({ lines, accent, marquee, uppercase = true }: QuoteProps) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const ghostX = useTransform(scrollYProgress, [0, 1], [-40, 40]);

  return (
    <section
      ref={ref}
      className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-ink text-paper"
      style={{ paddingInline: "var(--gutter)", paddingBlock: "var(--section-py)" }}
    >
      <HairlineGrid tone="ink" />

      {/* Ghost outline word drifting behind the stack */}
      {!reduce && (
        <motion.div
          aria-hidden
          style={{ x: ghostX }}
          className="pointer-events-none absolute -right-[5%] bottom-[8%] z-0 select-none opacity-[0.06]"
        >
          <StrokeText className="block leading-none" >
            <span style={{ fontSize: "clamp(6rem, 22vw, 22rem)" }}>
              {accent.toUpperCase()}
            </span>
          </StrokeText>
        </motion.div>
      )}

      <div className="relative z-10 max-w-[1600px]">
        {lines.map((line, i) => (
          <span key={i} className="block overflow-hidden">
            <motion.span
              className="block font-display leading-[0.95] tracking-[-0.03em]"
              style={{ fontSize: "clamp(2.5rem, 9vw, 8rem)" }}
              variants={wipeUp}
              custom={i}
              initial={reduce ? false : "hidden"}
              whileInView="show"
              viewport={viewportOnce}
            >
              {renderLine(line, accent, uppercase)}
            </motion.span>
          </span>
        ))}
      </div>

      {marquee && marquee.length > 0 && (
        <div className="relative z-10 mt-[clamp(3rem,6vh,6rem)]">
          <Marquee items={marquee} />
        </div>
      )}
    </section>
  );
}
