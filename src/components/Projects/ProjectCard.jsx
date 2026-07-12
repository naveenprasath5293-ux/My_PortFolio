import { memo } from "react";
import { motion } from "framer-motion";
import { ExternalLink, ImageIcon } from "lucide-react";
import { GithubIcon } from "../BrandIcons";
import TechBadge from "./TechBadge";
import ProjectButton from "./ProjectButton";

function ProjectCard({ project, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      whileHover={{ y: -6 }}
      className="glass flex flex-col overflow-hidden rounded-2xl transition-colors hover:border-cyan/40"
    >
      <div className="group relative aspect-video w-full overflow-hidden border-b border-border-soft/60 bg-panel">
        {project.image ? (
          <img
            src={project.image}
            alt={`${project.title} screenshot`}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center gap-1.5 text-muted">
            <ImageIcon size={24} strokeWidth={1.5} />
            <span className="font-mono text-[10px]">preview coming soon</span>
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-lg font-semibold text-text">
          {project.title}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
          {project.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <TechBadge key={tech} label={tech} />
          ))}
        </div>

        <div className="mt-6 flex gap-3">
          <ProjectButton href={project.githubUrl} icon={GithubIcon} variant="ghost">
            GitHub
          </ProjectButton>
          <ProjectButton href={project.liveUrl} icon={ExternalLink} variant="ghost">
            Live Demo
          </ProjectButton>
        </div>
      </div>
    </motion.div>
  );
}

export default memo(ProjectCard);
