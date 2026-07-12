import { Link } from "react-router-dom";
import { Compass } from "lucide-react";
import Navbar from "../components/Navbar";
import SEO from "../components/SEO";

export default function NotFound() {
  return (
    <>
      <SEO
        title="Page Not Found | Naveen V"
        description="The page you're looking for doesn't exist."
        path="/404"
        noindex
      />
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-center bg-void px-6 text-center">
        <span className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan/10 text-cyan-soft">
          <Compass size={28} strokeWidth={1.75} />
        </span>
        <p className="eyebrow mb-3">404</p>
        <h1 className="font-display text-3xl font-semibold text-text sm:text-4xl">
          Page not found
        </h1>
        <p className="mt-3 max-w-sm text-muted">
          The page you&rsquo;re looking for doesn&rsquo;t exist or may have
          moved.
        </p>
        <Link
          to="/"
          className="mt-8 rounded-md bg-cyan px-6 py-3 font-mono text-sm font-medium text-void transition-transform hover:-translate-y-0.5"
        >
          Back to home
        </Link>
      </main>
    </>
  );
}
