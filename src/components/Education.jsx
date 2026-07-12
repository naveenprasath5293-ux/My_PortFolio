import { motion } from "framer-motion";
import { GraduationCap, Calendar } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { EDUCATION } from "../data/education";

export default function Education() {
  return (
    <section
      id="education"
      className="border-t border-border-soft/60 bg-void px-6 py-24"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="education" title="Academic background" />

        <div className="space-y-6">
          {EDUCATION.map((edu, i) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
              className="glass rounded-2xl p-6 sm:p-8"
            >
              <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-cyan/10 text-cyan-soft">
                  <GraduationCap size={24} strokeWidth={1.75} />
                </span>

                <div className="flex-1">
                  <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2">
                    <h3 className="font-display text-xl font-semibold text-text">
                      {edu.degree}
                    </h3>
                    <span className="rounded-full border border-cyan/30 px-3 py-1 font-mono text-xs text-cyan-soft">
                      {edu.status}
                    </span>
                  </div>

                  <p className="mt-1 text-muted">{edu.institution}</p>

                  <div className="mt-2 flex items-center gap-2 font-mono text-xs text-muted">
                    <Calendar size={14} />
                    {edu.period}
                  </div>

                  {edu.coursework?.length > 0 && (
                    <div className="mt-5 flex flex-wrap gap-2">
                      {edu.coursework.map((course) => (
                        <span
                          key={course}
                          className="rounded-md border border-border-soft px-3 py-1 font-mono text-xs text-muted"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
