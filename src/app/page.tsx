"use client";
import Header from "./header";
import MenuBar from "./menubar";
import { Card, Tag } from "./card";
import Resume from "./resume";
import Achievments from "./achievements";
import AboutMe from "./aboutMe";
import Footer from "./footer";
import { useEffect, useRef, useState } from "react";
import Projects from "./projects";

export default function Home() {
  const [rerender, setRerender] = useState(false);
  const aboutMeRef = useRef<null | HTMLDivElement>(null);
  const resumeRef = useRef<null | HTMLDivElement>(null);
  const projectsRef = useRef<null | HTMLDivElement>(null);
  const achievmentsRef = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    setRerender(!rerender);
  }, [aboutMeRef, resumeRef, projectsRef, achievmentsRef]);
  console.log(aboutMeRef.current);
  return (
    <div className="static w-full">
      <Header />

      <MenuBar
        items={[
          { name: "About Me", object: aboutMeRef.current! },
          { name: "Resume", object: resumeRef.current! },
          { name: "Projects", object: projectsRef.current! },
          { name: "Achievements", object: achievmentsRef.current! },
        ]}
      />

      <AboutMe ref={aboutMeRef} />

      <Resume ref={resumeRef} />
      <Projects ref={projectsRef} />

      <Achievments ref={achievmentsRef} />
      <Footer />
    </div>
  );
}
