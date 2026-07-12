import Navbar from "../components/Navbar";
import SEO from "../components/SEO";
import Footer from "../components/Footer/Footer";
import ProjectHero from "../components/projects/ProjectHero";
import ProjectOverview from "../components/projects/ProjectOverview";
import ProjectFeatures from "../components/projects/ProjectFeatures";
import ScreenshotGallery from "../components/projects/ScreenshotGallery";
import TechStack from "../components/projects/TechStack";
import Architecture from "../components/projects/Architecture";
import Challenges from "../components/projects/Challenges";
import Learnings from "../components/projects/Learnings";
import FutureRoadmap from "../components/projects/FutureRoadmap";
import ProjectStats from "../components/projects/ProjectStats";
import ProjectCTA from "../components/projects/ProjectCTA";
import {
  CASE_STUDY,
  OVERVIEW,
  FEATURES,
  SCREENSHOTS,
  TECH_STACK_GROUPS,
  ARCHITECTURE_FLOW,
  CHALLENGES,
  LEARNINGS,
  FUTURE_IMPROVEMENTS,
  PROJECT_STATS,
} from "../data/caseStudy";

export default function ProjectDetails() {
  return (
    <>
      <SEO
        title="AI Smart News Hub — Case Study | Naveen V"
        description={OVERVIEW.summary}
        path="/projects/ai-smart-news-hub"
      />
      <Navbar />
      <main>
        <ProjectHero data={CASE_STUDY} />
        <ProjectOverview data={OVERVIEW} />
        <ProjectFeatures features={FEATURES} />
        <ScreenshotGallery screenshots={SCREENSHOTS} />
        <TechStack groups={TECH_STACK_GROUPS} />
        <Architecture flow={ARCHITECTURE_FLOW} />
        <Challenges challenges={CHALLENGES} />
        <Learnings learnings={LEARNINGS} />
        <FutureRoadmap items={FUTURE_IMPROVEMENTS} />
        <ProjectStats stats={PROJECT_STATS} />
        <ProjectCTA liveUrl={CASE_STUDY.liveUrl} githubUrl={CASE_STUDY.githubUrl} />
      </main>
      <Footer />
    </>
  );
}
