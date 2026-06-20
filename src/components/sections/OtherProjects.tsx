"use client";
import { useEffect, useRef, useState } from "react";
import { useLenis } from "lenis/react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useReducedMotion,
  type MotionValue,
} from "motion/react";
import { fadeUp, wipeUp, viewportOnce } from "@/lib/motion";
import { otherProjects, type OtherProject } from "@/data/other-projects";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Pill } from "@/components/ui/Pill";
import { ShotWell } from "@/components/ui/ShotWell";

function Card({
  p,
  i,
  onOpen,
}: {
  p: OtherProject;
  i: number;
  onOpen: (p: OtherProject) => void;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.button
      type="button"
      onClick={() => onOpen(p)}
      className="group block w-full cursor-pointer text-left"
      variants={fadeUp}
      custom={i}
      initial={reduce ? false : "hidden"}
      whileInView="show"
      viewport={viewportOnce}
    >
      <div className="relative">
        <ShotWell
          src={p.image}
          alt={p.name}
          label={`${p.name.toLowerCase().replace(/[^a-z]/g, "")}.png`}
          ratio="4 / 3"
          sizes="(max-width:768px) 100vw, 45vw"
        />
        {/* acid border on hover/focus */}
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 border-2 border-acid opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100"
        />
        {/* DISCOVER overlay */}
        <span className="pointer-events-none absolute inset-0 flex items-center justify-center bg-ink/45 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
          <span className="border-2 border-paper px-4 py-2 font-mono text-xs uppercase tracking-[0.2em] text-paper">
            Discover ▸
          </span>
        </span>
      </div>

      <p className="mt-4 font-sans text-sm leading-relaxed text-paper/60">{p.blurb}</p>
      <div className="mt-2 flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-paper">
        <span className="transition-colors group-hover:text-acid">{p.name}</span>
        <span className="text-paper/40">· {p.year}</span>
      </div>
      <div className="mt-3 flex flex-wrap gap-2">
        {p.tags.map((t) => (
          <Pill key={t}>{t}</Pill>
        ))}
      </div>
    </motion.button>
  );
}

function Column({
  items,
  y,
  startIndex,
  offset = false,
  onOpen,
}: {
  items: OtherProject[];
  y: MotionValue<number>;
  startIndex: number;
  offset?: boolean;
  onOpen: (p: OtherProject) => void;
}) {
  return (
    <motion.div
      style={{ y }}
      className={`flex flex-col gap-[clamp(2rem,4vw,3.5rem)] ${offset ? "md:mt-[12vh]" : ""}`}
    >
      {items.map((p, idx) => (
        <Card key={p.name} p={p} i={startIndex + idx} onOpen={onOpen} />
      ))}
    </motion.div>
  );
}

function DetailModal({
  project,
  onClose,
}: {
  project: OtherProject | null;
  onClose: () => void;
}) {
  const lenis = useLenis();

  useEffect(() => {
    if (!project) return;
    lenis?.stop();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      lenis?.start();
      window.removeEventListener("keydown", onKey);
    };
  }, [project, lenis, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/85 p-[var(--gutter)]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={project.name}
        >
          <motion.div
            className="relative max-h-[88vh] w-full max-w-3xl overflow-y-auto border-2 border-[var(--line-on-ink)] bg-smoke"
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.98 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Close"
              className="absolute right-4 top-4 z-10 border-2 border-paper bg-ink/60 px-3 py-1 font-mono text-xs uppercase tracking-[0.18em] text-paper transition-colors hover:bg-paper hover:text-ink"
            >
              Close ✕
            </button>

            <ShotWell
              src={project.image}
              alt={project.name}
              label={`${project.name.toLowerCase().replace(/[^a-z]/g, "")}.png`}
              ratio="16 / 9"
              sizes="(max-width:768px) 100vw, 700px"
            />

            <div className="p-[clamp(1.5rem,3vw,2.5rem)]">
              <div className="flex items-baseline gap-3">
                <h3
                  className="font-display tracking-[-0.02em] text-paper"
                  style={{ fontSize: "clamp(1.6rem, 4vw, 2.5rem)" }}
                >
                  {project.name}
                </h3>
                <span className="font-mono text-xs uppercase tracking-[0.18em] text-paper/50">
                  · {project.year}
                </span>
              </div>

              <p className="mt-5 font-sans text-[clamp(0.95rem,1.3vw,1.1rem)] leading-relaxed text-paper/75">
                {project.detail}
              </p>

              <div className="mt-6 flex flex-wrap gap-2 text-paper">
                {project.tags.map((t) => (
                  <Pill key={t}>{t}</Pill>
                ))}
              </div>

              {project.href && (
                <a
                  href={project.href.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-7 inline-flex items-center gap-3 border-2 border-paper px-6 py-3 font-mono text-xs uppercase tracking-[0.18em] text-paper transition-colors hover:bg-paper hover:text-ink"
                >
                  ↗ {project.href.label}
                </a>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export function OtherProjects() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const [active, setActive] = useState<OtherProject | null>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const yLeftRaw = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const yRightRaw = useTransform(scrollYProgress, [0, 1], [-30, 30]);
  const zero = useTransform(scrollYProgress, [0, 1], [0, 0]);
  const yLeft = reduce ? zero : yLeftRaw;
  const yRight = reduce ? zero : yRightRaw;

  const half = Math.ceil(otherProjects.length / 2);
  const left = otherProjects.slice(0, half);
  const right = otherProjects.slice(half);

  return (
    <section
      ref={ref}
      className="relative bg-ink text-paper"
      style={{ paddingInline: "var(--gutter)", paddingBlock: "var(--section-py)" }}
      aria-labelledby="other-heading"
    >
      <div className="mx-auto max-w-[1600px]">
        <Eyebrow index="✦" label="OTHER WORK" />
        <motion.h2
          id="other-heading"
          className="mt-5 font-display leading-[0.95] tracking-[-0.02em]"
          style={{ fontSize: "clamp(2.5rem, 7vw, 6rem)" }}
          variants={wipeUp}
          initial={reduce ? false : "hidden"}
          whileInView="show"
          viewport={viewportOnce}
        >
          {"Side projects & experiments"}
        </motion.h2>

        <div className="mt-[clamp(3rem,7vh,6rem)] grid grid-cols-1 gap-[clamp(2rem,4vw,3.5rem)] md:grid-cols-2">
          <Column items={left} y={yLeft} startIndex={0} onOpen={setActive} />
          <Column items={right} y={yRight} startIndex={left.length} offset onOpen={setActive} />
        </div>
      </div>

      <DetailModal project={active} onClose={() => setActive(null)} />
    </section>
  );
}
