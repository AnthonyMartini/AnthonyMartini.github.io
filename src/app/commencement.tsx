"use client";
import React, { useEffect, useRef, useState } from "react";

/** Returns a value 0–1 representing how far `el` has scrolled into view.
 *  0 = element just entering the bottom of the viewport
 *  1 = element's top has reached `triggerOffset` from the top of the viewport
 */
function useScrollProgress(triggerOffset = 0.75): [React.RefObject<HTMLDivElement>, number] {
  const ref = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const windowH = window.innerHeight;
      // distance from top of viewport to bottom of element
      const visible = windowH - rect.top;
      const total = windowH * triggerOffset + rect.height * 0.5;
      setProgress(Math.min(1, Math.max(0, visible / total)));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [triggerOffset]);

  return [ref, progress];
}

const Commencement = () => {
  const [sectionRef, progress] = useScrollProgress(0.55);

  // Phase thresholds (all complete well before user exits the section)
  // 0.00 – 0.10 → nothing visible
  // 0.10 – 0.28 → quote part 1 fades in
  // 0.28 – 0.46 → quote part 2 fades in
  // 0.46 – 0.66 → image + description fades in

  const phase1 = Math.min(1, Math.max(0, (progress - 0.00) / 0.20)); // quote part 1
  const phase2 = Math.min(1, Math.max(0, (progress - 0.22) / 0.20)); // quote part 2
  const phase3 = Math.min(1, Math.max(0, (progress - 0.44) / 0.22)); // image + desc

  // slide-up distance (px)
  const slideUp = (phase: number) => `${(1 - phase) * 28}px`;

  return (
    <div
      ref={sectionRef}
      className="relative pt-16 pb-10 px-4 min-h-[80vh] flex flex-col items-center justify-start overflow-hidden bg-slate-950 text-slate-100"
    >
      {/* Subtle grid texture */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] invert pointer-events-none" />

      <div className="max-w-5xl w-full z-10">

        {/* ── Quote card ── */}
        <div className="relative mb-14">

          {/* Part 1 */}
          <div
            style={{
              opacity: phase1,
              transform: `translateY(${slideUp(phase1)})`,
              transition: "opacity 0.6s cubic-bezier(0.4,0,0.2,1), transform 0.6s cubic-bezier(0.4,0,0.2,1)",
            }}
          >
            <blockquote className="text-2xl md:text-3xl lg:text-4xl font-medium text-slate-300 italic leading-relaxed font-sans">
              &ldquo;Engineering is not just about following steps to get an answer on a test.
            </blockquote>
          </div>

          {/* Part 2 */}
          <div
            style={{
              opacity: phase2,
              transform: `translateY(${slideUp(phase2)})`,
              transition: "opacity 0.6s cubic-bezier(0.4,0,0.2,1), transform 0.6s cubic-bezier(0.4,0,0.2,1)",
              marginTop: "5.5rem",
            }}
          >
            <blockquote className="text-2xl md:text-3xl lg:text-4xl font-medium italic leading-relaxed font-sans">
              <span className="text-emerald-400 font-semibold not-italic">
                Engineering is about analyzing a problem
              </span>{" "}
              and{" "}
              <span className="text-amber-300 font-semibold not-italic">
                using what is available to come to a solution.
              </span>
              &rdquo;
            </blockquote>
          </div>
        </div>

        {/* ── Image + description row ── */}
        <div
          className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start"
          style={{
            opacity: phase3,
            transform: `translateY(${slideUp(phase3)})`,
            transition: "opacity 0.7s cubic-bezier(0.4,0,0.2,1), transform 0.7s cubic-bezier(0.4,0,0.2,1)",
          }}
        >
          {/* Photo */}
          <div className="md:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm overflow-hidden rounded-2xl shadow-2xl bg-slate-950">
              <img
                src="/img/commencement.jpg"
                alt="Anthony Martini speaking at USF Commencement 2026"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Description */}
          <div className="md:col-span-7 flex items-start pt-1">
            <div className="space-y-4 text-slate-400 text-base md:text-lg leading-relaxed font-sans">
              <p>
                I was honored to speak at USF&apos;s 138th commencement for the College of
                Engineering and the Bellini College of AI, Cybersecurity and Computing.
              </p>
              <p>
                My message was simple: technical knowledge alone isn&apos;t enough. In a world
                rapidly shaped by AI, what defines a great engineer is the ability to adapt,
                reason critically, and never stop learning.
              </p>
              <p>
                My goal was to leave my fellow graduates with the right mindset, not to compete
                with AI, but to use it to solve the problems that come next.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Commencement;
