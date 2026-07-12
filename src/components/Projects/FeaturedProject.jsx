import { motion } from "framer-motion";
import { Star, ExternalLink, FileText, ImageIcon } from "lucide-react";
import { GithubIcon } from "../BrandIcons";
import TechBadge from "./TechBadge";
import ProjectButton from "./ProjectButton";

export default function FeaturedProject({ project }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="glass overflow-hidden rounded-3xl"
    >
      {/* Image */}
      <div className="group relative aspect-video w-full overflow-hidden border-b border-border-soft/60 bg-panel">
        {project.image ? (
          <img
            src={project.image}
            alt={`${project.title} screenshot`}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center gap-2 text-muted">
            <ImageIcon size={36} strokeWidth={1.5} />
            <span className="font-mono text-xs">screenshot coming soon</span>
          </div>
        )}
        <span className="glass absolute left-4 top-4 flex items-center gap-1.5 rounded-full px-3 py-1 font-mono text-xs text-cyan-soft">
          <Star size={13} className="fill-current" />
          Featured
        </span>
      </div>

      <div className="p-6 sm:p-10">
        <p className="eyebrow mb-2">{project.tagline}</p>
        <h3 className="font-display text-2xl font-semibold text-text sm:text-3xl">
          {project.title}
        </h3>
        <p className="mt-4 max-w-2xl leading-relaxed text-muted">
          {project.description}
        </p>

        {/* Tech stack */}
        <div className="mt-6 flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <TechBadge key={tech} label={tech} />
          ))}
        </div>

        {/* Key features */}
        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {project.features.map((feature) => (
            <div
              key={feature.label}
              className="rounded-xl border border-border-soft/70 p-3 text-center"
            >
              <feature.icon
                size={18}
                strokeWidth={1.75}
                className="mx-auto mb-2 text-cyan-soft"
              />
              <p className="text-xs leading-snug text-muted">
                {feature.label}
              </p>
              {feature.badge && (
                <span className="mt-1 inline-block rounded-full border border-cyan/30 px-2 py-0.5 font-mono text-[10px] text-cyan-soft">
                  {feature.badge}
                </span>
              )}
            </div>
          ))}
        </div>

        {/* Actions */}
        <div className="mt-8 flex flex-wrap gap-3">
          <ProjectButton href={project.liveUrl} icon={ExternalLink} variant="primary">
            Live Demo
          </ProjectButton>
          <ProjectButton href={project.githubUrl} icon={GithubIcon} variant="glass">
            GitHub
          </ProjectButton>
          <ProjectButton
            href={project.caseStudyUrl}
            icon={FileText}
            variant="ghost"
            external={false}
          >
            View Case Study
          </ProjectButton>
        </div>
      </div>
    </motion.div>
  );
}
