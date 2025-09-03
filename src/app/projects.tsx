"use client";
import { ForwardedRef, forwardRef } from "react";
import { Card, Tag } from "./card";

const Projects = forwardRef((props, ref: ForwardedRef<HTMLDivElement>) => {
  return (
    <div
      className="bg-gradient-to-b from-gray-300 to-white p-4 font-serif flex flex-col items-center pt-[40px] w-full"
      ref={ref}
    >
      <h1 className="text-black text-[45px] font-TerminalGrotesque text-center">
        Featured Projects
      </h1>
      <div className="bg-black h-[3px] w-[85%] rounded-lg mt-1"></div>
      <div className="w-full flex flex-row flex-wrap justify-center gap-4 text-black">
        <Card.Root className="w-full md:w-[550px]">
          <Card.Heading className="text-center">
            RFID Garage Door Opener
          </Card.Heading>
          <div className="flex w-full flex-row flex-wrap justify-center ">
            <a
              title="Garage Opener External Link"
              className="garageOpener projectImage w-[100%] h-[250px]  sm:w-[500px] sm:h-[350px]"
              href="https://github.com/AnthonyMartini/RFIDGarageOpener"
              target="_blank"
              rel="noopener noreferrer"
            />
            <p className="pt-2">
              Built an Arduino-based garage door opener configurable with
              multiple RFID cards, programmed in C code. Sketched a custom PCB,
              soldered components, and 3D-printed an enclosure to house the
              system.
            </p>
            <div className="w-full mt-2 flex flex-row gap-2 flex-wrap ">
              <Tag value="Arduino" />
              <Tag value="C++" />
              <Tag value="RFID" />
              <Tag value="PCB" />
              <Tag value="3D-Design" />
            </div>
          </div>
        </Card.Root>

        <Card.Root className="w-full md:w-[550px]">
          <Card.Heading className="text-center">
            CNN Pneumonia Detection
          </Card.Heading>
          <div className="flex w-full flex-row flex-wrap justify-center">
            <div
              title="CNN Pneumonia Detection External Link"
              className="xrays projectImage w-[100%] h-[250px]  md:w-[500px] sm:h-[350px]"
            />
            <p className="pt-2">
              Architected CNN models with convolutional, pooling, and fully
              connected layers for binary classification of pediatric chest
              X-rays, achieving ~91% accuracy and efficient deployment on both
              GPU and CPU for clinical and low-resource settings.
            </p>
            <div className="w-full mt-2 flex flex-row gap-2 flex-wrap">
              <Tag value="Python" />
              <Tag value="Machine Learning" />
            </div>
          </div>
        </Card.Root>
        <Card.Root className="w-full md:w-[550px]">
          <Card.Heading className="text-center">Next Step Tracker</Card.Heading>
          <div className="flex w-full flex-row flex-wrap justify-center">
            <a
              title="Next Step Tracker External Link"
              className="nextStep projectImage w-[100%] h-[250px] sm:w-[500px] sm:h-[350px]"
              href="https://github.com/AnthonyMartini/health-dash-fe"
              target="_blank"
              rel="noopener noreferrer"
            />
            <p className="pt-2">
              Created a Personal Health Dashboard that allows users to log and
              visualize health metrics such as exercise, sleep, and diet,
              promoting healthier habits and personalized wellness tracking.
              Leveraged just React and AWS Free Tier tools, delivering a
              cost-effective and scalable solution within a single semester.
            </p>
            <div className="w-full mt-2 flex flex-row gap-2 flex-wrap">
              <Tag value="React" />
              <Tag value="Tailwind" />
              <Tag value="Next.JS" />
              <Tag value="AWS" />
            </div>
          </div>
        </Card.Root>
      </div>
      <a
        href="https://github.com/AnthonyMartini"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 relative -rotate-3 bg-yellow-600 rounded px-3 py-1 shadow italic text-sm inline-block hover:bg-yellow-500 transition"
      >
        Check out my github for all my projects!
      </a>
    </div>
  );
});
Projects.displayName = "Projects";
export default Projects;
