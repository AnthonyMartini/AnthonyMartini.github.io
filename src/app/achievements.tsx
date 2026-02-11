"use client";
import { Card, Tag } from "./card";
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
            <div className="space-y-6 mb-16">
            <Card.Root className="w-full">
                <Card.Heading>Microsoft Certified: Power Platform App Maker</Card.Heading>
                <div className="flex w-full flex-row flex-wrap text-slate-600">
                <div className="flex-1 pl-2">
                    <p>
                        Measured ability to design and create business solutions to simplify and automate tasks and processes using the Microsoft Power Platform.
                    </p>
                </div>
                <div className="w-full mt-4 flex flex-row gap-2 flex-wrap">
                    <Tag value="Certification" />
                    <Tag value="Microsoft" />
                    <Tag value="Low-Code" />
                </div>
                </div>
            </Card.Root>

            <Card.Root className="w-full">
                <Card.Heading>National Merit Scholar</Card.Heading>
                <div className="flex w-full flex-row flex-wrap text-slate-600">
                <div className="flex-1 pl-2">
                    <p>
                    Finalists are selected based on their entire application which
                    includes recommendations, test scores, transcripts, and a personal
                    essay.
                    </p>
                </div>
                <div className="w-full mt-4 flex flex-row gap-2 flex-wrap">
                    <Tag value="STEM" />
                    <Tag value="Scholarship" />
                    <Tag value="Academic" />
                </div>
                </div>
            </Card.Root>

            <Card.Root className="w-full">
                <Card.Heading>Eagle Scout</Card.Heading>
                <div className="flex w-full flex-row flex-wrap text-slate-600">
                <div className="flex-1 pl-2">
                    <p>
                    Highest achievement or rank attainable in the Scouts BSA program of the Boy Scouts of America.
                    </p>
                </div>
                <div className="w-full mt-4 flex flex-row gap-2 flex-wrap">
                    <Tag value="Leadership" />
                    <Tag value="Community" />
                    <Tag value="Service" />
                </div>
                </div>
            </Card.Root>
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
