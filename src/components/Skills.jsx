import SectionHeading from "./SectionHeading";
import SkillCard from "./SkillCard";
import { SKILL_CATEGORIES } from "../data/skills";

export default function Skills() {
  return (
    <section
      id="skills"
      className="border-t border-border-soft/60 bg-void px-6 py-24"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="skills" title="What I work with" />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SKILL_CATEGORIES.map((cat, i) => (
            <SkillCard
              key={cat.id}
              icon={cat.icon}
              label={cat.label}
              items={cat.items}
              delay={i * 0.08}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
