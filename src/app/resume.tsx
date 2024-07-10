"use client";
import { forwardRef, LegacyRef } from "react";
import { Card, Tag } from "./card";

const Resume = forwardRef((props, ref: LegacyRef<HTMLDivElement>) => {
  return (
    <div
      className="darkContent p-4 font-serif flex flex-col items-center pt-[40px]"
      ref={ref}
    >
      <h1 className="text-blue-300 font-bold text-[28px]">Résumé</h1>
      <h1 className="text-blue-300 font-bold text-[22px] w-[85%]">Education</h1>
      <div className="bg-blue-300 h-[3px] w-[85%] rounded-lg mt-1"></div>
      <Card.Root className="w-[85%]">
        <Card.Heading logoClass="USF">University of South Florida</Card.Heading>
        <div className="flex w-full flex-row flex-wrap">
          <div className=" flex-1 pl-2">
            <p>Computer Engineering, BSCE</p>
            <p>Minor in Mathematics, Honors College, Dean's List Recipient</p>
            <p>
              <i>Aug 2022 - May 2026</i>
            </p>
          </div>
          <div className=" flex-1 pl-2 ">
            <h2 className="font-semibold">Notable Courses:</h2>

            <ul className="list-disc pl-6 columns-2">
              <li>Data Structures</li>
              <li>Analysis of Algorithms</li>
              <li>Introduction to Graph Theory</li>
              <li>Computer Architecture</li>
            </ul>
          </div>
          <div className="w-full mt-2 flex flex-row space-x-2 flex-wrap">
            <Tag value="C++" />
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
          <div className=" flex-1 pl-2">
            <p>Enrolled as a College-Credit-Plus Student</p>
            <p>
              <i>Aug 2021 - May 2022</i>
            </p>
          </div>
          <div className=" flex-1 pl-2 ">
            <h2 className="font-semibold">Notable Courses:</h2>
            <ul className="list-disc pl-6 columns-2">
              <li>Foundations of Engineering</li>
              <li>Programming for EECE</li>
              <li>Multi-variable Calculus</li>
              <li>Linear Algebra</li>
            </ul>
          </div>
          <div className="w-full mt-2 flex flex-row space-x-2 flex-wrap">
            <Tag value="Python" />
            <Tag value="R" />
            <Tag value="Project Management" />
            <Tag value="Math" />
          </div>
        </div>
      </Card.Root>
      <Card.Root className="w-[85%]">
        <Card.Heading logoClass="CS">Cincinnati State</Card.Heading>
        <div className="flex w-full flex-row flex-wrap">
          <div className=" flex-1 pl-2">
            <p>Enrolled as a College-Credit-Plus Student</p>
            <p>
              <i>Aug 2020 - May 2021</i>
            </p>
          </div>
          <div className=" flex-1 pl-2 ">
            <h2 className="font-semibold">Notable Courses:</h2>
            <ul className="list-disc pl-6 columns-2">
              <li>Calculus 1 & 2</li>
              <li>Public Speaking</li>
            </ul>
          </div>
          <div className="w-full mt-2 flex flex-row space-x-2 flex-wrap">
            <Tag value="Math" />
            <Tag value="Communications" />
          </div>
        </div>
      </Card.Root>
      <h1 className="text-blue-300 font-bold text-[22px] w-[85%] mt-4">
        Work Experience
      </h1>
      <div className="bg-blue-300 h-[3px] w-[85%] rounded-lg mt-1"></div>
      <Card.Root className="w-[85%]">
        <Card.Heading logoClass="PG">Software Engineering Intern</Card.Heading>
        <div className="flex w-full flex-row flex-wrap">
          <div className=" flex-1 pl-2">
            <p>Procter & Gamble</p>
            <p>Cincinnati, OH</p>
            <p>
              <i>May 2024 - Present</i>
            </p>
          </div>
          <div className=" flex-1 pl-2 ">
            <h2 className="font-semibold">Description:</h2>
            <ul className="list-disc pl-6">
              <li>
                Built a documentation website to showcase the implementation of
                an internal React component library and built tests in
                Playwright to validate functionality on new version releases.
              </li>
              <li>
                Took authority for patching issues and standardizing design for
                a set of date picker components.
              </li>
            </ul>
          </div>
          <div className="w-full mt-2 flex flex-row space-x-2 flex-wrap">
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
          <div className=" flex-1 pl-2">
            <p>Intertape Polymer Group</p>
            <p>Sarasota, Fl</p>
            <p>
              <i>Nov 2023 - May 2024</i>
            </p>
          </div>
          <div className=" flex-1 pl-2 ">
            <h2 className="font-semibold">Description:</h2>
            <ul className="list-disc pl-6">
              <li>
                Collaborate with business professionals to design, build, and
                deploy applications, workflows, and automation tools that
                streamline business processes and enhance productivity.
              </li>
            </ul>
          </div>
          <div className="w-full mt-2 flex flex-row space-x-2 flex-wrap">
            <Tag value="Microsoft Power Platform" />
            <Tag value="HTTP Requests" />
            <Tag value="Project Management" />
          </div>
        </div>
      </Card.Root>
      <Card.Root className="w-[85%]">
        <Card.Heading logoClass="PG">Software Engineering Intern</Card.Heading>
        <div className="flex w-full flex-row flex-wrap">
          <div className=" flex-1 pl-2">
            <p>Procter & Gamble</p>
            <p>Cincinnati, OH</p>
            <p>
              <i>May 2023 - Aug 2023</i>
            </p>
          </div>
          <div className=" flex-1 pl-2 ">
            <h2 className="font-semibold">Description:</h2>
            <ul className="list-disc pl-6">
              <li>
                Developed Python script with Selenium to automate the pulling
                and organizing of vendor invoices.
              </li>
              <li>
                Managed and developed new and existing projects in the Microsoft
                Power Platform, automating the submission and approval of
                requests in line with stewardship policies.
              </li>
              <li>
                Documented and transitioned projects to new developers,
                onboarding them on the tools and processes used.
              </li>
            </ul>
          </div>
          <div className="w-full mt-2 flex flex-row space-x-2 flex-wrap ">
            <Tag value="Microsoft Power Platform" />
            <Tag value="Project Management" />
            <Tag value="Python" />
          </div>
        </div>
      </Card.Root>
      <Card.Root className="w-[85%]">
        <Card.Heading logoClass="PG">Technology Intern</Card.Heading>
        <div className="flex w-full flex-row flex-wrap">
          <div className=" flex-1 pl-2">
            <p>Procter & Gamble</p>
            <p>Cincinnati, OH</p>
            <p>
              <i>Jun 2021- May 2023</i>
            </p>
          </div>
          <div className=" flex-1 pl-2 ">
            <h2 className="font-semibold">Description:</h2>
            <ul className="list-disc pl-6">
              <li>
                Developed apps and automation flows in the Power Platform that
                facilitates the submission and approval of highly restricted
                spending data.
              </li>
              <li>
                Redesigned existing data sources, consolidating over 36 tables
                across 12 sites into 4 tables in 1 site.
              </li>
            </ul>
          </div>
          <div className="w-full mt-2 flex flex-row space-x-2 flex-wrap">
            <Tag value="Microsoft Power Platform" />
            <Tag value="Power Query" />
            <Tag value="Excel" />
            <Tag value="HTML" />
          </div>
        </div>
      </Card.Root>
    </div>
  );
});
export default Resume;
