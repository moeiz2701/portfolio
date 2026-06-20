"use client";
import { motion, useReducedMotion } from "motion/react";
import { fadeUp, wipeUp, viewportOnce } from "@/lib/motion";
import { site } from "@/data/site";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Portal } from "@/components/ui/Portal";
import { HairlineGrid } from "@/components/ui/HairlineGrid";
import { Marquee } from "@/components/ui/Marquee";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { Footer } from "@/components/layout/Footer";

export function Cta() {
  const reduce = useReducedMotion();
  return (
    <>
      <section
        id="contact"
        className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-ink text-paper"
        style={{ paddingInline: "var(--gutter)", paddingBlock: "var(--section-py)" }}
        aria-labelledby="cta-heading"
      >
        <HairlineGrid tone="ink" />
        <div
          aria-hidden
          className="pointer-events-none absolute -left-[10%] bottom-[-10%] hidden text-paper opacity-[0.24] sm:block"
        >
          <Portal className="h-[min(70vh,640px)] w-[min(70vh,640px)]" rings={10} />
        </div>

        <div className="relative z-10 max-w-[1600px]">
          <Eyebrow index="✦" label="CONTACT" />

          <h2
            id="cta-heading"
            className="mt-6 font-display leading-[0.9] tracking-[-0.03em]"
            style={{ fontSize: "clamp(3rem, 11vw, 10rem)" }}
          >
            <span className="block overflow-hidden">
              <motion.span
                className="block"
                variants={wipeUp}
                custom={0}
                initial={reduce ? false : "hidden"}
                whileInView="show"
                viewport={viewportOnce}
              >
                {site.ctaHeadline[0]}
              </motion.span>
            </span>
            <span className="block overflow-hidden">
              <motion.span
                className="block text-acid"
                variants={wipeUp}
                custom={1}
                initial={reduce ? false : "hidden"}
                whileInView="show"
                viewport={viewportOnce}
              >
                {site.ctaHeadline[1]}
              </motion.span>
            </span>
          </h2>

          <motion.p
            className="mt-8 max-w-xl font-sans text-[clamp(1rem,1.5vw,1.35rem)] leading-relaxed text-paper/70"
            variants={fadeUp}
            custom={2}
            initial={reduce ? false : "hidden"}
            whileInView="show"
            viewport={viewportOnce}
          >
            {site.ctaSub}
          </motion.p>

          <motion.div
            className="mt-10 flex flex-wrap gap-3"
            variants={fadeUp}
            custom={3}
            initial={reduce ? false : "hidden"}
            whileInView="show"
            viewport={viewportOnce}
          >
            <MagneticButton href={`mailto:${site.email}`} acid>
              EMAIL ME ▸
            </MagneticButton>
            <MagneticButton href={site.links.github} external>
              VIEW GITHUB ↗
            </MagneticButton>
            <MagneticButton href={site.links.linkedin} external>
              LINKEDIN ↗
            </MagneticButton>
          </motion.div>
        </div>

        <div className="relative z-10 mt-[clamp(3rem,8vh,6rem)]">
          <Marquee
            items={["AVAILABLE", "FULL-STACK", "AI · AUTOMATION", "UTC+5", "OPEN TO WORK"]}
          />
        </div>
      </section>

      <Footer />
    </>
  );
}
