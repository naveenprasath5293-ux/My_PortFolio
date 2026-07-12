import SectionHeading from "../SectionHeading";
import FeaturedProject from "./FeaturedProject";
import ProjectCard from "./ProjectCard";
import { FEATURED_PROJECT, OTHER_PROJECTS } from "../../data/projects";

export default function Projects() {
  return (
    <section
      id="projects"
      className="border-t border-border-soft/60 bg-void px-6 py-24"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="projects" title="Selected work" />
        <p className="-mt-8 mb-12 max-w-xl text-muted">
          A mix of AI-integrated full-stack builds and smaller apps I&rsquo;ve
          used to practice specific parts of the stack.
        </p>

        <FeaturedProject project={FEATURED_PROJECT} />

        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          {OTHER_PROJECTS.map((project, i) => (
            <ProjectCard key={project.id} project={project} delay={i * 0.08} />
          ))}
        </div>
      </div>
    </section>
  );
}
