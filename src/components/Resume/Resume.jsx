import { motion } from "framer-motion";
import { Download, FileText } from "lucide-react";
import SectionHeading from "../SectionHeading";

const RESUME_PATH = "/resume/resume.pdf";

export default function Resume() {
  return (
    <section
      id="resume"
      className="border-t border-border-soft/60 bg-void px-6 py-24"
    >
      <div className="mx-auto max-w-3xl text-center">
        <SectionHeading
          eyebrow="resume"
          title="Get the full picture"
          className="text-center"
        />

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="-mt-8 mb-10 text-muted"
        >
          My resume covers my education, internship experience, technical
          skills and project work in more detail than this page does. Grab a
          copy if you&rsquo;d like something to reference or share.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          whileHover={{ y: -4 }}
          className="glass mx-auto flex max-w-md flex-col items-center gap-5 rounded-2xl p-8 transition-colors hover:border-cyan/40 sm:flex-row sm:text-left"
        >
          <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-cyan/10 text-cyan-soft">
            <FileText size={26} strokeWidth={1.75} />
          </span>

          <div className="flex-1">
            <p className="font-display text-base font-semibold text-text">
              Naveen V — Resume
            </p>
            <p className="mt-0.5 font-mono text-xs text-muted">PDF</p>
          </div>

          <motion.a
            href={RESUME_PATH}
            download
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex shrink-0 items-center gap-2 rounded-md bg-cyan px-5 py-2.5 font-mono text-xs font-medium text-void"
          >
            <Download size={15} />
            Download
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
