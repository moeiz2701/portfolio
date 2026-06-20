"use client";
import { motion, useReducedMotion } from "motion/react";
import { fadeUp, wipeUp, viewportOnce } from "@/lib/motion";
import { skills } from "@/data/skills";
import { Eyebrow } from "@/components/ui/Eyebrow";

export function Skills() {
  const reduce = useReducedMotion();
  return (
    <section
      id="skills"
      className="relative bg-ink text-paper"
      style={{ paddingInline: "var(--gutter)", paddingBlock: "var(--section-py)" }}
      aria-labelledby="skills-heading"
    >
      <div className="mx-auto max-w-[1600px]">
        <Eyebrow index="03" label="CAPABILITIES" />
        <motion.h2
          id="skills-heading"
          className="mt-5 font-display leading-[0.95] tracking-[-0.02em] text-paper/70"
          style={{ fontSize: "clamp(2.5rem, 7vw, 6rem)" }}
          variants={wipeUp}
          initial={reduce ? false : "hidden"}
          whileInView="show"
          viewport={viewportOnce}
        >
          What I build with
        </motion.h2>

        <div className="mt-12 border-t-2 border-[var(--line-on-ink)]">
          {skills.map((row, i) => (
            <motion.div
              key={row.category}
              className="group grid grid-cols-1 gap-2 border-b border-[var(--line-on-ink)] py-6 md:grid-cols-[220px_1fr] md:gap-8"
              variants={fadeUp}
              custom={i}
              initial={reduce ? false : "hidden"}
              whileInView="show"
              viewport={viewportOnce}
            >
              <div className="flex items-baseline gap-2 font-mono text-xs uppercase tracking-[0.2em] text-paper/55 transition-colors group-hover:text-paper">
                <span className="text-acid opacity-0 transition-opacity group-hover:opacity-100">
                  ▸
                </span>
                {row.category}
              </div>
              <p className="font-sans text-[clamp(1rem,1.4vw,1.2rem)] leading-relaxed text-paper/75 transition-colors group-hover:text-paper">
                {row.items.join("  ·  ")}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
