import { motion } from "framer-motion";
import SectionHeading from "../SectionHeading";

export default function TechStack({ groups }) {
  return (
    <section className="border-t border-border-soft/60 bg-void px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <SectionHeading eyebrow="tech stack" title="Built with" />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {groups.map((group, i) => (
            <motion.div
              key={group.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
              whileHover={{ y: -6 }}
              className="glass rounded-2xl p-6 transition-colors hover:border-cyan/40"
            >
              <div className="mb-4 flex items-center gap-3">
                <span className="rounded-lg bg-cyan/10 p-2.5 text-cyan-soft">
                  <group.icon size={20} strokeWidth={1.75} />
                </span>
                <h3 className="font-display text-lg font-semibold text-text">
                  {group.label}
                </h3>
              </div>

              <ul className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-md border border-border-soft px-3 py-1 font-mono text-xs text-muted"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
