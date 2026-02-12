"use client";
import Header from "./header";
import MenuBar from "./menubar";
import Resume from "./resume";
import AboutMe from "./aboutMe";
import Footer from "./footer";
import { useEffect, useRef, useState } from "react";
import Projects from "./projects";

export default function Home() {
  const [rerender, setRerender] = useState(false);
  const headerRef = useRef<null | HTMLDivElement>(null);
  const aboutMeRef = useRef<null | HTMLDivElement>(null);
  const projectsRef = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    setRerender((r) => !r);
  }, []);
  console.log(aboutMeRef.current);
  return (
    <div className="static w-full">
      <MenuBar
        refs={[
          { name: "Home", ref: headerRef },
          { name: "Resume", ref: aboutMeRef },
          { name: "Projects", ref: projectsRef },
        ]}
      />
      <Header ref={headerRef} />

      <AboutMe ref={aboutMeRef} />
      <Resume />
      <Projects ref={projectsRef} />

      <Footer />
    </div>
  );
}
