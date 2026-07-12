import { motion } from "framer-motion";
import { ExternalLink, ImageIcon, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { GithubIcon } from "../BrandIcons";
import TechBadge from "../Projects/TechBadge";

export default function ProjectHero({ data }) {
  return (
    <section className="border-b border-border-soft/60 bg-void px-6 pb-16 pt-28">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Link
            to="/#projects"
            className="mb-8 inline-flex items-center gap-1.5 font-mono text-xs text-muted transition-colors hover:text-cyan-soft"
          >
            <ArrowLeft size={14} />
            Back to projects
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          className="group relative mb-8 aspect-[21/9] w-full overflow-hidden rounded-2xl border border-border-soft/60 bg-panel"
        >
          {data.banner ? (
            <img
              src={data.banner}
              alt={`${data.title} banner`}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="flex h-full w-full flex-col items-center justify-center gap-2 text-muted">
              <ImageIcon size={36} strokeWidth={1.5} />
              <span className="font-mono text-xs">banner coming soon</span>
            </div>
          )}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          className="font-display text-3xl font-semibold text-text sm:text-4xl md:text-5xl"
        >
          {data.title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
          className="mt-4 max-w-2xl text-lg text-muted"
        >
          {data.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
          className="mt-6 flex flex-wrap gap-2"
        >
          {data.techBadges.map((tech) => (
            <TechBadge key={tech} label={tech} />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
          className="mt-8 flex flex-wrap gap-3"
        >
          <a
            href={data.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 rounded-md bg-cyan px-5 py-2.5 font-mono text-xs font-medium text-void transition-transform hover:-translate-y-0.5"
          >
            <ExternalLink size={14} />
            Live Demo
          </a>
          <a
            href={data.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="glass inline-flex items-center gap-1.5 rounded-md px-5 py-2.5 font-mono text-xs font-medium text-text transition-transform hover:-translate-y-0.5"
          >
            <GithubIcon size={14} />
            GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
