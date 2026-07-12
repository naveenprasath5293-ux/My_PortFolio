import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { CERTIFICATIONS } from "../data/certifications";

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="border-t border-border-soft/60 bg-void px-6 py-24"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="certifications" title="Certifications" />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {CERTIFICATIONS.map((cert, i) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
              whileHover={{ y: -6 }}
              className="glass flex flex-col rounded-2xl p-6 transition-colors hover:border-cyan/40"
            >
              <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-cyan/10 text-cyan-soft">
                <Award size={20} strokeWidth={1.75} />
              </span>

              <h3 className="font-display text-base font-semibold leading-snug text-text">
                {cert.name}
              </h3>
              <p className="mt-1 text-sm text-muted">{cert.issuer}</p>
              <p className="mt-1 font-mono text-xs text-muted">{cert.year}</p>

              {cert.url && (
                <a
                  href={cert.url}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 flex items-center gap-1.5 font-mono text-xs text-cyan-soft transition-colors hover:text-cyan"
                >
                  View Certificate
                  <ExternalLink size={13} />
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
