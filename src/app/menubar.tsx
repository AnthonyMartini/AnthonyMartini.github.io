"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const MenuBar = ({
  refs,
}: {
  refs: { name: string; ref: React.RefObject<HTMLDivElement> }[];
}) => {
  const [isVisible, setIsVisible] = useState(true);

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

  const items = [
    { name: "About Me", object: refs[0]?.ref.current },
    { name: "Resume", object: refs[1]?.ref.current },
    { name: "Projects", object: refs[2]?.ref.current },
    { name: "Achievements", object: refs[3]?.ref.current },
  ];

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
              "menuBar rounded-full px-6 py-3 flex items-center space-x-6",
              "bg-white/80 backdrop-blur-md border border-slate-200 shadow-lg"
            )}
          >
            {items.map((item) => (
              <motion.div
                key={item.name}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="cursor-pointer text-sm md:text-base font-medium text-slate-600 hover:text-electric-blue transition-colors duration-200"
                onClick={() => {
                  if (item.object) {
                    item.object.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                  }
                }}
              >
                {item.name}
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default MenuBar;
