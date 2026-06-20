"use client";
import { ReactLenis } from "lenis/react";
import "lenis/dist/lenis.css";

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.1, // 0.05–0.2; lower = smoother/laggier
        duration: 1.2,
        smoothWheel: true,
        syncTouch: false, // false = better mobile perf (smoothTouch was removed in v1)
        autoRaf: true, // let Lenis own the RAF loop
      }}
    >
      {children}
    </ReactLenis>
  );
}
