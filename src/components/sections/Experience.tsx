"use client";
import { motion, useReducedMotion } from "motion/react";
import { fadeUp, viewportOnce } from "@/lib/motion";
import { experience } from "@/data/experience";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Pill } from "@/components/ui/Pill";
import { ShotWell } from "@/components/ui/ShotWell";
import { TiltedShot } from "@/components/ui/TiltedShot";

export function Experience() {
  const reduce = useReducedMotion();

  return (
    <section id="experience" aria-label="Experience">
      {experience.map((role, idx) => {
        const isInk = role.tone === "ink";
        const line = isInk ? "var(--line-on-ink)" : "var(--line-on-paper)";
        const dim = isInk ? "text-paper/60" : "text-ink/55";
        return (
          <div
            key={role.company}
            className={`relative flex min-h-screen flex-col justify-center overflow-hidden ${
              isInk ? "bg-ink text-paper" : "bg-paper text-ink"
            }`}
            style={{ paddingInline: "var(--gutter)", paddingBlock: "var(--section-py)" }}
          >
            <div className="mx-auto w-full max-w-[1600px]">
              {idx === 0 && (
                <div className="mb-12">
                  <Eyebrow index="02" label="EXPERIENCE" />
                </div>
              )}

              {/* Pinned labels */}
              <motion.div
                className="flex flex-wrap items-start justify-between gap-4 border-b pb-6"
                style={{ borderColor: line }}
                variants={fadeUp}
                initial={reduce ? false : "hidden"}
                whileInView="show"
                viewport={viewportOnce}
              >
                <div>
                  <div className={`font-mono text-xs uppercase tracking-[0.2em] ${dim}`}>
                    {role.role}
                  </div>
                  <div
                    className="mt-2 font-display tracking-[-0.02em]"
                    style={{ fontSize: "clamp(1.5rem, 3vw, 2.75rem)" }}
                  >
                    {role.company}
                  </div>
                </div>
                <div
                  className={`text-right font-mono text-xs uppercase tracking-[0.2em] ${dim}`}
                >
                  <div>{role.period}</div>
                  <div className="mt-2">{role.location}</div>
                </div>
              </motion.div>

              {/* Central shot */}
              <div className="mt-[clamp(2.5rem,6vh,5rem)]">
                <TiltedShot className="mx-auto w-[min(92vw,1100px)]">
                  <ShotWell
                    src={role.shot}
                    alt={`${role.company} — ${role.role}`}
                    label={`${role.company.toLowerCase().replace(/[^a-z]/g, "")}.png`}
                    tone={role.tone}
                  />
                </TiltedShot>
              </div>

              {/* Detail */}
              <motion.div
                className="mx-auto mt-[clamp(2.5rem,6vh,5rem)] max-w-3xl"
                variants={fadeUp}
                initial={reduce ? false : "hidden"}
                whileInView="show"
                viewport={viewportOnce}
              >
                <p className="font-sans text-[clamp(1rem,1.4vw,1.25rem)] leading-relaxed">
                  {role.description}
                </p>
                <ul className="mt-6 space-y-3">
                  {role.highlights.map((h) => (
                    <li key={h} className="flex gap-3 text-[0.95rem] leading-relaxed">
                      <span className="mt-1 shrink-0 text-acid">▸</span>
                      <span className={dim}>{h}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-7 flex flex-wrap items-center gap-2">
                  {role.stack.map((s) => (
                    <Pill key={s}>{s}</Pill>
                  ))}
                </div>
                {role.link && (
                  <a
                    href={role.link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-7 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] transition-colors hover:text-acid"
                  >
                    ↗ {role.link.label}
                  </a>
                )}
              </motion.div>
            </div>
          </div>
        );
      })}
    </section>
  );
}
