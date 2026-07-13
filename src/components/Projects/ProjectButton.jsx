import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const MotionLink = motion.create(Link);

const VARIANTS = {
  primary: "bg-cyan text-void",
  glass: "glass text-text",
  ghost: "border border-border-soft text-muted hover:border-cyan/50 hover:text-cyan-soft",
};

/**
 * Shared action button/link used for Live Demo, GitHub, and View Case
 * Study across the Projects section. Pass `external={false}` and a
 * router path in `href` to render an internal React Router Link instead
 * of an <a> tag (used for the case study route).
 */
export default function ProjectButton({
  href,
  icon: Icon,
  children,
  variant = "ghost",
  external = true,
}) {
  const className = `inline-flex items-center gap-1.5 rounded-md px-4 py-2 font-mono text-xs font-medium transition-colors ${VARIANTS[variant]}`;

  if (!external) {
    return (
      <MotionLink
        to={href}
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.97 }}
        className={className}
      >
        {Icon && <Icon size={14} />}
        {children}
      </MotionLink>
    );
  }

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noreferrer"
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.97 }}
      className={className}
    >
      {Icon && <Icon size={14} />}
      {children}
    </motion.a>
  );
}
