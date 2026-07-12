import { motion } from "framer-motion";
import { ExternalLink, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { GithubIcon } from "../BrandIcons";

export default function ProjectCTA({ liveUrl, githubUrl }) {
  return (
    <section className="border-t border-border-soft/60 bg-void px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="glass mx-auto max-w-3xl rounded-3xl p-10 text-center sm:p-14"
      >
        <h2 className="font-display text-2xl font-semibold text-text sm:text-3xl">
          Like what you see?
        </h2>
        <p className="mx-auto mt-3 max-w-md text-muted">
          Try the live app, browse the source, or get in touch if you'd like
          to talk about it.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href={liveUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 rounded-md bg-cyan px-5 py-2.5 font-mono text-xs font-medium text-void transition-transform hover:-translate-y-0.5"
          >
            <ExternalLink size={14} />
            View Live Demo
          </a>
          <a
            href={githubUrl}
            target="_blank"
            rel="noreferrer"
            className="glass inline-flex items-center gap-1.5 rounded-md px-5 py-2.5 font-mono text-xs font-medium text-text transition-transform hover:-translate-y-0.5"
          >
            <GithubIcon size={14} />
            View GitHub Repository
          </a>
          <Link
            to="/#contact"
            className="inline-flex items-center gap-1.5 rounded-md border border-border-soft px-5 py-2.5 font-mono text-xs text-muted transition-colors hover:border-cyan/50 hover:text-cyan-soft"
          >
            <Mail size={14} />
            Contact Me
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
