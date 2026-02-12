"use client";
import React, { useRef, useState, useEffect, forwardRef, LegacyRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const titles = ["Software Engineer", "Power Apps Developer", "UX/UI Enthusiast", "Automation Specialist", "Full Stack Developer"];

const Header = forwardRef((props, ref: LegacyRef<HTMLDivElement>) => {
  const text = "Anthony Martini";
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div 
      className="header relative h-screen w-full flex flex-col justify-center items-center overflow-hidden" 
      ref={ref}
    >
      {/* Background Grid - subtle and dark on light bg */}
      <div className="absolute inset-0 bg-grid-pattern bg-[size:40px_40px] opacity-30 pointer-events-none" />
      
      {/* Main Content */}
      <div className="z-10 text-center px-4 relative">
        <div className="h-8 mb-4"> {/* Fixed height container to prevent layout shift */}
          <AnimatePresence mode="wait">
            <motion.p 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-slate-500 font-mono text-lg md:text-xl tracking-widest uppercase flex justify-center gap-1"
            >
              {titles[index].split("").map((char, i) => (
                <motion.span
                  key={i}
                  initial={{ y: 0 }}
                  animate={{ y: [0, -5, 0] }}
                  transition={{ 
                    duration: 0.5, 
                    delay: i * 0.05,
                    repeat: 0 
                  }}
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </motion.p>
          </AnimatePresence>
        </div>
        
        <motion.h1
          className="text-6xl md:text-8xl lg:text-9xl font-terminal text-slate-900 tracking-tighter"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          {text.split("").map((char, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.1, duration: 0.1 }}
            >
              {char}
            </motion.span>
          ))}
          <motion.span
            animate={{ opacity: [0, 1, 0] }}
            transition={{ repeat: Infinity, duration: 0.8 }}
            className="inline-block w-4 h-[0.8em] bg-electric-blue ml-2 align-middle"
          />
        </motion.h1>

        <motion.div
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ delay: 2.0, duration: 0.5 }}
           className="mt-12 flex flex-col items-center gap-6"
        >
            <a 
              href="/Resume.pdf" 
              download 
              className="px-8 py-3 rounded-md bg-slate-900 text-white font-mono hover:bg-electric-blue transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
                Download Resume
            </a>
            
            {/* Social Links */}
            <div className="flex gap-6 items-center">
              <a
                href="https://github.com/AnthonyMartini"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-600 hover:text-electric-blue transition-colors duration-300"
                aria-label="GitHub"
              >
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/anthony-martini-b5a8b6256/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-600 hover:text-electric-blue transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
        </motion.div>
      </div>
    </div>
  );
});

Header.displayName = "Header";
export default Header;
