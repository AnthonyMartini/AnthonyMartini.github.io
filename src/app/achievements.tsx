"use client";
import { Card, Tag } from "./card";

import { forwardRef, LegacyRef } from "react";

const Achievements = forwardRef((props, ref: LegacyRef<HTMLDivElement>) => {
  return (
    <div
      className="bg-blue-950 p-4 font-serif flex flex-col items-center pt-[40px] text-black"
      ref={ref}
    >
      <h1 className="text-blue-300 font-bold text-[28px]">Achievments</h1>
      <div className="bg-blue-300 h-[3px] w-[85%] rounded-lg mt-1"></div>

      <Card.Root className="w-[85%]">
        <Card.Heading logoClass="BSA">Eagle Scout</Card.Heading>
        <div className="flex w-full flex-row flex-wrap ">
          <div className=" flex-1 pl-2 min-w-[250px] pb-2 ">
            <p>
              <i>Sep 21, 2021</i>
            </p>
          </div>
          <div className=" flex-1 pl-2 ">
            <p>
              Organized and led the veteran documentation of the Maple Grove
              Cemetery and marked easily missed veteran graves to assist the
              American Legion in their veteran day services.
            </p>
          </div>
          <div className="w-full mt-2 flex flex-row gap-2 flex-wrap">
            <Tag value="Leadership" />
            <Tag value="Community" />
            <Tag value="Project Planning" />
          </div>
        </div>
      </Card.Root>
      <Card.Root className="w-[85%]">
        <Card.Heading logoClass="NM">National Merit Finalist</Card.Heading>
        <div className="flex w-full flex-row flex-wrap">
          <div className=" flex-1 pl-2 min-w-[250px] pb-2 ">
            <p>
              <i>Feb 14, 2022</i>
            </p>
          </div>
          <div className=" flex-1 pl-2 ">
            <p>
              Finalists are selected based on their entire application which
              includes recommendations, test scores, transcripts, and a personal
              essay.
            </p>
          </div>
          <div className="w-full mt-2 flex flex-row gap-2 flex-wrap">
            <Tag value="STEM" />
            <Tag value="Scholarship" />
          </div>
        </div>
      </Card.Root>
    </div>
  );
});
Achievements.displayName = "Achievements";
export default Achievements;
