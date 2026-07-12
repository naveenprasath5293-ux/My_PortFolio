import { motion } from "framer-motion";
import { AlertTriangle, Lightbulb, CheckCircle2 } from "lucide-react";
import SectionHeading from "../SectionHeading";

export default function Challenges({ challenges }) {
  return (
    <section className="border-t border-border-soft/60 bg-void px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <SectionHeading eyebrow="challenges" title="What got in the way" />

        <div className="grid gap-6 md:grid-cols-2">
          {challenges.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: (i % 2) * 0.08, ease: "easeOut" }}
              className="glass rounded-2xl p-6"
            >
              <h3 className="mb-4 font-display text-base font-semibold text-text">
                {item.title}
              </h3>

              <div className="space-y-4">
                <div className="flex gap-3">
                  <AlertTriangle size={16} className="mt-0.5 shrink-0 text-cyan-soft" />
                  <div>
                    <p className="font-mono text-[11px] uppercase tracking-wide text-muted">
                      Challenge
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-muted">
                      {item.challenge}
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Lightbulb size={16} className="mt-0.5 shrink-0 text-cyan-soft" />
                  <div>
                    <p className="font-mono text-[11px] uppercase tracking-wide text-muted">
                      Solution
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-muted">
                      {item.solution}
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-cyan-soft" />
                  <div>
                    <p className="font-mono text-[11px] uppercase tracking-wide text-muted">
                      Result
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-muted">
                      {item.result}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
