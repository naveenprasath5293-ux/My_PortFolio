import { motion } from "framer-motion";
import { User } from "lucide-react";
import SectionHeading from "./SectionHeading";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: "easeOut" },
  }),
};

export default function About() {
  return (
    <section
      id="about"
      className="border-t border-border-soft/60 bg-void px-6 py-24"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="about" title="Who I am" />

        <div className="grid gap-12 md:grid-cols-[minmax(0,280px)_1fr] md:items-start">
          {/* Photo placeholder */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            custom={0.1}
            className="glass mx-auto flex aspect-square w-56 items-center justify-center rounded-2xl md:mx-0 md:w-full"
          >
            <div className="flex flex-col items-center gap-2 text-muted">
              <User size={40} strokeWidth={1.5} />
              <span className="font-mono text-xs">photo coming soon</span>
            </div>
          </motion.div>

          {/* Intro + objective */}
          <div className="space-y-8">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.4 }}
              custom={0.2}
            >
              <h3 className="mb-3 font-display text-lg font-semibold text-cyan-soft">
                Introduction
              </h3>
              <p className="leading-relaxed text-muted">
                I&rsquo;m Naveen V, a BCA student and Full Stack Developer
                currently interning at ShishaVortex, where I build
                production frontend interfaces with React. I like turning
                loosely defined ideas into working software — most recently
                an AI-powered news platform that pairs a React frontend with
                Google Gemini for summarization. My focus is React, Tailwind
                CSS and REST APIs today, with a growing interest in Web3 and
                blockchain development.
              </p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.4 }}
              custom={0.3}
            >
              <h3 className="mb-3 font-display text-lg font-semibold text-cyan-soft">
                Career objective
              </h3>
              <p className="leading-relaxed text-muted">
                Looking for a full-stack developer role where I can grow
                from frontend-focused work into complete product ownership —
                shipping features end to end, learning from experienced
                engineers, and eventually applying what I know about AI
                integration and blockchain to real-world products.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
