"use client";
import React, { forwardRef, LegacyRef } from "react";
import { motion } from "framer-motion";

const AboutMe = forwardRef((props, ref: LegacyRef<HTMLDivElement>) => {
  return (
    <div
      id="about-me-section"
      className="relative py-20 px-4 min-h-[600px] flex flex-col items-center justify-center overflow-hidden bg-slate-50"
      ref={ref}
    >
      {/* Background Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none" />

      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl w-full z-10 grid grid-cols-1 md:grid-cols-5 gap-12 items-center"
      >
        {/* Profile Picture */}
        <div className="flex justify-center order-1 md:order-2 md:col-span-2">
            <div className="relative group w-64 h-64 md:w-80 md:h-80">
                <div className="absolute inset-0 bg-electric-blue rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
                <div className="relative w-full h-full pfp rounded-full border-4 border-white shadow-2xl overflow-hidden transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute -bottom-2 -right-2 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full text-xs font-mono text-slate-600 shadow-lg border border-slate-200 transform rotate-[-6deg] hover:rotate-0 transition-transform duration-300 z-20">
                    📍 This is me in Rishikesh, India!
                </div>
            </div>
        </div>

        {/* Text Content */}
        <div className="order-2 md:order-1 md:col-span-3 space-y-6 text-center md:text-left">
             <div className="glass-panel p-8 rounded-2xl relative overflow-hidden bg-white/60 backdrop-blur-md border border-slate-200 shadow-sm">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-electric-blue to-transparent opacity-50" />
                
                <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
                  Hello! 
                </h2>
                
                <p className="text-slate-600 leading-relaxed font-sans text-lg mb-6">
                  I&apos;m a <BB>Computer Engineering</BB> student at the <BB>University of South Florida</BB>. I am passionate about learning and building applications, the tools come second.
                </p>
                
                <div className="space-y-3 text-slate-600 leading-relaxed font-sans text-base">
                  <p>
                    Experienced in full stack development using tools such as{" "}
                    <BB>React</BB>, <BB>Tailwind</BB>, <BB>MongoDB</BB>,{" "}
                    <BB>Express</BB>, and <BB>Next.js</BB>.
                  </p>
                  <p>
                    Strong understanding of computer science concepts like{" "}
                    <BB>data structures</BB>, <BB>algorithms</BB>, and{" "}
                    <BB>graph theory</BB>.
                  </p>
                  <p>
                    Researched <BB>machine learning models</BB> and explored{" "}
                    <BB>neural networks</BB> for practical applications in automation and data analysis.
                  </p>
                </div>
             </div>


        </div>
      </motion.div>
    </div>
  );
});

const BB = ({ children }: { children: React.ReactNode }) => (
  <span className="font-bold text-slate-800 border-b-2 border-electric-blue/30 hover:border-electric-blue transition-colors duration-300">
    {children}
  </span>
);

AboutMe.displayName = "AboutMe";
export default AboutMe;
