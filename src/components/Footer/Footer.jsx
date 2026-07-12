import { motion } from "framer-motion";
import { Mail, ArrowUp } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { GithubIcon, LinkedinIcon } from "../BrandIcons";
import { CONTACT_INFO } from "../../data/contact";

const QUICK_LINKS = [
  { label: "Home", hash: "top" },
  { label: "About", hash: "about" },
  { label: "Skills", hash: "skills" },
  { label: "Projects", hash: "projects" },
  { label: "Resume", hash: "resume" },
  { label: "Contact", hash: "contact" },
];

const SOCIAL_LINKS = [
  { label: "GitHub", icon: GithubIcon, href: CONTACT_INFO.github },
  { label: "LinkedIn", icon: LinkedinIcon, href: CONTACT_INFO.linkedin },
  { label: "Email", icon: Mail, href: `mailto:${CONTACT_INFO.email}` },
];

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

export default function Footer() {
  const year = new Date().getFullYear();
  const onHome = useLocation().pathname === "/";
  const linkHref = (hash) => (onHome ? `#${hash}` : `/#${hash}`);

  return (
    <footer className="border-t border-border-soft/60 bg-void px-6 py-14">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 sm:grid-cols-3">
          <div>
            <Link
              to="/"
              className="font-display text-lg font-semibold tracking-tight text-text"
            >
              Naveen<span className="text-cyan">.</span>V
            </Link>
            <p className="mt-3 max-w-xs text-sm text-muted">
              Full Stack Developer building AI-powered web applications.
            </p>
          </div>

          <div>
            <p className="eyebrow mb-4">quick links</p>
            <ul className="space-y-2">
              {QUICK_LINKS.map((link) => (
                <li key={link.hash}>
                  <a
                    href={linkHref(link.hash)}
                    className="text-sm text-muted transition-colors hover:text-cyan-soft"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow mb-4">connect</p>
            <div className="flex gap-3">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel={social.href.startsWith("http") ? "noreferrer" : undefined}
                  aria-label={social.label}
                  className="rounded-md border border-border-soft p-2.5 text-muted transition-colors hover:border-cyan/50 hover:text-cyan-soft"
                >
                  <social.icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border-soft/60 pt-6 sm:flex-row">
          <p className="font-mono text-xs text-muted">
            © {year} Naveen V. All rights reserved.
          </p>

          <motion.button
            type="button"
            onClick={scrollToTop}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Back to top"
            className="glass flex items-center gap-1.5 rounded-full px-4 py-2 font-mono text-xs text-muted transition-colors hover:text-cyan-soft"
          >
            <ArrowUp size={14} />
            Back to top
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
