import { useEffect, useRef, useState, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ImageIcon, X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
import SectionHeading from "../SectionHeading";

export default function ScreenshotGallery({ screenshots }) {
  const [activeIndex, setActiveIndex] = useState(null);
  const isOpen = activeIndex !== null;
  const closeButtonRef = useRef(null);
  const lastTriggerRef = useRef(null);

  const close = useCallback(() => setActiveIndex(null), []);
  const showPrev = useCallback(
    () => setActiveIndex((i) => (i - 1 + screenshots.length) % screenshots.length),
    [screenshots.length]
  );
  const showNext = useCallback(
    () => setActiveIndex((i) => (i + 1) % screenshots.length),
    [screenshots.length]
  );

  useEffect(() => {
    if (!isOpen) return;
    function onKey(e) {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
    }
    window.addEventListener("keydown", onKey);
    closeButtonRef.current?.focus();
    return () => {
      window.removeEventListener("keydown", onKey);
      lastTriggerRef.current?.focus();
    };
  }, [isOpen, close, showPrev, showNext]);

  const active = isOpen ? screenshots[activeIndex] : null;

  return (
    <section className="border-t border-border-soft/60 bg-void px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <SectionHeading eyebrow="screenshots" title="A closer look" />

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
          {screenshots.map((shot, i) => (
            <motion.button
              key={shot.id}
              type="button"
              onClick={(e) => {
                lastTriggerRef.current = e.currentTarget;
                setActiveIndex(i);
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.06, ease: "easeOut" }}
              className="group relative aspect-video overflow-hidden rounded-xl border border-border-soft/60 bg-panel text-left"
              aria-label={`View ${shot.label} screenshot`}
            >
              {shot.image ? (
                <img
                  src={shot.image}
                  alt={shot.label}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              ) : (
                <div className="flex h-full w-full flex-col items-center justify-center gap-1.5 text-muted">
                  <ImageIcon size={22} strokeWidth={1.5} />
                </div>
              )}

              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-void/80 via-transparent to-transparent p-3 opacity-0 transition-opacity group-hover:opacity-100">
                <span className="flex items-center gap-1.5 font-mono text-xs text-text">
                  <Maximize2 size={12} />
                  {shot.label}
                </span>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-void/90 p-6 backdrop-blur-sm"
            role="dialog"
            aria-modal="true"
            aria-label={`${active.label} screenshot`}
            onClick={close}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-3xl"
            >
              <div className="glass flex aspect-video w-full items-center justify-center overflow-hidden rounded-2xl">
                {active.image ? (
                  <img
                    src={active.image}
                    alt={active.label}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="flex flex-col items-center gap-2 text-muted">
                    <ImageIcon size={40} strokeWidth={1.5} />
                    <span className="font-mono text-xs">
                      {active.label} — screenshot coming soon
                    </span>
                  </div>
                )}
              </div>

              <button
                type="button"
                ref={closeButtonRef}
                onClick={close}
                aria-label="Close screenshot preview"
                className="glass absolute -top-4 right-0 rounded-full p-2 text-text"
              >
                <X size={16} />
              </button>

              <button
                type="button"
                onClick={showPrev}
                aria-label="Previous screenshot"
                className="glass absolute left-3 top-1/2 -translate-y-1/2 rounded-full p-2 text-text"
              >
                <ChevronLeft size={18} />
              </button>

              <button
                type="button"
                onClick={showNext}
                aria-label="Next screenshot"
                className="glass absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-2 text-text"
              >
                <ChevronRight size={18} />
              </button>

              <p className="mt-4 text-center font-mono text-xs text-muted">
                {active.label}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
