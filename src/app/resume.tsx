"use client";
import React, { forwardRef, LegacyRef } from "react";
import { motion } from "framer-motion";
import { Card, Tag } from "./card"; 

const Resume = forwardRef((props, ref: LegacyRef<HTMLDivElement>) => {
  return (
    <div
      className="relative p-4 md:p-8 flex flex-col items-center pt-20 pb-20 min-h-screen bg-slate-50"
      ref={ref}
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl w-full z-10 space-y-16"
      >
        {/* Education Section */}
        <div>
            <h1 className="text-4xl md:text-6xl font-terminal text-slate-800 text-center mb-12">
            Education_
            </h1>
            <Card.Root>
                <Card.Heading logoClass="USF">University of South Florida</Card.Heading>
                <div className="flex w-full flex-row flex-wrap text-slate-600">
                    <div className="flex-1 pl-2 min-w-[250px] pb-4">
                        <p className="font-bold text-slate-800">B.S. in Computer Engineering</p>
                        <p className="text-sm">Minor in Mathematics, Honors College</p>
                        <p className="text-electric-blue mt-2 font-mono text-sm">
                            May 2026
                        </p>
                         <p className="text-sm mt-1 font-semibold">GPA: 4.0/4.0</p>
                    </div>
                    <div className="flex-1 pl-2 min-w-[250px] pb-4">
                        <p className="text-sm font-semibold mb-2">Relevant Coursework:</p>
                        <p className="text-sm leading-relaxed">
                            Natural Language Processing, Deep Reinforcement Learning, Hardware Accelerators for Machine Learning, 
                            AI and Analytics for Organizations, Analysis of Algorithms, Differential Equations, 
                            CMOS-VLSI Design, Graph Theory.
                        </p>
                    </div>
                </div>
            </Card.Root>
        </div>

        {/* Experience Section */}
        <div>
            <h1 className="text-4xl md:text-6xl font-terminal text-slate-800 text-center mb-12">
            Experience_
            </h1>

            <div className="space-y-8">
                {/* P&G 2025 */}
                <Card.Root>
                <Card.Heading logoClass="PG">Software Engineering Intern</Card.Heading>
                <div className="flex w-full flex-row flex-wrap text-slate-600">
                    <div className="flex-1 pl-2 min-w-[250px] pb-4">
                    <p className="font-bold text-slate-800">Procter & Gamble</p>
                    <p>Cincinnati, Ohio</p>
                    <p className="text-electric-blue mt-2 font-mono text-sm">
                        May 2025 - Aug 2025
                    </p>
                    </div>
                    <div className="flex-1 pl-2 min-w-[250px] pb-4">
                    <ul className="list-disc pl-5 space-y-2 text-sm">
                        <li>
                        Designed and deployed a real-time collaboration service using <span className="text-electric-blue font-semibold">WebSockets</span> for an internal application, enabling user presence indicators, cell-locking, and live updates.
                        </li>
                        <li>
                        Enhanced an existing commenting system by implementing user tagging functionality, enabling user search and email notifications.
                        </li>
                    </ul>
                    </div>
                    <div className="w-full mt-4 flex flex-row gap-2 flex-wrap">
                    <Tag value="WebSockets" />
                    <Tag value="React" />
                    <Tag value="Real-time" />
                    </div>
                </div>
                </Card.Root>

                {/* P&G 2024 */}
                <Card.Root>
                <Card.Heading logoClass="PG">Software Engineering Intern</Card.Heading>
                <div className="flex w-full flex-row flex-wrap text-slate-600">
                    <div className="flex-1 pl-2 min-w-[250px] pb-4">
                    <p className="font-bold text-slate-800">Procter & Gamble</p>
                    <p>Cincinnati, Ohio</p>
                    <p className="text-electric-blue mt-2 font-mono text-sm">
                        May 2024 - Aug 2024
                    </p>
                    </div>
                    <div className="flex-1 pl-2 min-w-[250px] pb-4">
                    <ul className="list-disc pl-5 space-y-2 text-sm">
                        <li>
                        Built a documentation platform to showcase examples of <span className="text-electric-blue font-semibold">25</span> components in an internal React component library.
                        </li>
                        <li>
                        Implemented <span className="text-electric-blue font-semibold">Playwright</span> tests into GitHub CI/CD pipeline, eliminating over <span className="text-electric-blue font-semibold">40</span> accessibility errors.
                        </li>
                        <li>
                        Patched issues and standardized design for a set of components, addressing <span className="text-electric-blue font-semibold">15</span> issue tickets.
                        </li>
                    </ul>
                    </div>
                    <div className="w-full mt-4 flex flex-row gap-2 flex-wrap">
                    <Tag value="React" />
                    <Tag value="Playwright" />
                    <Tag value="CI/CD" />
                    <Tag value="Accessibility" />
                    </div>
                </div>
                </Card.Root>

                {/* Intertape Polymer Group */}
                <Card.Root>
                <Card.Heading logoClass="IPG">Power Platform Developer</Card.Heading>
                <div className="flex w-full flex-row flex-wrap text-slate-600">
                    <div className="flex-1 pl-2 min-w-[250px] pb-4">
                    <p className="font-bold text-slate-800">Intertape Polymer Group</p>
                    <p className="text-sm">Part-Time</p>
                    <p className="text-electric-blue mt-2 font-mono text-sm">
                        Nov 2023 - Present
                    </p>
                    </div>
                    <div className="flex-1 pl-2 min-w-[250px] pb-4">
                    <ul className="list-disc pl-5 space-y-2 text-sm">
                        <li>
                        Designed, developed, and maintained <span className="text-electric-blue font-semibold">7+</span> production Power Apps and Power Automate workflows, saving <span className="text-electric-blue font-semibold">400+</span> hours annually.
                        </li>
                        <li>
                        Communicated with business owners to gather requirements and translate needs into maintainable solutions.
                        </li>
                    </ul>
                    </div>
                    <div className="w-full mt-4 flex flex-row gap-2 flex-wrap">
                    <Tag value="Power Apps" />
                    <Tag value="Power Automate" />
                    <Tag value="SQL" />
                    <Tag value="Dataverse" />
                    </div>
                </div>
                </Card.Root>

                {/* P&G 2023 */}
                <Card.Root>
                <Card.Heading logoClass="PG">Software Engineering Intern</Card.Heading>
                <div className="flex w-full flex-row flex-wrap text-slate-600">
                    <div className="flex-1 pl-2 min-w-[250px] pb-4">
                    <p className="font-bold text-slate-800">Procter & Gamble</p>
                    <p>Cincinnati, Ohio</p>
                    <p className="text-electric-blue mt-2 font-mono text-sm">
                        May 2023 - Aug 2023
                    </p>
                    </div>
                    <div className="flex-1 pl-2 min-w-[250px] pb-4">
                    <ul className="list-disc pl-5 space-y-2 text-sm">
                        <li>
                        Developed a Python-based automation using <span className="text-electric-blue font-semibold">Selenium</span> to extract, transform, and organize invoice data, saving 90+ hours annually.
                        </li>
                        <li>
                        Managed and developed new and existing projects in the Microsoft Power Platform, saving <span className="text-electric-blue font-semibold">300</span> hours annually.
                        </li>
                    </ul>
                    </div>
                    <div className="w-full mt-4 flex flex-row gap-2 flex-wrap">
                    <Tag value="Python" />
                    <Tag value="Selenium" />
                    <Tag value="Power Platform" />
                    </div>
                </div>
                </Card.Root>
            </div>
        </div>
      </motion.div>
    </div>
  );
});
Resume.displayName = "Resume";
export default Resume;
