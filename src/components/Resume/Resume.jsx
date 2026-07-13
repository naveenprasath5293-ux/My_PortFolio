import { motion } from "framer-motion";
import { Download, FileText } from "lucide-react";

const RESUME_PATH = "/resume/resume.pdf";

export default function Resume() {
  return (
    <section id="resume" className="py-24 px-6">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-4xl font-bold mb-4">Resume</h2>

        <p className="text-gray-400 mb-8">
          Download my latest resume in PDF format.
        </p>

        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href={RESUME_PATH}
          download
          className="inline-flex items-center gap-2 rounded-lg bg-cyan-500 px-6 py-3 text-black font-semibold"
        >
          <FileText size={20} />
          <Download size={18} />
          Download Resume
        </motion.a>
      </div>
    </section>
  );
}