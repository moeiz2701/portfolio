"use client";
import { motion, useReducedMotion } from "motion/react";

export function Marquee({
  items,
  bordered = true,
  duration = 22,
}: {
  items: string[];
  bordered?: boolean;
  duration?: number;
}) {
  const reduce = useReducedMotion();
  const row = [...items, ...items];
  return (
    <div
      className={`relative w-full overflow-hidden ${
        bordered ? "border-y-2 border-current" : ""
      } py-3`}
    >
      <motion.div
        className="flex w-max gap-10 font-mono text-[clamp(0.9rem,1.4vw,1.25rem)] uppercase tracking-[0.12em] whitespace-nowrap italic"
        animate={reduce ? {} : { x: ["0%", "-50%"] }}
        transition={{ duration, ease: "linear", repeat: Infinity }}
      >
        {row.map((t, i) => (
          <span key={i} className="flex items-center gap-10">
            {t}
            <span className="not-italic opacity-70">✦</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}
