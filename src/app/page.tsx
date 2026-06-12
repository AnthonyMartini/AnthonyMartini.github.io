"use client";
import Header from "./header";
import MenuBar from "./menubar";
import Resume from "./resume";
import AboutMe from "./aboutMe";
import Commencement from "./commencement";
import Footer from "./footer";
import { useEffect, useRef, useState } from "react";
import Projects from "./projects";

export default function Home() {
  const [rerender, setRerender] = useState(false);
  const headerRef = useRef<null | HTMLElement>(null);
  const commencementRef = useRef<null | HTMLElement>(null);
  const aboutMeRef = useRef<null | HTMLElement>(null);
  const projectsRef = useRef<null | HTMLElement>(null);

  useEffect(() => {
    setRerender((r) => !r);
  }, []);
  return (
    <div className="static w-full">
      <MenuBar
        refs={[
          { name: "Home", id: "home", ref: headerRef },
          { name: "Speech", id: "speech", ref: commencementRef },
          { name: "Resume", id: "resume", ref: aboutMeRef },
          { name: "Projects", id: "projects", ref: projectsRef },
        ]}
      />
      <main>
        <Header ref={headerRef} />
        <Commencement ref={commencementRef} />

        <AboutMe ref={aboutMeRef} />
        <Resume />
        <Projects ref={projectsRef} />
      </main>

      <Footer />
    </div>
  );
}
