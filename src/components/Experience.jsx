import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { EXPERIENCE } from "../data/experience";

export default function Experience() {
  return (
    <section
      id="experience"
      className="border-t border-border-soft/60 bg-void px-6 py-24"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="experience" title="Where I've worked" />

        <div className="relative">
          {/* Timeline spine — hidden on mobile, sits left of cards on desktop */}
          <div
            aria-hidden="true"
            className="absolute left-[19px] top-2 hidden h-[calc(100%-1rem)] w-px bg-border-soft sm:block"
          />

          <div className="space-y-8">
            {EXPERIENCE.map((exp, i) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
                className="relative sm:pl-14"
              >
                <span className="absolute left-0 top-0 hidden h-10 w-10 items-center justify-center rounded-full border border-cyan/30 bg-void text-cyan-soft sm:flex">
                  <Briefcase size={16} strokeWidth={1.75} />
                </span>

                <div className="glass rounded-2xl p-6 sm:p-8">
                  <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2">
                    <h3 className="font-display text-xl font-semibold text-text">
                      {exp.role}
                    </h3>
                    <span className="rounded-full border border-cyan/30 px-3 py-1 font-mono text-xs text-cyan-soft">
                      {exp.period}
                    </span>
                  </div>

                  <p className="mt-1 text-cyan-soft/90">{exp.org}</p>

                  <ul className="mt-4 space-y-2">
                    {exp.points.map((point) => (
                      <li
                        key={point}
                        className="flex gap-2 text-sm leading-relaxed text-muted"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-2 h-1 w-1 shrink-0 rounded-full bg-cyan"
                        />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
