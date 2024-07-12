"use client";
import React, { ReactNode } from "react";
import { cn } from "./cn";

interface IProps {
  children?: React.ReactNode;
  className?: string;
  logoClass?: string;
}

function Tag({ value }: { value: string }) {
  return (
    <p className=" h-[26px] content-center border-2 w-fit px-[4px] rounded-[6px] border-[#09a7e2] text-[#09a7e2] hover:animate-pulse text-nowrap">
      {value}
    </p>
  );
}

const Card = {
  Root: function Root({ children, className }: IProps) {
    return (
      <div
        className={cn(
          " bg-slate-50 rounded-[10px] p-2 hoverScale text-[14px] mt-4 drop-shadow-lg ",
          className
        )}
      >
        {children}
      </div>
    );
  },

  Heading: function Heading({ children, className, logoClass }: IProps) {
    return (
      <div className="flex flex-row flex-wrap">
        <p
          className={cn(
            "font-bold text-[18px] sm:text-[22px] flex-1 text-slate-900",
            className
          )}
        >
          {children}
        </p>
        <div className={`${logoClass} cardImage hidden sm:block`} />
        <div className="w-full h-[3px] bg-slate-700 mb-2 rounded-[3px]"></div>
      </div>
    );
  },
};
export { Card, Tag };
