import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const LINKS = [
  { label: "About", hash: "about" },
  { label: "Skills", hash: "skills" },
  { label: "Experience", hash: "experience" },
  { label: "Projects", hash: "projects" },
  { label: "Resume", hash: "resume" },
  { label: "Contact", hash: "contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const onHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Anchor links work as plain <a href="#x"> on the home page (native
  // in-page scroll), but need the "/" prefix to first navigate home
  // when clicked from another route like the case study page.
  const linkHref = (hash) => (onHome ? `#${hash}` : `/#${hash}`);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-colors duration-300 ${
        scrolled ? "glass" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          to="/"
          className="font-display text-lg font-semibold tracking-tight text-text"
        >
          Naveen<span className="text-cyan">.</span>V
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {LINKS.map((link) => (
            <li key={link.hash}>
              <a
                href={linkHref(link.hash)}
                className="font-mono text-sm text-muted transition-colors hover:text-cyan-soft"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={linkHref("contact")}
          className="hidden rounded-md border border-cyan/40 px-4 py-2 font-mono text-sm text-cyan-soft transition-colors hover:bg-cyan/10 md:inline-block"
        >
          Let&rsquo;s talk
        </a>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="text-text md:hidden"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {open && (
        <ul className="glass mx-4 mb-4 flex flex-col gap-1 rounded-lg p-4 md:hidden">
          {LINKS.map((link) => (
            <li key={link.hash}>
              <a
                href={linkHref(link.hash)}
                onClick={() => setOpen(false)}
                className="block py-2 font-mono text-sm text-muted transition-colors hover:text-cyan-soft"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
