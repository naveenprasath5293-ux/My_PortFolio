import { memo } from "react";
import { motion } from "framer-motion";

function SkillCard({ icon: Icon, label, items, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      whileHover={{ y: -6 }}
      className="glass group rounded-2xl p-6 transition-colors hover:border-cyan/40"
    >
      <div className="mb-4 flex items-center gap-3">
        <span className="rounded-lg bg-cyan/10 p-2.5 text-cyan-soft transition-colors group-hover:bg-cyan/20">
          <Icon size={20} strokeWidth={1.75} />
        </span>
        <h3 className="font-display text-lg font-semibold text-text">
          {label}
        </h3>
      </div>

      <ul className="flex flex-wrap gap-2">
        {items.map((item) => (
          <li
            key={item}
            className="rounded-md border border-border-soft px-3 py-1 font-mono text-xs text-muted transition-colors group-hover:border-cyan/20 group-hover:text-cyan-soft"
          >
            {item}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export default memo(SkillCard);
