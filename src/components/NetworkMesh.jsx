import { useEffect, useRef } from "react";

/**
 * Signature hero visual: a low-opacity network of nodes and connecting
 * lines that drift gently and react to pointer position. Evokes both
 * "full stack" (layered, connected systems) and "AI" (neural network)
 * without being a generic particle field. Respects reduced-motion.
 */
export default function NetworkMesh() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let width, height, nodes, animationId;
    let isVisible = true;
    const pointer = { x: -9999, y: -9999 };
    const NODE_COUNT = 46;
    const LINK_DIST = 130;

    function resize() {
      width = canvas.offsetWidth;
      height = canvas.offsetHeight;
      canvas.width = width * window.devicePixelRatio;
      canvas.height = height * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    }

    function init() {
      nodes = Array.from({ length: NODE_COUNT }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.18,
        vy: (Math.random() - 0.5) * 0.18,
        r: Math.random() * 1.4 + 0.6,
      }));
    }

    function step() {
      if (!isVisible) {
        animationId = requestAnimationFrame(step);
        return;
      }

      ctx.clearRect(0, 0, width, height);

      for (const n of nodes) {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > width) n.vx *= -1;
        if (n.y < 0 || n.y > height) n.vy *= -1;

        const dx = pointer.x - n.x;
        const dy = pointer.y - n.y;
        const dist = Math.hypot(dx, dy);
        if (dist < 160) {
          n.x -= dx * 0.0025;
          n.y -= dy * 0.0025;
        }
      }

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];
          const dist = Math.hypot(a.x - b.x, a.y - b.y);
          if (dist < LINK_DIST) {
            ctx.strokeStyle = `rgba(56, 189, 248, ${0.14 * (1 - dist / LINK_DIST)})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      for (const n of nodes) {
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(125, 211, 252, 0.55)";
        ctx.fill();
      }

      animationId = requestAnimationFrame(step);
    }

    function handleMove(e) {
      const rect = canvas.getBoundingClientRect();
      pointer.x = e.clientX - rect.left;
      pointer.y = e.clientY - rect.top;
    }

    function handleResize() {
      resize();
      init();
    }

    function handlePointerLeave() {
      pointer.x = -9999;
      pointer.y = -9999;
    }

    resize();
    init();
    window.addEventListener("resize", handleResize);
    canvas.addEventListener("pointermove", handleMove);
    canvas.addEventListener("pointerleave", handlePointerLeave);

    // Stop redrawing while the hero is scrolled off-screen.
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
      },
      { threshold: 0 }
    );
    observer.observe(canvas);

    if (!prefersReducedMotion) {
      step();
    } else {
      // Draw a single static frame for reduced-motion users
      step();
      cancelAnimationFrame(animationId);
    }

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
      canvas.removeEventListener("pointermove", handleMove);
      canvas.removeEventListener("pointerleave", handlePointerLeave);
      observer.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="absolute inset-0 h-full w-full"
    />
  );
}
