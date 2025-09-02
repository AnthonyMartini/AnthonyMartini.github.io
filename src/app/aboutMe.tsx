"use client";
import React from "react";
import { forwardRef, LegacyRef } from "react";

const AboutMe = forwardRef((props, ref: LegacyRef<HTMLDivElement>) => {
  function BB({ children }: { children: React.ReactNode }) {
    return <p className="font-bold inline text-pink-700">{children}</p>;
  }
  return (
    <div
      id="about-me-section"
      className="bg-gradient-to-b from-gray-300 to-white p-4 font-serif flex flex-col items-center pt-[40px]"
      ref={ref}
    >
      <h1 className="text-black text-[45px] font-TerminalGrotesque">
        About Me
      </h1>
      <div className="bg-black h-[3px] w-[85%] rounded-lg"></div>
      <div className="flex flex-row pt-10 w-[85%] flex-wrap">
        <div className="flex-1 flex justify-center">
          <div className="relative bg-black h-[220px] w-[288px] md:w-[420px] md:h-[320px] pfp rounded-[100px] rounded-tl-[30px] rounded-br-[30px] md:rounded-[160px] md:rounded-tl-[50px] md:rounded-br-[50px] shadow-xl">
            <span className="absolute -left-6 top-10 rotate-[-6deg] bg-white/80 text-black rounded px-2 py-1 shadow italic text-sm">
              This is me in Rishikesh, India!
            </span>
          </div>
        </div>
        <div className="flex-1 flex flex-col space-y-4 text-[16px] justify-center p-4 text-black bg-[#0000001a] rounded-lg my-12 shadow-xl">
          <span>
            Experienced in full stack development using tools such as{" "}
            <BB>React</BB>, <BB>Tailwind</BB>, <BB>AWS</BB>, <BB>FastAPI</BB>,
            and <BB>Next.js</BB>.
          </span>
          <span>
            Strong understanding of computer science concepts like{" "}
            <BB>data structures</BB>, <BB>algorithims</BB>, and{" "}
            <BB>graph theory</BB>.
          </span>
          <span>
            Extensive studies in <BB>computer archicteture</BB> and{" "}
            <BB>circuit design</BB>.
          </span>
          <span>
            Explored personal projects covering <BB>3D design</BB> and{" "}
            <BB>PCB Sketching</BB>.
          </span>
        </div>
      </div>

      <div className=""></div>
    </div>
  );
});
AboutMe.displayName = "About Me";
export default AboutMe;

/*
  className="bg-black p-4 font-serif flex flex-col items-center pt-[40px]"
      ref={ref}
    >
      <h1 className="text-blue-300 font-bold text-[28px]">Résumé</h1>
      <h1 className="text-blue-300 font-bold text-[22px] w-[85%]">Education</h1>
      <div className="bg-blue-300 h-[3px] w-[85%] rounded-lg mt-1"></div>


*/
