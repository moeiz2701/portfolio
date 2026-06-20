"use client";
import { motion, useReducedMotion, type Variants } from "motion/react";
import { fadeUp, viewportOnce } from "@/lib/motion";
import type { ElementType } from "react";

type MotionTag = "div" | "span" | "li" | "p" | "section" | "h2" | "h3";

export function Reveal({
  children,
  i = 0,
  as = "div",
  variants = fadeUp,
  className = "",
}: {
  children: React.ReactNode;
  i?: number;
  as?: MotionTag;
  variants?: Variants;
  className?: string;
}) {
  const reduce = useReducedMotion();
  if (reduce) {
    const Tag = as as ElementType;
    return <Tag className={className}>{children}</Tag>;
  }
  const M =
    (motion as unknown as Record<string, ElementType>)[as] ?? motion.div;
  return (
    <M
      className={className}
      variants={variants}
      custom={i}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
    >
      {children}
    </M>
  );
}
