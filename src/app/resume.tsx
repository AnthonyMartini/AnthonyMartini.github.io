"use client";
import { forwardRef, LegacyRef } from "react";
import { Card, Tag } from "./card";

const Resume = forwardRef((props, ref: LegacyRef<HTMLDivElement>) => {
  function BB({ children }: { children: React.ReactNode }) {
    return <p className="font-bold inline text-pink-700">{children}</p>;
  }
  return (
    <div
      className="darkContent p-4 font-serif flex flex-col items-center pt-[20px] text-black"
      ref={ref}
    >
      <h1 className="text-blue-300  text-[45px] font-TerminalGrotesque">
        Résumé
      </h1>
      <h1 className="text-blue-300 font-bold text-[22px] w-[85%]">Education</h1>
      <div className="bg-blue-300 h-[3px] w-[85%] rounded-lg mt-1"></div>
      <Card.Root className="w-[85%]">
        <Card.Heading logoClass="USF">University of South Florida</Card.Heading>
        <div className="flex w-full flex-row flex-wrap">
          <div className=" flex-1 pl-2 min-w-[250px] pb-2">
            <p>Computer Engineering, BSCE</p>
            <p>
              Minor in Mathematics, Honors College, Dean&apos;s List Recipient
            </p>
            <p>
              <i>Aug 2022 - May 2026</i>
            </p>
          </div>
          <div className=" flex-1 pl-2 min-w-[250px] pb-2 ">
            <h2 className="font-semibold">Notable Courses:</h2>

            <ul className="list-disc pl-6 columns-2">
              <li>Natural Language Processing</li>
              <li>CMOS Design</li>
              <li>Data Structures</li>
              <li>Analysis of Algorithms</li>
              <li>Introduction to Graph Theory</li>
              <li>Computer Architecture</li>
            </ul>
          </div>
          <div className="w-full mt-2 flex flex-row gap-2 flex-wrap">
            <Tag value="C++" />
            <Tag value="Python" />
            <Tag value="NLP" />
            <Tag value="Data Structures" />
            <Tag value="Algorithms" />
            <Tag value="Risc-V" />
            <Tag value="Math" />
          </div>
        </div>
      </Card.Root>
      <Card.Root className="w-[85%]">
        <Card.Heading logoClass="UC">University of Cincinnati</Card.Heading>
        <div className="flex w-full flex-row flex-wrap">
          <div className=" flex-1 pl-2 min-w-[250px] pb-2">
            <p>Enrolled as a College-Credit-Plus Student</p>
            <p>
              <i>Aug 2021 - May 2022</i>
            </p>
          </div>
          <div className=" flex-1 pl-2 min-w-[250px] pb-2 ">
            <h2 className="font-semibold">Notable Courses:</h2>
            <ul className="list-disc pl-6 columns-2">
              <li>Foundations of Engineering</li>
              <li>Programming for EECE</li>
              <li>Multi-variable Calculus</li>
              <li>Linear Algebra</li>
            </ul>
          </div>
          <div className="w-full mt-2 flex flex-row gap-2 flex-wrap">
            <Tag value="Python" />
            <Tag value="R" />
            <Tag value="Project Management" />
            <Tag value="Math" />
          </div>
        </div>
      </Card.Root>

      <h1 className="text-blue-300 font-bold text-[22px] w-[85%] mt-4">
        Work Experience
      </h1>
      <div className="bg-blue-300 h-[3px] w-[85%] rounded-lg mt-1"></div>
      <Card.Root className="w-[85%]">
        <Card.Heading logoClass="IPG">Software Engineering Intern</Card.Heading>
        <div className="flex w-full flex-row flex-wrap">
          <div className=" flex-1 pl-2 min-w-[250px] pb-2">
            <p>Procter & Gamble</p>
            <p>Cincinnati, OH</p>
            <p>
              <i>May 2025 - Aug 2025</i>
            </p>
          </div>
          <div className=" flex-1 pl-2 min-w-[250px] pb-2 ">
            <ul className="list-disc pl-6">
              <li>
                Established a real-time collaboration feature using WebSockets
                for an internal application, enabling user presence indicators,
                cell-locking, and live updates, preventing spending conflicts
                costing thousands.
              </li>
              <li>
                Enhanced an existing commenting system by implementing user
                tagging functionality, enabling user search, email
                notifications, and direct links to tagged content, saving time
                in communication and site navigation.
              </li>
            </ul>
          </div>
          <div className="w-full mt-2 flex flex-row gap-2 flex-wrap">
            <Tag value="React" />
            <Tag value="Tailwind" />
            <Tag value="WebSockets" />
            <Tag value="Python" />
            <Tag value="FastAPI" />
            <Tag value="Graph API" />
          </div>
        </div>
      </Card.Root>
      <Card.Root className="w-[85%]">
        <Card.Heading logoClass="PG">Software Engineering Intern</Card.Heading>
        <div className="flex w-full flex-row flex-wrap">
          <div className=" flex-1 pl-2 min-w-[250px] pb-2">
            <p>Procter & Gamble</p>
            <p>Cincinnati, OH</p>
            <p>
              <i>May 2024 - Aug 2024</i>
            </p>
          </div>
          <div className=" flex-1 pl-2 min-w-[250px] pb-2 ">
            <ul className="list-disc pl-6">
              <li>
                Built a documentation app to showcase <BB>25</BB> examples of
                components in an internal React component library.
              </li>
              <li>
                Implemented Playwright tests to verify component functionality
                and accessibility on new version releases, eliminating over{" "}
                <BB>40</BB> accessibility errors from the library.
              </li>
              <li>
                Patched issues and standardized design for a set of components
                in the internal library, addressing <BB>15</BB> tickets.
              </li>
            </ul>
          </div>
          <div className="w-full mt-2 flex flex-row gap-2 flex-wrap">
            <Tag value="React" />
            <Tag value="Tailwind" />
            <Tag value="Typescript" />
            <Tag value="Next.JS" />
            <Tag value="GitHub Actions" />
            <Tag value="Playwright" />
          </div>
        </div>
      </Card.Root>
      <Card.Root className="w-[85%]">
        <Card.Heading logoClass="IPG">
          Power Platform Developer Intern
        </Card.Heading>
        <div className="flex w-full flex-row flex-wrap">
          <div className=" flex-1 pl-2 min-w-[250px] pb-2">
            <p>Intertape Polymer Group</p>
            <p>Sarasota, Fl</p>
            <p>
              <i>Nov 2023 - May 2024</i>
            </p>
            <p>
              <i>Aug 2024 - May 2025</i>
            </p>
          </div>
          <div className=" flex-1 pl-2 min-w-[250px] pb-2 ">
            <ul className="list-disc pl-6">
              <li>
                Met with business stakeholders to gather requirements and
                translate process needs into technical specifications for the
                Microsoft&apos;s Power Platform.
              </li>
              <li>
                Designed and deployed apps and workflows that streamlined
                operations and saved over <BB>250</BB> hours annually.
              </li>
            </ul>
          </div>
          <div className="w-full mt-2 flex flex-row gap-2 flex-wrap">
            <Tag value="Microsoft Power Platform" />
            <Tag value="HTTP Requests" />
            <Tag value="Project Management" />
          </div>
        </div>
      </Card.Root>
      <Card.Root className="w-[85%]">
        <Card.Heading logoClass="PG">Software Engineering Intern</Card.Heading>
        <div className="flex w-full flex-row flex-wrap">
          <div className=" flex-1 pl-2 min-w-[250px] pb-2">
            <p>Procter & Gamble</p>
            <p>Cincinnati, OH</p>
            <p>
              <i>May 2023 - Aug 2023</i>
            </p>
          </div>
          <div className=" flex-1 pl-2 min-w-[250px] pb-2 ">
            <ul className="list-disc pl-6">
              <li>
                Developed a Python script using Selenium, automating invoice
                pulling and organization, saving over <BB>90</BB> hours
                annually.
              </li>
              <li>
                Managed and developed new and existing projects in the Microsoft
                Power Platform, automating the submission and approval of
                requests in line with stewardship policies, saving <BB>300</BB>{" "}
                hours yearly.
              </li>
            </ul>
          </div>
          <div className="w-full mt-2 flex flex-row gap-2 flex-wrap ">
            <Tag value="Microsoft Power Platform" />
            <Tag value="Project Management" />
            <Tag value="Python" />
          </div>
        </div>
      </Card.Root>
    </div>
  );
});
Resume.displayName = "Resume";
export default Resume;
