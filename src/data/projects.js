import {
  Sparkles,
  Search,
  Filter,
  Smartphone,
  Radio,
  Bookmark,
  Moon,
  Zap,
  Plug,
  LayoutDashboard,
} from "lucide-react";

export const FEATURED_PROJECT = {
  id: "ai-smart-news-hub",
  title: "AI Smart News Hub",
  tagline: "AI-Powered News Platform",
  description:
    "AI Smart News Hub is a modern AI-powered news platform that delivers intelligent news summaries, category-based browsing, advanced search, and AI-assisted reading experiences using Gemini AI and News APIs.",
  image: null, // placeholder until a real screenshot is added
  techStack: [
    "React",
    "Vite",
    "Tailwind CSS",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Gemini API",
    "NewsData API",
    "Axios",
    "React Router",
    "Framer Motion",
    "Git",
    "GitHub",
    "Vercel",
  ],
  features: [
    { icon: Sparkles, label: "AI News Summaries" },
    { icon: Search, label: "Smart Search" },
    { icon: Filter, label: "Category Filtering" },
    { icon: Smartphone, label: "Responsive UI" },
    { icon: Radio, label: "Real-Time News" },
    { icon: Bookmark, label: "Bookmark Support", badge: "Coming Soon" },
    { icon: Moon, label: "Dark Mode" },
    { icon: Zap, label: "Fast Performance" },
    { icon: Plug, label: "REST API Integration" },
    { icon: LayoutDashboard, label: "Modern Dashboard" },
  ],
  liveUrl: "#",
  githubUrl: "#",
  caseStudyUrl: "/projects/ai-smart-news-hub",
};

// PLACEHOLDER DATA — swap in your real "other" projects (or remove
// entries) once repos/demos exist for them.
export const OTHER_PROJECTS = [
  {
    id: "portfolio-website",
    title: "Portfolio Website",
    description:
      "This site — a dark, glassmorphism-styled personal portfolio built to showcase projects, skills and experience to recruiters.",
    techStack: ["React", "Vite", "Tailwind CSS", "Framer Motion"],
    image: null,
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    id: "weather-app",
    title: "Weather App",
    description:
      "A location-based weather app with real-time conditions and a clean, responsive interface.",
    techStack: ["React", "REST API", "Tailwind CSS"],
    image: null,
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    id: "task-manager",
    title: "Task Manager",
    description:
      "A full-stack task management app with create, update and delete flows backed by a REST API.",
    techStack: ["React", "Node.js", "Express.js", "MongoDB"],
    image: null,
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    id: "student-management-system",
    title: "Student Management System",
    description:
      "A CRUD application for managing student records, built to practice full-stack data flows.",
    techStack: ["React", "Node.js", "MySQL"],
    image: null,
    githubUrl: "#",
    liveUrl: "#",
  },
];
