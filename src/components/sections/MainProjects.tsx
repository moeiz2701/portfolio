"use client";
import { motion, useReducedMotion } from "motion/react";
import { fadeUp, viewportOnce } from "@/lib/motion";
import { projects } from "@/data/projects";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Pill } from "@/components/ui/Pill";
import { ShotWell } from "@/components/ui/ShotWell";
import { TiltedShot } from "@/components/ui/TiltedShot";

function Thesis({
  text,
  accent,
  className,
}: {
  text: string;
  accent: string;
  className?: string;
}) {
  const idx = text.toLowerCase().indexOf(accent.toLowerCase());
  if (idx === -1) return <span className={className}>{text}</span>;
  return (
    <span className={className}>
      {text.slice(0, idx)}
      <span className="text-acid">{text.slice(idx, idx + accent.length)}</span>
      {text.slice(idx + accent.length)}
    </span>
  );
}

export function MainProjects() {
  const reduce = useReducedMotion();

  return (
    <section id="projects" aria-label="Main projects">
      {projects.map((p, idx) => {
        const isInk = p.tone === "ink";
        const line = isInk ? "var(--line-on-ink)" : "var(--line-on-paper)";
        const dim = isInk ? "text-paper/65" : "text-ink/60";
        return (
          <div
            key={p.index}
            className={`relative flex min-h-screen flex-col justify-center overflow-hidden ${
              isInk ? "bg-ink text-paper" : "bg-paper text-ink"
            }`}
            style={{ paddingInline: "var(--gutter)", paddingBlock: "var(--section-py)" }}
          >
            <div className="mx-auto w-full max-w-[1600px]">
              {idx === 0 && (
                <div className="mb-12">
                  <Eyebrow index="✦" label="SELECTED WORK" />
                </div>
              )}

              {/* Label row */}
              <motion.div
                className="flex flex-wrap items-end justify-between gap-4 border-b pb-6"
                style={{ borderColor: line }}
                variants={fadeUp}
                initial={reduce ? false : "hidden"}
                whileInView="show"
                viewport={viewportOnce}
              >
                <div>
                  <div className={`font-mono text-xs uppercase tracking-[0.2em] ${dim}`}>
                    [ {p.index} ]
                  </div>
                  <h3
                    className="mt-2 font-display tracking-[-0.02em]"
                    style={{ fontSize: "clamp(1.6rem, 3.2vw, 2.9rem)" }}
                  >
                    {p.name}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className={`font-mono text-xs uppercase tracking-[0.18em] ${dim}`}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* Shot */}
              <div className="mt-[clamp(2.5rem,6vh,5rem)]">
                <TiltedShot className="mx-auto w-[min(92vw,1100px)]">
                  <ShotWell
                    src={p.shot}
                    alt={p.name}
                    label={`${p.name.toLowerCase().replace(/[^a-z]/g, "")}.png`}
                    tone={p.tone}
                  />
                </TiltedShot>
              </div>

              {/* Detail */}
              <div className="mx-auto mt-[clamp(2.5rem,6vh,5rem)] max-w-3xl">
                <motion.div
                  style={{ fontSize: "clamp(1.5rem, 3vw, 2.75rem)" }}
                  variants={fadeUp}
                  initial={reduce ? false : "hidden"}
                  whileInView="show"
                  viewport={viewportOnce}
                >
                  <Thesis
                    text={p.thesis}
                    accent={p.thesisAccent}
                    className="block font-display leading-[1.05] tracking-[-0.02em]"
                  />
                </motion.div>
                <motion.p
                  className={`mt-5 font-sans text-[clamp(1rem,1.4vw,1.2rem)] leading-relaxed ${dim}`}
                  variants={fadeUp}
                  custom={1}
                  initial={reduce ? false : "hidden"}
                  whileInView="show"
                  viewport={viewportOnce}
                >
                  {p.description}
                </motion.p>

                <ul className="mt-7 space-y-3">
                  {p.modules.map((m, i) => (
                    <motion.li
                      key={m.name}
                      className="flex gap-3 text-[0.95rem] leading-relaxed"
                      variants={fadeUp}
                      custom={i + 2}
                      initial={reduce ? false : "hidden"}
                      whileInView="show"
                      viewport={viewportOnce}
                    >
                      <span className="mt-1 shrink-0 text-acid">▸</span>
                      <span>
                        <span className="font-mono text-xs uppercase tracking-[0.14em]">
                          {m.name}
                        </span>{" "}
                        <span className={dim}>— {m.detail}</span>
                      </span>
                    </motion.li>
                  ))}
                </ul>

                <div className="mt-8 flex flex-wrap items-center gap-2">
                  {p.stack.map((s) => (
                    <Pill key={s}>{s}</Pill>
                  ))}
                </div>

                {p.links.length > 0 && (
                  <div className="mt-7 flex flex-wrap items-center gap-6">
                    {p.links.map((l) => (
                      <a
                        key={l.label}
                        href={l.href}
                        {...(l.external
                          ? { target: "_blank", rel: "noopener noreferrer" }
                          : {})}
                        className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] transition-colors hover:text-acid"
                      >
                        ↗ {l.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}
