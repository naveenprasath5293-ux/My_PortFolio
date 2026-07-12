import { memo } from "react";
import { motion } from "framer-motion";

/**
 * Consistent section header: mono "eyebrow" label + display title.
 * Reused across About, Skills, Education, and later sections.
 */
function SectionHeading({ eyebrow, title, className = "" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`mb-12 ${className}`}
    >
      <p className="eyebrow mb-3">{eyebrow}</p>
      <h2 className="text-3xl font-semibold text-text sm:text-4xl">
        {title}
      </h2>
    </motion.div>
  );
}

export default memo(SectionHeading);
