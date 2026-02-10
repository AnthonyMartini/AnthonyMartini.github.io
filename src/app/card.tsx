"use client";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

const Root = ({ children, className }: { children: ReactNode; className?: string }) => {
  return (
    <div
      className={cn(
        "glass-panel rounded-xl p-6 transition-all duration-300",
        "bg-white/80 backdrop-filter backdrop-blur-md border border-slate-200 shadow-sm",
        "hover:shadow-lg hover:-translate-y-1 hover:border-electric-blue/30",
        className
      )}
    >
      {children}
    </div>
  );
};

const Heading = ({
  children,
  className,
  logoClass,
}: {
  children: ReactNode;
  className?: string;
  logoClass?: string;
}) => {
  return (
    <div className={cn("flex flex-row-reverse justify-between items-start mb-4 gap-4", className)}>
      {logoClass && (
        <div
          className={cn(
            "cardImage w-12 h-12 rounded-full hover:scale-110 transition-transform duration-300 flex-shrink-0",
            logoClass
          )}
        />
      )}
      {!logoClass && <div className="w-12 h-12" />} {/* Spacer if no logo to keep title left */}
      <h3 className="text-xl md:text-2xl font-bold font-terminal text-slate-800 text-left flex-grow pt-2">
        {children}
      </h3>
    </div>
  );
};

export const Card = { Root, Heading };

export const Tag = ({ value }: { value: string }) => {
  return (
    <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-600 border border-slate-300 hover:bg-electric-blue hover:text-white hover:border-electric-blue transition-colors duration-200">
      {value}
    </span>
  );
};

