import { motion } from "framer-motion";
import { Target, Users, Lightbulb } from "lucide-react";
import SectionHeading from "../SectionHeading";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay, ease: "easeOut" },
  }),
};

export default function ProjectOverview({ data }) {
  const cards = [
    { icon: Target, title: "Purpose", body: data.purpose },
    { icon: Lightbulb, title: "Problem", body: data.problem },
    { icon: Users, title: "Target Users", body: data.users },
  ];

  return (
    <section className="border-t border-border-soft/60 bg-void px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <SectionHeading eyebrow="overview" title="Project overview" />

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          className="-mt-8 mb-10 max-w-2xl leading-relaxed text-muted"
        >
          {data.summary}
        </motion.p>

        <div className="grid gap-6 sm:grid-cols-3">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              custom={i * 0.1}
              className="glass rounded-2xl p-6"
            >
              <card.icon size={20} strokeWidth={1.75} className="mb-3 text-cyan-soft" />
              <h3 className="mb-2 font-display text-base font-semibold text-text">
                {card.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted">{card.body}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          custom={0.3}
          className="mt-6"
        >
          <h3 className="mb-3 font-display text-base font-semibold text-text">
            Goals
          </h3>
          <ul className="space-y-2">
            {data.goals.map((goal) => (
              <li key={goal} className="flex gap-2 text-sm leading-relaxed text-muted">
                <span aria-hidden="true" className="mt-2 h-1 w-1 shrink-0 rounded-full bg-cyan" />
                {goal}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
