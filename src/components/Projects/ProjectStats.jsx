import { motion } from "framer-motion";
import SectionHeading from "../SectionHeading";

export default function ProjectStats({ stats }) {
  return (
    <section className="border-t border-border-soft/60 bg-void px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <SectionHeading eyebrow="by the numbers" title="Project stats" />

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.4, delay: i * 0.06, ease: "easeOut" }}
              className="glass rounded-xl p-5 text-center"
            >
              <p className="font-display text-2xl font-semibold text-cyan-soft">
                {stat.value}
              </p>
              <p className="mt-1 font-mono text-[11px] text-muted">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
