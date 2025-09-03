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
        items={[
          { name: "About Me", object: aboutMeRef.current! },
          { name: "Résumé", object: resumeRef.current! },
          { name: "Projects", object: projectsRef.current! },
          { name: "Achievements", object: achievementsRef.current! },
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
