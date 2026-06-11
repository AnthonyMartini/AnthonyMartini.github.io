"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const MenuBar = ({
  refs,
}: {
  refs: { name: string; ref: React.RefObject<HTMLDivElement> }[];
}) => {
  const [isVisible, setIsVisible] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const footer = document.getElementById("footer");
    if (!footer) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(!entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  // Track which section is currently in view: the last section whose top
  // has crossed the upper half of the viewport wins.
  useEffect(() => {
    const onScroll = () => {
      const marker = window.innerHeight * 0.5;
      let current = 0;
      refs.forEach((item, i) => {
        const el = item.ref.current;
        if (el && el.getBoundingClientRect().top <= marker) {
          current = i;
        }
      });
      setActiveIndex(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [refs]);

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className={cn(
              "menuBar rounded-full px-2 py-2 flex items-center gap-1",
              "bg-white/80 backdrop-blur-md border border-slate-200 shadow-lg shadow-slate-900/5"
            )}
          >
            {refs.map((item, i) => (
              <motion.div
                key={item.name}
                whileTap={{ scale: 0.95 }}
                className={cn(
                  "relative cursor-pointer text-sm md:text-base font-medium px-3 md:px-4 py-1.5 rounded-full transition-colors duration-200",
                  i === activeIndex
                    ? "text-electric-blue"
                    : "text-slate-600 hover:text-slate-900"
                )}
                onClick={() => {
                  if (item.ref?.current) {
                    item.ref.current.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                  }
                }}
              >
                {i === activeIndex && (
                  <motion.div
                    layoutId="nav-pill"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    className="absolute inset-0 rounded-full bg-electric-blue/10 border border-electric-blue/20"
                  />
                )}
                <span className="relative z-10">{item.name}</span>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default MenuBar;
