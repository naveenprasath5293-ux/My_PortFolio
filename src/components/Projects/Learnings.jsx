import { motion } from "framer-motion";
import SectionHeading from "../SectionHeading";

export default function Learnings({ learnings }) {
  return (
    <section className="border-t border-border-soft/60 bg-void px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <SectionHeading eyebrow="learnings" title="What I learned" />

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {learnings.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.06, ease: "easeOut" }}
              className="glass rounded-xl p-5 text-center"
            >
              <item.icon size={20} strokeWidth={1.75} className="mx-auto mb-2 text-cyan-soft" />
              <p className="text-xs leading-snug text-muted">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
