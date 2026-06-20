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

// clip-wipe reveal for big display lines
export const wipeUp: Variants = {
  hidden: { opacity: 0, clipPath: "inset(100% 0 0 0)", y: 20 },
  show: (i = 0) => ({
    opacity: 1,
    clipPath: "inset(0% 0 0 0)",
    y: 0,
    transition: { duration: 0.85, ease: EASE, delay: i * 0.09 },
  }),
};

export const viewportOnce = { once: true, amount: 0.25 } as const;
