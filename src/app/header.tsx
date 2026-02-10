"use client";
import React, { useRef } from "react";
import { motion } from "framer-motion";

const Header = () => {
  const ref = useRef(null);
  const text = "Anthony Martini";

  return (
    <div 
      className="header relative h-screen w-full flex flex-col justify-center items-center overflow-hidden" 
      ref={ref}
    >
      {/* Background Grid - subtle and dark on light bg */}
      <div className="absolute inset-0 bg-grid-pattern bg-[size:40px_40px] opacity-30 pointer-events-none" />
      
      {/* Main Content */}
      <div className="z-10 text-center px-4 relative">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-slate-500 font-mono text-lg md:text-xl mb-4 tracking-widest uppercase"
        >
          Software Engineer
        </motion.p>
        
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
           className="mt-12"
        >
            <a 
              href="/resume.pdf" 
              download 
              className="px-8 py-3 rounded-md bg-slate-900 text-white font-mono hover:bg-electric-blue transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
                Download Resume
            </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="w-6 h-10 border-2 border-slate-400 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-slate-400 rounded-full animate-bounce" />
        </div>
      </motion.div>
    </div>
  );
};

export default Header;
