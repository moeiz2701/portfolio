"use client";
import { useState } from "react";
import { useLenis } from "lenis/react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "motion/react";
import { site } from "@/data/site";
import { MagneticButton } from "@/components/ui/MagneticButton";

export function Header() {
  const lenis = useLenis();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();
  const bg = useTransform(scrollY, [0, 80], ["rgba(0,0,0,0)", "rgba(0,0,0,0.92)"]);

  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 80));

  const go = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    setOpen(false);
    if (id === "#top") {
      lenis?.scrollTo(0, {});
    } else {
      lenis?.scrollTo(id, { offset: -72 });
    }
  };

  return (
    <>
      <motion.header
        style={{ backgroundColor: bg, paddingInline: "var(--gutter)" }}
        className={`fixed inset-x-0 top-0 z-50 flex h-[72px] items-center justify-between transition-[border-color] duration-300 ${
          scrolled ? "border-b border-[var(--line-on-ink)]" : "border-b border-transparent"
        }`}
      >
        <a
          href="#top"
          onClick={go("#top")}
          className="font-display text-[1rem] tracking-[-0.02em] text-paper"
        >
          {site.name.toUpperCase()}
        </a>

        <nav className="hidden items-center gap-[clamp(1rem,2vw,2.5rem)] md:flex">
          {site.nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              onClick={go(n.href)}
              className="group relative font-mono text-xs uppercase tracking-[0.18em] text-paper/80 transition-colors hover:text-paper"
            >
              {n.label}
              <span className="absolute -bottom-1 left-0 h-[2px] w-full origin-left scale-x-0 bg-acid transition-transform duration-300 group-hover:scale-x-100" />
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <MagneticButton href={`mailto:${site.email}`} acid>
            EMAIL ✦
          </MagneticButton>
          <MagneticButton href={site.cv} download>
            CV ▸
          </MagneticButton>
        </div>

        {/* Mobile menu trigger */}
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-label="Toggle menu"
          className="border-2 border-current px-4 py-2 font-mono text-xs uppercase tracking-[0.18em] md:hidden"
        >
          {open ? "CLOSE ✕" : "MENU ▸"}
        </button>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
            animate={{ opacity: 1, clipPath: "inset(0 0 0% 0)" }}
            exit={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 flex flex-col justify-center bg-ink md:hidden"
            style={{ paddingInline: "var(--gutter)" }}
          >
            <nav className="flex flex-col gap-4">
              {site.nav.map((n) => (
                <a
                  key={n.href}
                  href={n.href}
                  onClick={go(n.href)}
                  className="font-display text-[clamp(2.5rem,12vw,4rem)] leading-none tracking-[-0.03em] text-paper"
                >
                  {n.label}
                </a>
              ))}
            </nav>
            <div className="mt-12 flex flex-wrap gap-3">
              <MagneticButton href={`mailto:${site.email}`} acid>
                EMAIL ✦
              </MagneticButton>
              <MagneticButton href={site.cv} download>
                DOWNLOAD CV ▸
              </MagneticButton>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
