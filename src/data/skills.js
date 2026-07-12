import { Code2, Server, Database, BrainCircuit, Wrench } from "lucide-react";

// Central data source for the Skills section. Edit this list to add or
// reorder categories/technologies — no JSX changes needed.
export const SKILL_CATEGORIES = [
  {
    id: "frontend",
    label: "Frontend",
    icon: Code2,
    items: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"],
  },
  {
    id: "backend",
    label: "Backend",
    icon: Server,
    items: ["Node.js", "Express.js"],
  },
  {
    id: "database",
    label: "Database",
    icon: Database,
    items: ["MongoDB", "MySQL"],
  },
  {
    id: "ai",
    label: "AI",
    icon: BrainCircuit,
    items: ["Gemini API", "Prompt Engineering"],
  },
  {
    id: "tools",
    label: "Tools",
    icon: Wrench,
    items: ["Git", "GitHub", "VS Code", "Postman", "Vercel"],
  },
];
