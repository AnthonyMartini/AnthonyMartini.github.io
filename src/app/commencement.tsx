"use client";
import React, { forwardRef, useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { SectionTitle } from "./card";

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

const clamp01 = (v: number) => Math.min(1, Math.max(0, v));

type QuoteWord = {
  t: string;
  cls: string;
  /** rgb triplet for the revealed glow, e.g. "52, 211, 153" */
  glow?: string;
};

const EMERALD = "52, 211, 153";
const AMBER = "251, 191, 36";

// Part 1: indices 0–13, Part 2: indices 14–29
const QUOTE_WORDS: QuoteWord[] = [
  ...["“Engineering", "is", "not", "just", "about", "following", "steps", "to", "get", "an", "answer", "on", "a", "test."].map(
    (t) => ({ t, cls: "text-slate-300" })
  ),
  ...["Engineering", "is", "about", "analyzing", "a", "problem"].map((t) => ({
    t,
    cls: "text-emerald-400 font-semibold not-italic",
    glow: EMERALD,
  })),
  { t: "and", cls: "text-slate-300" },
  ...["using", "what", "is", "available", "to", "come", "to", "a", "solution.”"].map((t) => ({
    t,
    cls: "text-amber-300 font-semibold not-italic",
    glow: AMBER,
  })),
];

const QUOTE_PART_1_END = 14;
const WORD_START = 0.05; // progress at which the first word begins revealing
const WORD_SPAN = 0.45; // progress range over which all words reveal
const WORD_STEP = WORD_SPAN / QUOTE_WORDS.length;

// Deterministic particle field (must be identical between server and client render)
const PARTICLE_COLORS = ["#34d399", "#fbbf24", "#38bdf8", "#e2e8f0"];
const PARTICLES = Array.from({ length: 18 }, (_, i) => ({
  left: (i * 53 + 7) % 100,
  top: 6 + ((i * 37) % 84),
  size: 2 + (i % 3),
  delay: -((i * 1.7) % 12),
  duration: 9 + (i % 5) * 2.5,
  color: PARTICLE_COLORS[i % PARTICLE_COLORS.length],
  opacity: 0.25 + ((i * 13) % 30) / 100,
}));

const Commencement = forwardRef((props, forwardedRef: React.ForwardedRef<HTMLDivElement>) => {
  const [sectionRef, progress] = useScrollProgress(0.55);

  // Attach both the internal scroll-progress ref and the forwarded nav ref
  const setRefs = (el: HTMLDivElement | null) => {
    (sectionRef as React.MutableRefObject<HTMLDivElement | null>).current = el;
    if (typeof forwardedRef === "function") forwardedRef(el);
    else if (forwardedRef) forwardedRef.current = el;
  };

  // 3D tilt for the photo card
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [7, -7]), { stiffness: 150, damping: 18 });
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-7, 7]), { stiffness: 150, damping: 18 });

  const titlePhase = clamp01(progress / 0.1);
  const phase3 = clamp01((progress - 0.5) / 0.22); // image + description row

  const slideUp = (phase: number) => `${(1 - phase) * 28}px`;

  const renderWords = (from: number, to: number) =>
    QUOTE_WORDS.slice(from, to).map((w, idx) => {
      const i = from + idx;
      // each word reveals over a window ~4 steps wide, staggered by index
      const r = clamp01((progress - (WORD_START + i * WORD_STEP)) / (WORD_STEP * 4));
      return (
        <React.Fragment key={i}>
          <span
            className={w.cls}
            style={{
              opacity: 0.12 + r * 0.88,
              filter: `blur(${((1 - r) * 4).toFixed(2)}px)`,
              textShadow: w.glow ? `0 0 18px rgba(${w.glow}, ${(0.4 * r).toFixed(2)})` : undefined,
              transition: "opacity 0.25s linear, filter 0.25s linear",
            }}
          >
            {w.t}
          </span>{" "}
        </React.Fragment>
      );
    });

  return (
    <div
      ref={setRefs}
      className="relative pt-16 pb-16 px-4 min-h-[80vh] flex flex-col items-center justify-start overflow-hidden bg-slate-950 text-slate-100"
    >
      {/* Subtle grid texture */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] invert pointer-events-none" />

      {/* Stage spotlight from above */}
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_60%_55%_at_50%_0%,rgba(52,211,153,0.09),transparent_70%)] pointer-events-none"
        aria-hidden="true"
      />

      {/* Ambient glows echoing the quote's accent colors */}
      <div className="absolute -top-24 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-amber-400/[0.07] rounded-full blur-3xl pointer-events-none" aria-hidden="true" />

      {/* Floating ember particles */}
      {PARTICLES.map((p, i) => (
        <span
          key={i}
          aria-hidden="true"
          className="absolute rounded-full pointer-events-none"
          style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            background: p.color,
            "--p-op": p.opacity,
            animation: `ember ${p.duration}s ease-in-out ${p.delay}s infinite, twinkle ${(p.duration * 0.7).toFixed(1)}s ease-in-out ${p.delay}s infinite`,
          } as React.CSSProperties}
        />
      ))}

      <div className="max-w-5xl w-full z-10">

        {/* ── Section title ── */}
        <div
          style={{
            opacity: titlePhase,
            transform: `translateY(${slideUp(titlePhase)})`,
            transition: "opacity 0.6s cubic-bezier(0.4,0,0.2,1), transform 0.6s cubic-bezier(0.4,0,0.2,1)",
          }}
        >
          <SectionTitle dark eyebrow="00 / commencement" className="mb-4">
            The Speech_
          </SectionTitle>
          <div className="flex justify-center mb-14">
            <span className="inline-flex items-center gap-2 font-mono text-xs text-slate-400 px-4 py-1.5 rounded-full bg-white/5 border border-white/10">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
              </span>
              USF 138th Commencement &middot; May 2026 &middot; Tampa, FL
            </span>
          </div>
        </div>

        {/* ── Quote: words light up as you scroll ── */}
        <div className="relative mb-16">
          {/* Giant ghost quote mark */}
          <span
            className="absolute -top-16 -left-2 md:-left-10 text-[10rem] leading-none font-serif text-emerald-500/10 select-none pointer-events-none"
            aria-hidden="true"
          >
            &ldquo;
          </span>

          <blockquote className="relative text-2xl md:text-3xl lg:text-4xl font-medium italic leading-relaxed font-sans">
            {renderWords(0, QUOTE_PART_1_END)}
          </blockquote>

          <blockquote className="relative text-2xl md:text-3xl lg:text-4xl font-medium italic leading-relaxed font-sans mt-12 md:mt-14">
            {renderWords(QUOTE_PART_1_END, QUOTE_WORDS.length)}
          </blockquote>
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
          {/* Photo: 3D tilt card linking to the speech */}
          <div className="md:col-span-5 flex justify-center" style={{ perspective: "900px" }}>
            <motion.a
              href="https://www.youtube.com/live/S-m-dw9Z6yo?si=OmUEIQoxqrB1kQeq&t=2857"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Watch Anthony's commencement speech on YouTube"
              className="relative block w-full max-w-sm group cursor-pointer"
              style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                mx.set((e.clientX - rect.left) / rect.width - 0.5);
                my.set((e.clientY - rect.top) / rect.height - 0.5);
              }}
              onMouseLeave={() => {
                mx.set(0);
                my.set(0);
              }}
            >
              {/* Glow behind the card */}
              <div className="absolute -inset-3 bg-gradient-to-br from-emerald-500/25 via-transparent to-amber-400/20 rounded-3xl blur-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" aria-hidden="true" />

              <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-slate-950 ring-1 ring-white/10 group-hover:ring-emerald-400/40 transition-all duration-300">
                <img
                  src="/img/commencement.jpg"
                  alt="Anthony Martini speaking at USF Commencement 2026"
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />

                {/* Caption */}
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950/95 via-slate-950/60 to-transparent px-4 pt-10 pb-3">
                  <p className="font-mono text-xs text-slate-300 tracking-wide">
                    &#9658; Watch the speech &middot; YouTube
                  </p>
                </div>
              </div>
            </motion.a>
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

              <div className="flex flex-wrap gap-2 pt-1">
                {["College of Engineering", "Bellini College of AI, Cybersecurity & Computing"].map((chip) => (
                  <span key={chip} className="font-mono text-xs text-slate-300 px-3 py-1 rounded-full bg-white/5 border border-white/10">
                    {chip}
                  </span>
                ))}
              </div>

              <div className="pt-2">
                <a
                  href="https://www.youtube.com/live/S-m-dw9Z6yo?si=OmUEIQoxqrB1kQeq&t=2857"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 hover:border-emerald-500/50 text-emerald-400 hover:text-emerald-300 text-sm font-semibold transition-all duration-200"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></svg>
                  Watch Speech on YouTube
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
});

Commencement.displayName = "Commencement";
export default Commencement;
