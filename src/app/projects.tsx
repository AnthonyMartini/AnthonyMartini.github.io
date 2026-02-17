"use client";
import { ForwardedRef, forwardRef, useState, useEffect } from "react";
import { Card, Tag } from "./card";
import { motion, AnimatePresence } from "framer-motion";
const ChevronLeft = ({ size = 24, className = "" }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
    className={className}
  >
    <path d="m15 18-6-6 6-6"/>
  </svg>
);

const ChevronRight = ({ size = 24, className = "" }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
    className={className}
  >
    <path d="m9 18 6-6-6-6"/>
  </svg>
);

const projectsData = [
  {
    title: "Pneumonia Detection CNN",
    imageClass: "xrays",
    description: "Architected CNN models to detect pneumonia in pediatric chest X-rays, achieving ~91% accuracy. Optimized for both GPU and CPU environments.",
    tags: ["Python", "CNN", "Deep Learning"],
    links: []
  },
    {
    title: "NLP Optimization: Vocabulary Reduction",
    imageClass: "nlpOptimization",
    description: "Research paper on LLM vocabulary optimization. Reduced vocab by 13% using NLTK WordNet while improving accuracy to 87.57%.",
    tags: ["Python", "PyTorch", "NLTK", "LLM"],
    links: [{ url: "https://github.com/AnthonyMartini/TokenSynonymFilter", title: "NLP Optimization External Link" }]
  },
  {
    title: "RoBERTa Sexism Detection",
    imageClass: "roberta",
    description: "Conducted performance analysis by fine-tuning a RoBERTa model for binary text classification, achieving 87% accuracy on online comment data.",
    tags: ["RoBERTa", "NLP", "Transformers"],
    links: []
  },
  {
    title: "Next Step Tracker",
    imageClass: "nextStep",
    description: "Personal Health Dashboard to log and visualize health metrics. Built using only React and AWS Free Tier tools (Lambda, API Gateway, Amplify).",
    tags: ["React", "AWS", "Serverless"],
    links: [{ url: "https://github.com/AnthonyMartini/health-dash-fe", title: "Next Step Tracker External Link" }]
  },
  {
    title: "FPGA Audio Controller",
    imageClass: "fpga",
    description: "Engineered an FPGA-based audio controller to record/replay voice messages. Integrated softcore processor in Vivado with PicoBlaze assembly.",
    tags: ["Verilog", "Vivado", "Assembly"],
    links: []
  },
  {
    title: "RFID Garage Door Opener",
    imageClass: "garageOpener",
    description: "Arduino-based opener with multi-user RFID authentication. Designed custom PCB and 3D-printed enclosure.",
    tags: ["C++", "Arduino", "PCB"],
    links: [{ url: "https://github.com/AnthonyMartini/RFIDGarageOpener", title: "Garage Opener External Link" }]
  }
];

const Projects = forwardRef((props, ref: ForwardedRef<HTMLDivElement>) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsVisible, setItemsVisible] = useState(1);
  
  // Update items visible based on screen width using matchMedia
  useEffect(() => {
    const mediaQueryMd = window.matchMedia("(min-width: 768px)");

    const handleBreakpointChange = () => {
        if (mediaQueryMd.matches) {
          setItemsVisible(3); // Desktop/Tablet: 3 projects
        } else {
          setItemsVisible(1); // Mobile: 1 project
        }
    };
    
    // Set initial
    handleBreakpointChange();

    // Add listeners for breakpoint changes
    mediaQueryMd.addEventListener("change", handleBreakpointChange);

    return () => {
      mediaQueryMd.removeEventListener("change", handleBreakpointChange);
    };
  }, []);

  const totalItems = projectsData.length;
  // Calculate maximum index we can scroll to.
  // Example: 5 items, 3 visible. Max index = 2. (Shows 2,3,4)
  // Example: 5 items, 1 visible. Max index = 4. (Shows 4)
  const maxIndex = Math.max(0, totalItems - itemsVisible);

  // Clamp currentIndex when screen size changes
  useEffect(() => {
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex);
    }
  }, [maxIndex, currentIndex]);

  const nextProject = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const prevProject = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  // Progress Bar Width and Position
  // We treat the progress track as "pages". Total pages = maxIndex + 1.
  // Indicator width = 100% / pages.
  // Indicator position = (currentIndex / pages) * 100%.
  const totalPages = maxIndex + 1;
  const indicatorWidth = 100 / totalPages;
  const indicatorLeft = (currentIndex / totalPages) * 100;

  return (
    <div
      className="relative p-4 md:p-8 flex flex-col items-center pt-20 pb-20 w-full min-h-screen bg-slate-50 overflow-hidden"
      ref={ref}
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none" />
      
      <div className="w-full max-w-[90vw] z-10 flex flex-col">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-terminal text-slate-800 text-center mb-12"
        >
          Featured Projects_
        </motion.h1>

        {/* Progress Bar */}
        <div className="w-full max-w-3xl mx-auto mb-4 h-2 bg-slate-200 rounded-full overflow-hidden relative">
          <motion.div 
            className="h-full bg-electric-blue absolute top-0 left-0"
            initial={{ left: 0 }}
            animate={{ 
                left: `${indicatorLeft}%`,
                width: `${indicatorWidth}%` 
            }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          />
        </div>

        <div className="relative w-full flex items-center justify-center">
            {/* Left Navigate Button */}
            <AnimatePresence>
            {currentIndex > 0 && (
                <motion.button 
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    onClick={prevProject}
                    className="absolute left-0 z-20 p-2 rounded-full bg-white/80 hover:bg-white shadow-lg text-slate-800 hover:text-electric-blue transition-all -ml-2 md:-ml-4"
                    aria-label="Previous Project"
                >
                    <ChevronLeft size={32} />
                </motion.button>
            )}
            </AnimatePresence>

            {/* Carousel Container */}
            <div className="w-full overflow-hidden py-8 px-1">
                <motion.div 
                    className="flex"
                    style={{ width: `${(totalItems / itemsVisible) * 100}%` }}
                    animate={{ x: `${-currentIndex * (100 / totalItems)}%` }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                    {projectsData.map((project, index) => (
                        <div 
                            key={index} 
                            className="px-4 flex-shrink-0"
                            style={{ width: `${100 / totalItems}%` }}
                        >
                             <Card.Root className="h-full overflow-visible">
                                <div className="flex flex-col h-full">
                                    <Card.Heading className="text-center">
                                    {project.title}
                                    </Card.Heading>
                                    {project.links.length > 0 ? (
                                        <a
                                        title={project.links[0].title}
                                        className={`projectImage ${project.imageClass} w-full h-48 md:h-56 mb-4 rounded-lg block overflow-hidden shadow-md hover:shadow-lg transition-shadow`}
                                        href={project.links[0].url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        />
                                    ) : (
                                        <div className={`projectImage ${project.imageClass} w-full h-48 md:h-56 mb-4 rounded-lg block overflow-hidden shadow-md`} />
                                    )}
                                    <p className="text-slate-600 text-sm mb-4">
                                        {project.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2 mt-auto">
                                        {project.tags.map(tag => (
                                            <Tag key={tag} value={tag} />
                                        ))}
                                    </div>
                                </div>
                            </Card.Root>
                        </div>
                    ))}
                </motion.div>
            </div>

             {/* Right Navigate Button */}
             <AnimatePresence>
             {currentIndex < maxIndex && (
                 <motion.button 
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    onClick={nextProject}
                    className="absolute right-0 z-20 p-2 rounded-full bg-white/80 hover:bg-white shadow-lg text-slate-800 hover:text-electric-blue transition-all -mr-2 md:-mr-4"
                    aria-label="Next Project"
                >
                    <ChevronRight size={32} />
                </motion.button>
             )}
             </AnimatePresence>
        </div>


        <div className="flex justify-center mt-16">
          <a
            href="https://github.com/AnthonyMartini"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center px-8 py-3 overflow-hidden font-mono font-medium tracking-tighter text-white bg-slate-900 rounded-lg group hover:bg-electric-blue transition-colors duration-300 shadow-lg"
          >
            <span className="relative">Check out my GitHub for more -&gt;</span>
          </a>
        </div>
      </div>
    </div>
  );
});
Projects.displayName = "Projects";
export default Projects;
