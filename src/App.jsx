import { lazy, Suspense, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import ErrorBoundary from "./components/ErrorBoundary";
import PageLoader from "./components/PageLoader";

// Code-split: the case study page is heavy (11 sections, lightbox
// gallery) and most visitors never leave the home page.
const ProjectDetails = lazy(() => import("./pages/ProjectDetails"));
const NotFound = lazy(() => import("./pages/NotFound"));

// Scrolls to top on route change. If the URL has a hash, scrolls to
// that element instead (needed because React Router's client-side
// navigation doesn't trigger the browser's native anchor scroll).
function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1));
      if (el) {
        requestAnimationFrame(() => el.scrollIntoView({ behavior: "smooth" }));
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}

export default function App() {
  return (
    <ErrorBoundary>
      <ScrollToTop />
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/projects/ai-smart-news-hub"
            element={<ProjectDetails />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </ErrorBoundary>
  );
}
