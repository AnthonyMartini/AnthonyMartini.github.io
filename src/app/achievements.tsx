"use client";
import { Tag } from "./card";
import { forwardRef, LegacyRef } from "react";
import { motion } from "framer-motion";

const Achievements = forwardRef((props, ref: LegacyRef<HTMLDivElement>) => {
  return (
    <div
      className="relative p-4 md:p-8 flex flex-col items-center pt-20 pb-20 w-full min-h-screen bg-slate-50"
      ref={ref}
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-5xl z-10 space-y-16"
      >
        
        {/* Achievements & Skills Section */}
        <div>
            <h1 className="text-4xl md:text-6xl font-terminal text-slate-800 text-center mb-8">
            Achievements & Skills_
            </h1>

            {/* Achievements */}
            <div className="flex flex-wrap gap-6 mb-16 justify-center">
            {/* Achievement Card 1 - Microsoft */}
            <motion.div 
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.2 }}
                className="glass-panel rounded-xl p-6 bg-white/80 backdrop-filter backdrop-blur-md border border-slate-200 shadow-sm hover:shadow-lg hover:border-electric-blue/30 transition-all duration-300 flex-1 min-w-[320px] max-w-[400px]"
            >
                <div className="flex items-center gap-4">
                <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center">
                    <img 
                        src="/img/PowerPlatform.png" 
                        alt="Microsoft Power Platform" 
                        className="h-full w-auto object-contain"
                    />
                </div>
                <h3 className="text-lg font-bold font-terminal text-slate-800 flex-1">
                    Microsoft Certified: Power Platform App Maker
                </h3>
                </div>
            </motion.div>

            {/* Achievement Card 2 - National Merit */}
            <motion.div 
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.2 }}
                className="glass-panel rounded-xl p-6 bg-white/80 backdrop-filter backdrop-blur-md border border-slate-200 shadow-sm hover:shadow-lg hover:border-electric-blue/30 transition-all duration-300 flex-1 min-w-[320px] max-w-[400px]"
            >
                <div className="flex items-center gap-4">
                <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center">
                    <img 
                        src="/img/National Merit Logo.png" 
                        alt="National Merit Scholar" 
                        className="h-full w-auto object-contain"
                    />
                </div>
                <h3 className="text-lg font-bold font-terminal text-slate-800 flex-1">
                    National Merit Scholar Finalist
                </h3>
                </div>
            </motion.div>

            {/* Achievement Card 3 - Eagle Scout */}
            <motion.div 
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.2 }}
                className="glass-panel rounded-xl p-6 bg-white/80 backdrop-filter backdrop-blur-md border border-slate-200 shadow-sm hover:shadow-lg hover:border-electric-blue/30 transition-all duration-300 flex-1 min-w-[320px] max-w-[400px]"
            >
                <div className="flex items-center gap-4">
                <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center">
                    <img 
                        src="/img/BSA.png" 
                        alt="Eagle Scout" 
                        className="h-full w-auto object-contain"
                    />
                </div>
                <h3 className="text-lg font-bold font-terminal text-slate-800 flex-1">
                    Eagle Scout
                </h3>
                </div>
            </motion.div>
            </div>

            {/* Skills */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                 <div className="glass-panel p-6 rounded-xl bg-white/60">
                    <h3 className="text-xl font-bold font-terminal text-slate-800 mb-4">Languages</h3>
                    <div className="flex flex-wrap gap-2">
                        {["Python", "TypeScript", "C++", "C", "C#", "Swift", "Verilog", "RISC-V Assembly"].map(skill => (
                            <Tag key={skill} value={skill} />
                        ))}
                    </div>
                 </div>
                 <div className="glass-panel p-6 rounded-xl bg-white/60">
                    <h3 className="text-xl font-bold font-terminal text-slate-800 mb-4">Tools & Frameworks</h3>
                    <div className="flex flex-wrap gap-2">
                        {["PyTorch", "AWS", "React", "Tailwind", "FastAPI", "WebSockets", "Numpy", "Git", "Postman", "Jira", "Power Apps"].map(skill => (
                             <Tag key={skill} value={skill} />
                        ))}
                    </div>
                 </div>
            </div>
        </div>
      </motion.div>
    </div>
  );
});
Achievements.displayName = "Achievements";
export default Achievements;
