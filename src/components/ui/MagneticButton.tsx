"use client";
import { useRef } from "react";
import { motion, useReducedMotion, useMotionValue, useSpring } from "motion/react";

type Props = {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  acid?: boolean;
  download?: boolean;
  external?: boolean;
  className?: string;
};

export function MagneticButton({
  children,
  href,
  onClick,
  acid = false,
  download = false,
  external = false,
  className = "",
}: Props) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 250, damping: 18, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 250, damping: 18, mass: 0.4 });

  const handleMove = (e: React.MouseEvent) => {
    if (reduce || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    x.set((e.clientX - (r.left + r.width / 2)) * 0.25);
    y.set((e.clientY - (r.top + r.height / 2)) * 0.35);
  };
  const reset = () => {
    x.set(0);
    y.set(0);
  };

  const cls =
    "group inline-flex items-center gap-3 border-2 border-current px-6 py-3 font-mono text-xs uppercase tracking-[0.18em] transition-colors duration-200 hover:bg-current";
  const inner = (
    <span
      className={`flex items-center gap-3 ${
        acid ? "group-hover:text-acid" : "group-hover:text-ink"
      }`}
    >
      {children}
    </span>
  );

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      style={reduce ? undefined : { x: sx, y: sy }}
      className={`inline-flex ${className}`}
    >
      {href ? (
        <a
          href={href}
          className={cls}
          {...(download ? { download: true } : {})}
          {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        >
          {inner}
        </a>
      ) : (
        <button type="button" onClick={onClick} className={cls}>
          {inner}
        </button>
      )}
    </motion.div>
  );
}
