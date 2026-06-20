"use client";
import { motion, useReducedMotion } from "motion/react";
import { wipeUp, viewportOnce } from "@/lib/motion";
import { site } from "@/data/site";

export function Footer() {
  const reduce = useReducedMotion();
  return (
    <footer className="relative bg-ink text-paper">
      <div className="border-t-2 border-[var(--line-on-ink)]" />

      {/* Engraved name */}
      <div
        className="overflow-hidden"
        style={{ paddingInline: "var(--gutter)", paddingTop: "clamp(3rem,8vh,7rem)" }}
      >
        <motion.span
          className="block"
          variants={wipeUp}
          initial={reduce ? false : "hidden"}
          whileInView="show"
          viewport={viewportOnce}
        >
          <span
            className="stroke-text engrave block cursor-default font-display leading-[0.85] tracking-[-0.03em]"
            style={{ fontSize: "clamp(3rem, 16vw, 16rem)" }}
          >
            ABDUL MOEIZ
          </span>
        </motion.span>
      </div>

      {/* Bottom row */}
      <div
        className="flex flex-col gap-4 py-8 sm:flex-row sm:items-center sm:justify-between"
        style={{ paddingInline: "var(--gutter)" }}
      >
        <span className="font-mono text-xs uppercase tracking-[0.18em] text-paper/55">
          © 2026 · {site.location}
        </span>
        <div className="flex flex-wrap items-center gap-6 font-mono text-xs uppercase tracking-[0.18em]">
          <a
            href={site.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-acid"
          >
            GitHub ↗
          </a>
          <a
            href={site.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-acid"
          >
            LinkedIn ↗
          </a>
          <a href={site.phoneHref} className="transition-colors hover:text-acid">
            {site.phone}
          </a>
        </div>
      </div>
    </footer>
  );
}
