"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Site-wide motion runtime.
 *
 * Replaces the prototype's DCLogic `componentDidMount` work:
 *   - arms <body> so reveal styles only apply once JS is running
 *   - reveals .asta-reveal / .asta-rv / .asta-stagger / .asta-wipe / .asta-footline
 *   - counts up [data-countup] numbers
 *   - plays/pauses [data-scroll-video] as it enters/leaves the viewport
 *   - the blanket "auto reveal" fade for section content
 *
 * The prototype polled on a 400ms interval; this uses IntersectionObserver.
 */

const REVEAL_SELECTOR =
  ".asta-reveal, .asta-rv, .asta-stagger, .asta-wipe, .asta-footline, .asta-why-card";

const AUTO_SELECTOR =
  "section h1,section h2,section h3,section h4,section h5,section p,section img,section li,section [class*='card'],section svg";

const AUTO_EASE = "cubic-bezier(0.34,1.3,0.5,1)";

export default function MotionRoot() {
  // The root layout stays mounted across App Router navigations, so this must
  // re-run per route — otherwise the incoming page's .asta-reveal elements are
  // never observed while <body> is still armed, stranding them at opacity 0.
  const pathname = usePathname();

  useEffect(() => {
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    document.body.classList.add("asta-armed");
    if (reduced) return;

    const cleanups: Array<() => void> = [];

    /* ---------- reveal ----------
       Deliberately geometry-based rather than IntersectionObserver.
       Reveal targets like `.asta-wipe` and `.asta-map-reveal` rest at
       `clip-path: inset(0 100% 0 0)`, which zeroes their intersection ratio —
       IO would never fire for them, so they'd stay invisible forever. The
       prototype polled getBoundingClientRect, which ignores clipping; this
       reproduces that test (top < 88% of viewport) on scroll/resize. */
    let revealFrame = 0;
    const revealPass = () => {
      revealFrame = 0;
      const vh = window.innerHeight || document.documentElement.clientHeight;
      const pending = document.querySelectorAll(
        REVEAL_SELECTOR.split(", ")
          .map((s) => `${s}:not(.is-in)`)
          .join(", "),
      );
      pending.forEach((node) => {
        const el = node as HTMLElement;
        const r = el.getBoundingClientRect();
        if (r.height <= 0) return;
        if (r.top < vh * 0.88 && r.bottom > 0) {
          const delay = parseInt(el.dataset.revealDelay || "0", 10);
          window.setTimeout(() => el.classList.add("is-in"), delay);
        }
      });
    };
    const scheduleReveal = () => {
      if (revealFrame) return;
      revealFrame = requestAnimationFrame(revealPass);
    };

    revealPass();
    window.addEventListener("scroll", scheduleReveal, { passive: true });
    window.addEventListener("resize", scheduleReveal, { passive: true });
    // Catches late layout shifts (fonts, images) without a permanent interval.
    const revealSettle = window.setInterval(revealPass, 400);
    const revealStop = window.setTimeout(
      () => window.clearInterval(revealSettle),
      6000,
    );
    cleanups.push(() => {
      window.removeEventListener("scroll", scheduleReveal);
      window.removeEventListener("resize", scheduleReveal);
      window.clearInterval(revealSettle);
      window.clearTimeout(revealStop);
      if (revealFrame) cancelAnimationFrame(revealFrame);
    });

    /* ---------- count up ---------- */
    const countIO = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const el = entry.target as HTMLElement;
          countIO.unobserve(el);
          const target = parseInt(el.dataset.countup || "0", 10);
          const suffix = el.dataset.suffix || "";
          const duration = 1400;
          const start = performance.now();
          const tick = (now: number) => {
            const p = Math.min(1, (now - start) / duration);
            const eased = 1 - Math.pow(1 - p, 3);
            if (p < 1) {
              el.textContent = Math.round(target * eased).toLocaleString(
                "en-US",
              );
              requestAnimationFrame(tick);
            } else {
              el.textContent = target.toLocaleString("en-US") + suffix;
            }
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.1 },
    );
    document
      .querySelectorAll("[data-countup]")
      .forEach((el) => countIO.observe(el));
    cleanups.push(() => countIO.disconnect());

    /* ---------- scroll-driven video ---------- */
    const videoIO = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const v = entry.target as HTMLVideoElement;
          v.muted = true;
          v.defaultMuted = true;
          v.volume = 0;
          if (entry.isIntersecting) {
            void v.play().catch(() => {});
          } else if (!v.paused) {
            v.pause();
          }
        }
      },
      { threshold: 0.2 },
    );
    document.querySelectorAll("video[data-scroll-video]").forEach((el) => {
      const v = el as HTMLVideoElement;
      v.muted = true;
      v.defaultMuted = true;
      const onEnter = () => void v.play().catch(() => {});
      v.addEventListener("mouseenter", onEnter);
      cleanups.push(() => v.removeEventListener("mouseenter", onEnter));
      videoIO.observe(v);
    });
    cleanups.push(() => videoIO.disconnect());

    /* ---------- blanket auto-reveal for section content ---------- */
    const autoIO = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const el = entry.target as HTMLElement;
          el.style.opacity = "1";
          el.style.transform = "none";
          autoIO.unobserve(el);
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -6% 0px" },
    );

    let index = 0;
    const tagged = new WeakSet<Element>();
    const tag = () => {
      document.querySelectorAll(AUTO_SELECTOR).forEach((node) => {
        const el = node as HTMLElement;
        if (tagged.has(el)) return;
        // Anything already driven by an explicit reveal primitive opts out.
        if (el.closest(".asta-reveal, .asta-rv, .asta-why-card")) return;
        if (el.closest("header, footer, nav")) return;
        if (el.offsetParent === null && el.getClientRects().length === 0) return;
        tagged.add(el);
        const delay = (index++ % 6) * 150;
        el.style.opacity = "0";
        el.style.transform = "translateY(42px) scale(0.965)";
        el.style.transition = `opacity 1.5s ease ${delay}ms, transform 1.6s ${AUTO_EASE} ${delay}ms`;
        autoIO.observe(el);
      });
    };

    const startTimer = window.setTimeout(() => {
      tag();
      let runs = 0;
      const interval = window.setInterval(() => {
        tag();
        if (++runs > 14) window.clearInterval(interval);
      }, 400);
      cleanups.push(() => window.clearInterval(interval));

      // Safety: never leave content stranded invisible.
      const safety = window.setTimeout(() => {
        document.querySelectorAll(AUTO_SELECTOR).forEach((node) => {
          const el = node as HTMLElement;
          if (!tagged.has(el)) return;
          el.style.opacity = "1";
          el.style.transform = "none";
        });
      }, 9000);
      cleanups.push(() => window.clearTimeout(safety));
    }, 350);

    cleanups.push(() => window.clearTimeout(startTimer));
    cleanups.push(() => autoIO.disconnect());

    return () => cleanups.forEach((fn) => fn());
  }, [pathname]);

  return null;
}
