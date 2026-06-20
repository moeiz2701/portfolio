"use client";
import { motion, useReducedMotion } from "motion/react";
import { wipeUp, viewportOnce } from "@/lib/motion";
import { HairlineGrid } from "@/components/ui/HairlineGrid";

type QuoteProps = {
  lines: string[];
  accent: string;
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
          className="absolute left-0 w-full bg-acid"
          style={{ height: "0.06em", bottom: "0.04em" }}
        />
      </span>
      {after}
    </>
  );
}

export function Quote({ lines, accent, uppercase = true }: QuoteProps) {
  const reduce = useReducedMotion();

  return (
    <section
      className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-ink text-paper"
      style={{ paddingInline: "var(--gutter)", paddingBlock: "clamp(5rem, 10vh, 8rem)" }}
    >
      <HairlineGrid tone="ink" />

      <div className="relative z-10 w-full">
        {lines.map((line, i) => {
          // Size each line to roughly span the content width, capped by height so
          // short lines don't get absurdly tall. Gives the kinetic giant-type look.
          const len = Math.max(line.length, 4);
          const fontSize = `clamp(1.75rem, min(${(115 / len).toFixed(2)}vw, 26vh), 13rem)`;
          return (
            <motion.div
              key={i}
              className="block font-display leading-[1.08] tracking-[-0.03em]"
              style={{ fontSize }}
              variants={wipeUp}
              custom={i}
              initial={reduce ? false : "hidden"}
              whileInView="show"
              viewport={viewportOnce}
            >
              {renderLine(line, accent, uppercase)}
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
