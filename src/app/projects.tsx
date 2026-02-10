"use client";
import { ForwardedRef, forwardRef } from "react";
import { Card, Tag } from "./card";
import { motion } from "framer-motion";

const Projects = forwardRef((props, ref: ForwardedRef<HTMLDivElement>) => {
  return (
    <div
      className="relative p-4 md:p-8 flex flex-col items-center pt-20 pb-20 w-full min-h-screen bg-slate-50"
      ref={ref}
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none" />
      
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-6xl z-10"
      >
        <h1 className="text-4xl md:text-6xl font-terminal text-slate-800 text-center mb-12">
          Featured Projects_
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          
          {/* Pneumonia Detection */}
          <Card.Root className="h-full flex flex-col">
            <Card.Heading className="text-center">
              Pneumonia Detection CNN
            </Card.Heading>
             <div className="flex flex-col h-full">
              <div className="projectImage xrays w-full h-48 md:h-56 mb-4 rounded-lg block overflow-hidden shadow-md" />
              <p className="text-slate-600 text-sm mb-4 flex-grow">
                Architected CNN models to detect pneumonia in pediatric chest X-rays, achieving ~91% accuracy. Optimized for both GPU and CPU environments.
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                <Tag value="Python" />
                <Tag value="CNN" />
                <Tag value="Deep Learning" />
              </div>
            </div>
          </Card.Root>

          {/* RoBERTa Sexism Detection */}
          <Card.Root className="h-full flex flex-col">
            <Card.Heading className="text-center">
              RoBERTa Sexism Detection
            </Card.Heading>
             <div className="flex flex-col h-full">
              <div className="projectImage roberta w-full h-48 md:h-56 mb-4 rounded-lg block overflow-hidden shadow-md" />
              <p className="text-slate-600 text-sm mb-4 flex-grow">
                Conducted performance analysis by fine-tuning a RoBERTa model for binary text classification, achieving 87% accuracy on online comment data.
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                <Tag value="RoBERTa" />
                <Tag value="NLP" />
                <Tag value="Transformers" />
              </div>
            </div>
          </Card.Root>

          {/* Next Step Tracker */}
          <Card.Root className="h-full flex flex-col">
            <Card.Heading className="text-center">Next Step Tracker</Card.Heading>
             <div className="flex flex-col h-full">
              <a
                title="Next Step Tracker External Link"
                className="nextStep projectImage w-full h-48 md:h-56 mb-4 rounded-lg block overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                href="https://github.com/AnthonyMartini/health-dash-fe"
                target="_blank"
                rel="noopener noreferrer"
              />
              <p className="text-slate-600 text-sm mb-4 flex-grow">
                Personal Health Dashboard to log and visualize health metrics. Built using only React and AWS Free Tier tools (Lambda, API Gateway, Amplify).
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                <Tag value="React" />
                <Tag value="AWS" />
                <Tag value="Serverless" />
              </div>
            </div>
          </Card.Root>

          {/* FPGA Audio Controller */}
          <Card.Root className="h-full flex flex-col">
            <Card.Heading className="text-center">FPGA Audio Controller</Card.Heading>
             <div className="flex flex-col h-full">
              <div className="projectImage fpga w-full h-48 md:h-56 mb-4 rounded-lg block overflow-hidden shadow-md" />
              <p className="text-slate-600 text-sm mb-4 flex-grow">
                Engineered an FPGA-based audio controller to record/replay voice messages. Integrated softcore processor in Vivado with PicoBlaze assembly.
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                <Tag value="Verilog" />
                <Tag value="Vivado" />
                <Tag value="Assembly" />
              </div>
            </div>
          </Card.Root>

          {/* RFID Garage Door Opener */}
          <Card.Root className="h-full flex flex-col">
            <Card.Heading className="text-center">
              RFID Garage Door Opener
            </Card.Heading>
            <div className="flex flex-col h-full">
              <a
                title="Garage Opener External Link"
                className="garageOpener projectImage w-full h-48 md:h-56 mb-4 rounded-lg block overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                href="https://github.com/AnthonyMartini/RFIDGarageOpener"
                target="_blank"
                rel="noopener noreferrer"
              />
              <p className="text-slate-600 text-sm mb-4 flex-grow">
                Arduino-based opener with multi-user RFID authentication. Designed custom PCB and 3D-printed enclosure.
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                <Tag value="C++" />
                <Tag value="Arduino" />
                <Tag value="PCB" />
              </div>
            </div>
          </Card.Root>

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
      </motion.div>
    </div>
  );
});
Projects.displayName = "Projects";
export default Projects;
