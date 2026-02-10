"use client";
import Header from "./header";
import MenuBar from "./menubar";
import Resume from "./resume";
import AboutMe from "./aboutMe";
import Footer from "./footer";
import { useEffect, useRef, useState } from "react";
import Projects from "./projects";
import Achievements from "./achievements";

export default function Home() {
  const [rerender, setRerender] = useState(false);
  const aboutMeRef = useRef<null | HTMLDivElement>(null);
  const resumeRef = useRef<null | HTMLDivElement>(null);
  const projectsRef = useRef<null | HTMLDivElement>(null);
  const achievementsRef = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    setRerender(!rerender);
  }, [aboutMeRef, resumeRef, projectsRef, achievementsRef]);
  console.log(aboutMeRef.current);
  return (
    <div className="static w-full">
      <MenuBar
        refs={[
          { name: "About Me", ref: aboutMeRef },
          { name: "Resume", ref: resumeRef },
          { name: "Projects", ref: projectsRef },
          { name: "Achievements", ref: achievementsRef },
        ]}
      />
      <Header />

      <AboutMe ref={aboutMeRef} />

      <Resume ref={resumeRef} />
      <Projects ref={projectsRef} />

      <Achievements ref={achievementsRef} />
      <Footer />
    </div>
  );
}
