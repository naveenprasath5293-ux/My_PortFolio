import { motion } from "framer-motion";
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

        <div className="mt-12 grid gap-12 md:grid-cols-[280px_1fr] md:items-center">
          {/* Profile Picture */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            custom={0.1}
            className="flex justify-center"
          >
       <motion.div
  variants={fadeUp}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true }}
  custom={0.1}
  className="flex justify-center"
>
  <img
    src="/images/profile.jpg"
    alt="Naveen V"
    className="h-72 w-72 rounded-2xl object-cover border-2 border-warm-white
     shadow-2xl"
  />
</motion.div>

          </motion.div>

          {/* Content */}
          <div className="space-y-8">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              custom={0.2}
            >
              <h3 className="mb-3 font-display text-lg font-semibold text-red-soft">
                Introduction
              </h3>

              <p className="leading-relaxed text-muted">
                I’m Naveen V, a BCA student and Full Stack Developer currently
                interning at ShishaVortex. I build modern React applications,
                REST APIs, and AI-powered web solutions. My primary interests
                are Full Stack Development, Artificial Intelligence, and
                Blockchain Technology.
              </p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              custom={0.3}
            >
              <h3 className="mb-3 font-display text-lg font-semibold text-red-soft">
                Career Objective
              </h3>

              <p className="leading-relaxed text-muted">
                Seeking a Full Stack Developer position where I can contribute
                to real-world applications, improve my software engineering
                skills, and build scalable AI-powered products while learning
                from experienced developers.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}