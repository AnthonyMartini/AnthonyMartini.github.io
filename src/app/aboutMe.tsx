"use client";
import React from "react";
import { forwardRef, LegacyRef, useEffect, useState } from "react";

const AboutMe = forwardRef((props, ref: LegacyRef<HTMLDivElement>) => {
  const [width, setWidth] = useState(200);
  const [latch, setLatch] = useState(false);
  const [responsive, setResponsive] = useState(true);

  const setWindowDimensions = () => {
    setResponsive(window.screen.width >= 1000);
  };
  useEffect(() => {
    window.addEventListener("resize", setWindowDimensions);
    return () => {
      window.removeEventListener("resize", setWindowDimensions);
    };
  }, []);

  useEffect(() => {
    setResponsive(window.screen.width >= 1000);
    const onScroll = () => {
      if (window.scrollY <= 300) {
        console.log(latch ? "true" : "false");
        setWidth(window.scrollY / 1.3636 + 200);
      } else {
        setLatch(true);
        setWidth(420);
      }
    };
    // clean up code
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function BB({ children }: { children: React.ReactNode }) {
    return <p className="font-bold inline text-pink-700">{children}</p>;
  }
  return (
    <div
      className="bg-blue-200 p-4 font-serif flex flex-col items-center pt-[20px]"
      ref={ref}
    >
      <h1 className="text-blue-950 text-[45px] font-TerminalGrotesque">
        About Me
      </h1>
      <div className="bg-blue-950 h-[3px] w-[85%] rounded-lg"></div>
      <div className="flex flex-row pt-10 w-[85%] flex-wrap">
        <div className="flex-1 flex justify-center">
          <div
            style={{
              width: `${
                responsive ? `${latch ? 420 : width}px` : "calc(85vw - 32px)"
              }`,
            }}
            className={`bg-black h-[320px] pfp rounded-[160px] rounded-tl-[50px] rounded-br-[50px] transition-all`}
          ></div>
        </div>
        <div className="flex-1 flex flex-col space-y-4 text-[16px] justify-center p-4 text-blue-950">
          <span>
            Experienced in full stack development using tools such as{" "}
            <BB>React</BB>, <BB>Tailwind</BB>, <BB>AWS</BB>, <BB>FastAPI</BB>,
            and <BB>Next.JS</BB>.
          </span>
          <span>
            Strong understanding of computer science concepts like{" "}
            <BB>data structures</BB>, <BB>algorithims</BB>, and{" "}
            <BB>graph theory</BB>.
          </span>
          <span>
            Extensive studies in <BB>computer archicteture</BB> and{" "}
            <BB>circuit design.</BB>
          </span>
          <span>
            Explored personal projects covering <BB>3D design</BB> and{" "}
            <BB>PCB Sketching</BB>
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
  className="bg-blue-950 p-4 font-serif flex flex-col items-center pt-[40px]"
      ref={ref}
    >
      <h1 className="text-blue-300 font-bold text-[28px]">Résumé</h1>
      <h1 className="text-blue-300 font-bold text-[22px] w-[85%]">Education</h1>
      <div className="bg-blue-300 h-[3px] w-[85%] rounded-lg mt-1"></div>


*/
