import type { Variants } from "motion/react";

export const EASE = [0.16, 1, 0.3, 1] as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE, delay: i * 0.08 },
  }),
};

// Rise-reveal for big display lines. Paired with an `overflow-hidden` wrapper
// (hero name, CTA, footer) this reads as a masked wipe; on its own it's a clean
// rise-fade. Uses transform/opacity only — clip-path animation proved unreliable
// with motion v12 + React 19 (elements stuck at inset(100%)).
export const wipeUp: Variants = {
  hidden: { opacity: 0, y: "0.6em" },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, ease: EASE, delay: i * 0.09 },
  }),
};

export const viewportOnce = { once: true, amount: 0.25 } as const;
