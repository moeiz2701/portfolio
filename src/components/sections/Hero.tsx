"use client";
import { motion, useReducedMotion } from "motion/react";
import { fadeUp, wipeUp } from "@/lib/motion";
import { site } from "@/data/site";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { PixelBox } from "@/components/ui/PixelBox";
import { Portal } from "@/components/ui/Portal";
import { HairlineGrid } from "@/components/ui/HairlineGrid";

export function Hero() {
  const reduce = useReducedMotion();
  const initial = reduce ? false : "hidden";

  return (
    <section
      className="relative flex min-h-screen flex-col justify-center overflow-hidden"
      style={{ paddingInline: "var(--gutter)", paddingBlock: "6rem" }}
      aria-label="Intro"
    >
      <HairlineGrid tone="ink" />

      {/* Faint portal behind the name, right of center */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute right-[2%] top-1/2 z-0 hidden -translate-y-1/2 text-paper sm:block"
        initial={reduce ? false : { opacity: 0, scale: 0.96 }}
        animate={{ opacity: 0.3, scale: 1 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      >
        <Portal className="h-[min(75vh,720px)] w-[min(75vh,720px)]" rings={11} />
      </motion.div>

      <div className="relative z-10 max-w-[1600px]">
        <motion.div initial={initial} animate="show" variants={fadeUp} custom={5}>
          <Eyebrow index="00" label="PORTFOLIO ’26" />
        </motion.div>

        <h1
          className="mt-6 font-display leading-[0.9] tracking-[-0.03em] text-paper"
          style={{ fontSize: "clamp(3.5rem, 12vw, 11rem)" }}
        >
          <span className="block overflow-hidden">
            <motion.span
              className="block"
              variants={wipeUp}
              custom={2}
              initial={initial}
              animate="show"
            >
              {site.nameLines[0]}
            </motion.span>
          </span>
          <span className="block overflow-hidden">
            <motion.span
              className="block"
              variants={wipeUp}
              custom={3}
              initial={initial}
              animate="show"
            >
              {site.nameLines[1]}
            </motion.span>
          </span>
        </h1>

        <motion.p
          className="mt-8 font-display tracking-[-0.01em] text-paper"
          style={{ fontSize: "clamp(1.25rem, 3vw, 2.5rem)" }}
          variants={fadeUp}
          custom={6}
          initial={initial}
          animate="show"
        >
          {"Full-Stack Developer "}
          <span className="text-paper/40">·</span>
          {" "}
          <span className="text-acid">AI</span>
          {" & Automation Expert"}
        </motion.p>

        <motion.div
          className="mt-12 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between"
          variants={fadeUp}
          custom={7}
          initial={initial}
          animate="show"
        >
          <span className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.18em] text-paper/70">
            <span className="h-2 w-2 rounded-full bg-acid" />
            {site.location} · {site.timezone}
          </span>
          <PixelBox>STATUS: OPEN TO WORK ▸▸▸</PixelBox>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        className="absolute bottom-8 left-[var(--gutter)] flex items-center gap-3"
        variants={fadeUp}
        custom={9}
        initial={initial}
        animate="show"
      >
        <span className="font-mono text-[0.7rem] uppercase tracking-[0.3em] text-paper/60">
          Scroll
        </span>
        <motion.span
          aria-hidden
          className="block h-8 w-px bg-paper/40"
          animate={reduce ? {} : { scaleY: [0.3, 1, 0.3], originY: 0 }}
          transition={{ duration: 1.8, ease: "easeInOut", repeat: Infinity }}
        />
      </motion.div>
    </section>
  );
}
