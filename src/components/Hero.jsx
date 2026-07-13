import { motion } from "framer-motion";
import { Download, ChevronDown } from "lucide-react";
import NetworkMesh from "./NetworkMesh";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: "easeOut" },
  }),
};

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden bg-void"
    >
      {/* Ambient gradient wash beneath the mesh */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 30%, rgba(99,102,241,0.16), transparent 70%), radial-gradient(40% 40% at 80% 70%, rgba(56,189,248,0.10), transparent 70%)",
        }}
      />
      <NetworkMesh />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 py-32">
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0}
          className="eyebrow mb-5"
        >
          currently building at ShishaVortex
        </motion.p>

        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0.1}
          className="text-5xl font-semibold leading-[1.05] text-text sm:text-6xl md:text-7xl"
        >
          Naveen V
        </motion.h1>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0.2}
          className="mt-4 font-display text-2xl text-cyan-soft sm:text-3xl"
        >
          Full Stack Developer
        </motion.p>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0.3}
          className="mt-5 max-w-xl text-base text-muted sm:text-lg"
        >
          Building AI-powered web applications with React and modern web
          technologies — from interface to API to database.
        </motion.p>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0.4}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#projects"
            className="rounded-md bg-cyan px-6 py-3 font-mono text-sm font-medium text-void transition-transform hover:-translate-y-0.5"
          >
            View Projects
          </a>

          <a
            href="/resume/resume.pdf"
            download
            className="glass flex items-center gap-2 rounded-md px-6 py-3 font-mono text-sm text-text transition-transform hover:-translate-y-0.5"
          >
            <Download size={16} />
            Download Resume
          </a>
        
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub profile"
            className="rounded-md border border-border-soft p-3 text-muted transition-colors hover:border-cyan/50 hover:text-cyan-soft"
          >
            <GithubIcon size={18} />
          </a>

          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn profile"
            className="rounded-md border border-border-soft p-3 text-muted transition-colors hover:border-cyan/50 hover:text-cyan-soft"
          >
            <LinkedinIcon size={18} />
          </a>
        </motion.div>
   
      </div>

      <motion.a
        href="#about"
        aria-label="Scroll to About section"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-muted transition-colors hover:text-cyan-soft"
      >
        <ChevronDown size={22} />
      </motion.a>
    </section>
  );
}
