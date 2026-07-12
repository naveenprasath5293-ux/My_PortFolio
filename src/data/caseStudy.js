import {
  Sparkles,
  Search,
  Filter,
  BrainCircuit,
  Smartphone,
  Zap,
  Plug,
  LayoutDashboard,
  Bookmark,
  Moon,
  Target,
  Users,
  Lightbulb,
  Puzzle,
  Boxes,
  Cpu,
  GitBranch,
  CheckCircle2,
  Code2,
  Server,
  Database,
  Wrench,
} from "lucide-react";

export const CASE_STUDY = {
  slug: "ai-smart-news-hub",
  title: "AI Smart News Hub",
  subtitle: "An AI-powered news platform with intelligent summaries and category-based browsing",
  banner: null,
  techBadges: ["React", "Node.js", "Express.js", "MongoDB", "Gemini API"],
  liveUrl: "#",
  githubUrl: "#",
};

export const OVERVIEW = {
  purpose:
    "Give readers a faster way to get through the news — pulling live articles and using AI to summarize them so someone can grasp the key points before deciding whether to read the full story.",
  problem:
    "News apps generally show a wall of headlines and leave the reading effort entirely to the user. There's no fast way to preview what an article actually says without opening it, which makes browsing slow and inefficient.",
  users:
    "Anyone who wants to stay informed without spending a lot of time reading — students, professionals, and casual readers who check the news between other tasks.",
  goals: [
    "Build a full-stack app with a real external API integration, not just static content",
    "Use an LLM (Gemini) for a genuinely useful feature, not a gimmick",
    "Ship a UI that feels like a real product, not a tutorial project",
  ],
  summary:
    "AI Smart News Hub combines a category-based news feed pulled from NewsData API with Gemini-powered summaries, wrapped in a responsive React interface with search and a floating voice assistant.",
};

export const FEATURES = [
  { icon: Sparkles, label: "AI News Summaries" },
  { icon: Search, label: "Smart Search" },
  { icon: Filter, label: "Category Filtering" },
  { icon: BrainCircuit, label: "AI-Powered Insights" },
  { icon: Smartphone, label: "Responsive Design" },
  { icon: Zap, label: "Fast Performance" },
  { icon: Plug, label: "REST API Integration" },
  { icon: LayoutDashboard, label: "Modern Dashboard" },
  { icon: Bookmark, label: "Bookmark Support", badge: "Coming Soon" },
  { icon: Moon, label: "Dark Mode" },
];

export const SCREENSHOTS = [
  { id: "home", label: "Home Page", image: null },
  { id: "details", label: "News Details", image: null },
  { id: "search", label: "Search", image: null },
  { id: "categories", label: "Categories", image: null },
  { id: "mobile", label: "Mobile View", image: null },
  { id: "ai", label: "AI Features", image: null },
];

export const TECH_STACK_GROUPS = [
  {
    id: "frontend",
    label: "Frontend",
    icon: Code2,
    items: ["React", "Vite", "Tailwind CSS", "Framer Motion", "React Router"],
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
    items: ["MongoDB"],
  },
  {
    id: "apis",
    label: "APIs",
    icon: Plug,
    items: ["Gemini API", "NewsData API"],
  },
  {
    id: "tools",
    label: "Tools",
    icon: Wrench,
    items: ["Git", "GitHub", "VS Code", "Postman", "Vercel"],
  },
];

export const ARCHITECTURE_FLOW = [
  { id: "user", label: "User", icon: Users },
  { id: "frontend", label: "React Frontend", icon: Code2 },
  { id: "api", label: "Express REST API", icon: Server },
  { id: "gemini", label: "Gemini API", icon: BrainCircuit },
  { id: "newsdata", label: "NewsData API", icon: Plug },
  { id: "db", label: "MongoDB", icon: Database },
];

export const CHALLENGES = [
  {
    id: "api-integration",
    title: "API Integration",
    challenge:
      "Coordinating two external APIs (NewsData and Gemini) with different rate limits and response shapes inside a single request flow.",
    solution:
      "Built a dedicated Express service layer to normalize both responses before they reach the frontend, with error boundaries around each call.",
    result:
      "The frontend only ever deals with one consistent data shape, regardless of which upstream API is involved.",
  },
  {
    id: "state-management",
    title: "State Management",
    challenge:
      "Article data, summaries, categories and search state all needed to stay in sync without prop-drilling through many component layers.",
    solution:
      "Split state by concern using React hooks and context where shared state was genuinely needed, keeping most components self-contained.",
    result:
      "Fewer unnecessary re-renders and a component tree that's easier to reason about.",
  },
  {
    id: "responsive-layouts",
    title: "Responsive Layouts",
    challenge:
      "News cards, the summary modal, and the category grid all needed to hold up across phone, tablet and desktop widths.",
    solution:
      "Used Tailwind's responsive utilities with a mobile-first approach, testing breakpoints against real content rather than fixed dummy text.",
    result:
      "A consistent reading experience from mobile through desktop with no layout breakage.",
  },
  {
    id: "performance",
    title: "Performance Optimization",
    challenge:
      "Re-fetching and re-summarizing articles on every render was slow and unnecessarily hit the Gemini API.",
    solution:
      "Memoized expensive components and cached summarized results so repeat views don't trigger new API calls.",
    result:
      "Noticeably snappier category switching and lower API usage.",
  },
  {
    id: "error-handling",
    title: "Error Handling",
    challenge:
      "External API failures (rate limits, timeouts) could silently break the UI if left unhandled.",
    solution:
      "Added error boundaries around data-dependent sections with clear fallback states instead of blank screens.",
    result:
      "The app degrades gracefully instead of crashing when an upstream API has issues.",
  },
  {
    id: "loading-states",
    title: "Loading States",
    challenge:
      "AI summarization takes noticeably longer than a plain data fetch, which made the UI feel unresponsive.",
    solution:
      "Added skeleton loaders scoped to individual cards instead of a single full-page spinner.",
    result:
      "The interface feels responsive even while summaries are still being generated.",
  },
];

export const LEARNINGS = [
  { icon: Boxes, label: "React architecture" },
  { icon: Plug, label: "REST API integration" },
  { icon: BrainCircuit, label: "AI integration" },
  { icon: Database, label: "MongoDB" },
  { icon: Zap, label: "Performance optimization" },
  { icon: Puzzle, label: "Component reusability" },
  { icon: GitBranch, label: "Git workflow" },
  { icon: Smartphone, label: "Responsive UI development" },
];

export const FUTURE_IMPROVEMENTS = [
  { icon: Users, label: "User authentication" },
  { icon: Bookmark, label: "Saved articles" },
  { icon: Target, label: "Personalized recommendations" },
  { icon: BrainCircuit, label: "AI chatbot" },
  { icon: Zap, label: "Push notifications" },
  { icon: LayoutDashboard, label: "Admin dashboard" },
  { icon: Cpu, label: "Offline support" },
  { icon: Lightbulb, label: "Multi-language support" },
  { icon: CheckCircle2, label: "Advanced analytics" },
];

export const PROJECT_STATS = [
  { value: "15+", label: "Components" },
  { value: "10+", label: "Features" },
  { value: "2", label: "REST APIs" },
  { value: "100%", label: "Responsive" },
  { value: "1", label: "AI Integration" },
  { value: "Modern", label: "UI" },
];
