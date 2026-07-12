import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import SectionHeading from "../SectionHeading";

export default function Architecture({ flow }) {
  return (
    <section className="border-t border-border-soft/60 bg-void px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <SectionHeading eyebrow="architecture" title="How it's wired together" />

        <div className="flex flex-col items-center">
          {flow.map((step, i) => (
            <div key={step.id} className="flex flex-col items-center">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.4, delay: i * 0.1, ease: "easeOut" }}
                className="glass flex w-64 items-center gap-3 rounded-xl px-5 py-4"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-cyan/10 text-cyan-soft">
                  <step.icon size={18} strokeWidth={1.75} />
                </span>
                <span className="font-mono text-sm text-text">{step.label}</span>
              </motion.div>

              {i < flow.length - 1 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.3, delay: i * 0.1 + 0.15 }}
                  className="py-2 text-muted"
                  aria-hidden="true"
                >
                  <ArrowDown size={18} />
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
