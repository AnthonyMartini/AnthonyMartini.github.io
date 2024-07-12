"use client";
import { ForwardedRef, forwardRef } from "react";
import { Card, Tag } from "./card";

const Projects = forwardRef((props, ref: ForwardedRef<HTMLDivElement>) => {
  return (
    <div
      className="lightContent p-4 font-serif flex flex-col items-center pt-[40px] w-full"
      ref={ref}
    >
      <h1 className="text-blue-950 text-[28px] font-bold ">
        Featured Projects
      </h1>
      <div className="bg-blue-950 h-[3px] w-[85%] rounded-lg mt-1"></div>
      width:500px; height: 350px;
      <div className="w-full flex flex-row flex-wrap justify-center gap-4">
        <Card.Root className="w-full md:w-[550px]">
          <Card.Heading className="text-center">
            RFID Garage Door Opener
          </Card.Heading>
          <div className="flex w-full flex-row flex-wrap justify-center">
            <a
              title="Garage Opener External Link"
              className="garageOpener projectImage w-[100%] h-[250px]  sm:w-[500px] sm:h-[350px]"
              href="https://github.com/AnthonyMartini/RFIDGarageOpener"
              target="_blank"
              rel="noopener noreferrer"
            />
            <p className="pt-2">
              Built using Arduino hardware, a custom PCB, and a 3D-printed
              enclosure. Written in C++ and utilizes linked lists to dynamically
              store cards.
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
          <Card.Heading className="text-center">Line Jumpr</Card.Heading>
          <div className="flex w-full flex-row flex-wrap justify-center">
            <a
              title="Line Jumpr External Link"
              className="lineJumpr projectImage w-[100%] h-[250px]  md:w-[500px] sm:h-[350px]"
              href="https://github.com/AnthonyMartini/LineJumpr"
              target="_blank"
              rel="noopener noreferrer"
            />
            <p className="pt-2">
              Created IOS game using Apple&apos;s language, Swift, and IDE,
              Xcode. Recieved over 300 downloads in lifetime.
            </p>
            <div className="w-full mt-2 flex flex-row gap-2 flex-wrap">
              <Tag value="Swift" />
              <Tag value="OOP" />
            </div>
          </div>
        </Card.Root>
        <Card.Root className="w-full md:w-[550px]">
          <Card.Heading className="text-center">Workout Monkey</Card.Heading>
          <div className="flex w-full flex-row flex-wrap justify-center">
            <a
              title="Workout Monkey External Link"
              className="workoutMonkey projectImage w-[100%] h-[250px]  sm:w-[500px] sm:h-[350px]"
              href="https://anthonymartini.github.io/WorkoutMonkey/"
              target="_blank"
              rel="noopener noreferrer"
            />
            <p className="pt-2">
              In-Progress developing fitness tracker app to help users track
              muscle groups hit by their workout and train optimally.
            </p>
            <div className="w-full mt-2 flex flex-row gap-2 flex-wrap">
              <Tag value="React" />
              <Tag value="Tailwind" />
              <Tag value="Next.JS" />
              <Tag value="MongoDB" />
              <Tag value="Express" />
            </div>
          </div>
        </Card.Root>
      </div>
    </div>
  );
});
Projects.displayName = "Projects";
export default Projects;
