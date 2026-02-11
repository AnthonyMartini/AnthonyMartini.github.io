"use client";
import React, { forwardRef, LegacyRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, Tag } from "./card"; 

const ChevronDown = ({ className = "" }) => (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="20" 
      height="20" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <path d="m6 9 6 6 6-6"/>
    </svg>
);

const ExpandablePGCard = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Card.Root logoClass="PG" className="transition-all duration-500">
            <Card.Heading>Software Engineering Intern</Card.Heading>
            <div className="flex w-full flex-row flex-wrap text-slate-600">
                <div className="flex-1 pl-2 min-w-[250px] pb-4">
                    <p className="font-bold text-slate-800">Procter & Gamble</p>
                    <p>Cincinnati, Ohio</p>
                    <p className="text-electric-blue mt-2 font-mono text-sm">
                        Summers 2023, 2024, 2025
                    </p>
                </div>
                
                <div className="flex-1 pl-2 min-w-[250px]">
                    <div className="mb-4">
                        <p className="text-sm leading-relaxed">
                             Spearheaded development of scalable web applications and automation tools across three internships, directly impacting business efficiency and user experience.
                        </p>
                    </div>
                </div>
            </div>

            {/* Full Width expandable section */}
            <div className="w-full mt-2">
                 <button 
                    onClick={() => setIsOpen(!isOpen)}
                    className="flex items-center gap-2 text-sm font-semibold text-electric-blue hover:text-blue-600 transition-colors mb-4 group pl-2"
                >
                        {isOpen ? "Hide Breakdown" : "View Breakdown"}
                        <motion.div
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        >
                        <ChevronDown />
                        </motion.div>
                </button>

                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="overflow-hidden w-full"
                        >
                            <div className="space-y-6 border-l-2 border-electric-blue/20 pl-6 mb-6 ml-2">
                                {/* Summer 2025 */}
                                <div>
                                    <p className="text-sm font-bold text-slate-700 mb-2">Summer 2025</p>
                                    <ul className="list-disc pl-5 space-y-2 text-sm text-slate-600">
                                        <li>
                                        Deployed a real-time collaboration service using <span className="text-electric-blue font-semibold">WebSockets</span> for an internal campaign management application.
                                        </li>
                                        <li>
                                        Enhanced an existing commenting system by implementing user tagging functionality, enabling user search and email notifications.
                                        </li>
                                    </ul>
                                </div>

                                {/* Summer 2024 */}
                                <div>
                                    <p className="text-sm font-bold text-slate-700 mb-2">Summer 2024</p>
                                    <ul className="list-disc pl-5 space-y-2 text-sm text-slate-600">
                                        <li>
                                        Built a documentation platform to showcase examples of <span className="text-electric-blue font-semibold">25</span> components in an internal React component library.
                                        </li>
                                        <li>
                                        Implemented <span className="text-electric-blue font-semibold">Playwright</span> tests into GitHub CI/CD pipeline, eliminating over <span className="text-electric-blue font-semibold">40</span> accessibility errors.
                                        </li>
                                    </ul>
                                </div>

                                {/* Summer 2023 */}
                                <div>
                                    <p className="text-sm font-bold text-slate-700 mb-2">Summer 2023</p>
                                    <ul className="list-disc pl-5 space-y-2 text-sm text-slate-600">
                                        <li>
                                        Developed a Python-based automation using <span className="text-electric-blue font-semibold">Selenium</span> to extract, transform, and organize invoice data.
                                        </li>
                                        <li>
                                        Managed and developed new and existing projects in the Microsoft Power Platform.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                 <div className="w-full mt-4 flex flex-row gap-2 flex-wrap pl-2">
                    <Tag value="React" />
                    <Tag value="WebSockets" />
                    <Tag value="Playwright" />
                    <Tag value="CI/CD" />
                    <Tag value="Accessibility" />
                    <Tag value="Python" />
                    <Tag value="Selenium" />
                    <Tag value="Power Platform" />
                </div>
            </div>
        </Card.Root>
    );
};

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
        className="max-w-7xl w-full z-10"
      >
        {/* Main Flexbox Container - 2 columns: (Education + Achievements) and Experience */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          
          {/* Left Column: Education + Achievements & Skills */}
          <div className="flex-1 min-w-[300px] space-y-12">
            {/* Education Block */}
            <div>
              <h1 className="text-3xl md:text-4xl font-terminal text-slate-800 text-center mb-8">
                Education_
              </h1>
              <Card.Root logoClass="USF">
                  <Card.Heading>University of South Florida</Card.Heading>
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
                              Natural Language Processing, Deep Reinforcement Learning, HW Accelerators for ML, 
                              AI and Analytics, Analysis of Algorithms, Differential Equations, Graph Theory.
                          </p>
                      </div>
                  </div>
              </Card.Root>
            </div>

            {/* Achievements & Skills Block */}
            <div>
              <h1 className="text-3xl md:text-4xl font-terminal text-slate-800 text-center mb-8">
                Achievements & Skills_
              </h1>

              {/* Achievements */}
              <div className="flex flex-row gap-4 mb-8 justify-center">
              {/* Achievement Card 1 - Microsoft */}
              <motion.div 
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ duration: 0.2 }}
                  className="glass-panel rounded-xl p-4 bg-white/80 backdrop-filter backdrop-blur-md border border-slate-200 shadow-sm hover:shadow-lg hover:border-electric-blue/30 transition-all duration-300 flex-1"
              >
                  <div className="flex flex-col items-center gap-3 text-center">
                  <div className="w-12 h-12 flex items-center justify-center">
                      <img 
                          src="/img/PowerPlatform.png" 
                          alt="Microsoft Power Platform" 
                          className="h-full w-auto object-contain"
                      />
                  </div>
                  <h3 className="text-xs font-bold font-terminal text-slate-800">
                      Microsoft Certified: Power Platform App Maker
                  </h3>
                  </div>
              </motion.div>

              {/* Achievement Card 2 - National Merit */}
              <motion.div 
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ duration: 0.2 }}
                  className="glass-panel rounded-xl p-4 bg-white/80 backdrop-filter backdrop-blur-md border border-slate-200 shadow-sm hover:shadow-lg hover:border-electric-blue/30 transition-all duration-300 flex-1"
              >
                  <div className="flex flex-col items-center gap-3 text-center">
                  <div className="w-12 h-12 flex items-center justify-center">
                      <img 
                          src="/img/National Merit Logo.png" 
                          alt="National Merit Scholar" 
                          className="h-full w-auto object-contain"
                      />
                  </div>
                  <h3 className="text-xs font-bold font-terminal text-slate-800">
                      National Merit Scholar Finalist
                  </h3>
                  </div>
              </motion.div>

              {/* Achievement Card 3 - Eagle Scout */}
              <motion.div 
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ duration: 0.2 }}
                  className="glass-panel rounded-xl p-4 bg-white/80 backdrop-filter backdrop-blur-md border border-slate-200 shadow-sm hover:shadow-lg hover:border-electric-blue/30 transition-all duration-300 flex-1"
              >
                  <div className="flex flex-col items-center gap-3 text-center">
                  <div className="w-12 h-12 flex items-center justify-center">
                      <img 
                          src="/img/BSA.png" 
                          alt="Eagle Scout" 
                          className="h-full w-auto object-contain"
                      />
                  </div>
                  <h3 className="text-xs font-bold font-terminal text-slate-800">
                      Eagle Scout
                  </h3>
                  </div>
              </motion.div>
              </div>

              {/* Skills */}
              <div className="space-y-6">
                   <div className="glass-panel p-4 rounded-xl bg-white/60">
                      <h3 className="text-base font-bold font-terminal text-slate-800 mb-3">Languages</h3>
                      <div className="flex flex-wrap gap-2">
                          {["Python", "TypeScript", "C++", "C", "C#", "Swift", "Verilog", "RISC-V Assembly"].map(skill => (
                              <Tag key={skill} value={skill} />
                          ))}
                      </div>
                   </div>
                   <div className="glass-panel p-4 rounded-xl bg-white/60">
                      <h3 className="text-base font-bold font-terminal text-slate-800 mb-3">Tools & Frameworks</h3>
                      <div className="flex flex-wrap gap-2">
                          {["PyTorch", "AWS", "React", "Tailwind", "FastAPI", "WebSockets", "Numpy", "Git", "Postman", "Jira", "Power Apps"].map(skill => (
                               <Tag key={skill} value={skill} />
                          ))}
                      </div>
                   </div>
              </div>
            </div>
          </div>

          {/* Right Column: Work Experience */}
          <div className="flex-1 min-w-[300px]">
            <h1 className="text-3xl md:text-4xl font-terminal text-slate-800 text-center mb-8">
              Experience_
            </h1>

            <div className="space-y-8">
                {/* P&G Consolidated Expandable */}
                <ExpandablePGCard />

                {/* Intertape Polymer Group */}
                <Card.Root logoClass="IPG">
                <Card.Heading>Power Platform Developer</Card.Heading>
                <div className="flex w-full flex-row flex-wrap text-slate-600">
                    <div className="flex-1 pl-2 min-w-[250px] pb-4">
                    <p className="font-bold text-slate-800">Intertape Polymer Group</p>
                    <p className="text-sm">Part-Time</p>
                    <p className="text-electric-blue mt-2 font-mono text-sm">
                        Nov 2023 - <span className="text-pink-500 ">Present</span>
                    </p>
                    </div>
                    <div className="flex-1 pl-2 min-w-[250px] pb-4">
                    <ul className="list-disc pl-5 space-y-2 text-sm">
                        <li>
                        Refactored and added new functionality to a warehouse order application, built with React and fastapi.
                        </li>
                        <li>
                        Designed, developed, and maintained <span className="text-electric-blue font-semibold">7+</span> production Power Apps and Power Automate workflows.
                        </li>
                    </ul>
                    </div>
                    <div className="w-full mt-4 flex flex-row gap-2 flex-wrap">
                    <Tag value="Power Apps" />
                    <Tag value="Power Automate" />
                    <Tag value="React" />
                    <Tag value="SQL" />
                    <Tag value="Dataverse" />
                    </div>
                </div>
                </Card.Root>
            </div>
          </div>

        </div>
      </motion.div>
    </div>
    
  );
});
Resume.displayName = "Resume";
export default Resume;
