import { motion } from "framer-motion";
import SectionHeading from "../SectionHeading";

export default function FutureRoadmap({ items }) {
  return (
    <section className="border-t border-border-soft/60 bg-void px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <SectionHeading eyebrow="roadmap" title="What's next" />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.06, ease: "easeOut" }}
              className="glass flex items-center gap-3 rounded-xl p-4"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-cyan/10 text-cyan-soft">
                <item.icon size={16} strokeWidth={1.75} />
              </span>
              <span className="text-sm text-muted">{item.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
