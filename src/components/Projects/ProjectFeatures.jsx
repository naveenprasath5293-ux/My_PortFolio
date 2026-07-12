import { motion } from "framer-motion";
import SectionHeading from "../SectionHeading";

export default function ProjectFeatures({ features }) {
  return (
    <section className="border-t border-border-soft/60 bg-void px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <SectionHeading eyebrow="features" title="What it does" />

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {features.map((feature, i) => (
            <motion.div
              key={feature.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.06, ease: "easeOut" }}
              whileHover={{ y: -4 }}
              className="glass rounded-xl p-4 text-center transition-colors hover:border-cyan/40"
            >
              <feature.icon
                size={20}
                strokeWidth={1.75}
                className="mx-auto mb-2 text-cyan-soft"
              />
              <p className="text-xs leading-snug text-muted">{feature.label}</p>
              {feature.badge && (
                <span className="mt-2 inline-block rounded-full border border-cyan/30 px-2 py-0.5 font-mono text-[10px] text-cyan-soft">
                  {feature.badge}
                </span>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
