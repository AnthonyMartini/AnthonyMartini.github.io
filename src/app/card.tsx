"use client";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

const Root = ({ children, className, logoClass }: { children: ReactNode; className?: string; logoClass?: string }) => {
  return (
    <div
      className={cn(
        "glass-panel rounded-2xl p-6 transition-all duration-300 relative overflow-hidden group",
        "bg-white/80 backdrop-filter backdrop-blur-md border border-slate-200",
        "hover:-translate-y-1 hover:border-electric-blue/30 hover:shadow-xl hover:shadow-electric-blue/[0.07]",
        className
      )}
    >
      {/* Hairline gradient along the top edge, revealed on hover */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-electric-blue/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20" />

      {/* Background Logo Mask */}
      {logoClass && (
        <>
          <div
            className={cn(
               "absolute top-8 right-4 w-64 h-64 bg-no-repeat bg-center bg-contain opacity-[0.15] pointer-events-none transform rotate-[15deg] transition-transform duration-500 group-hover:scale-105 group-hover:rotate-[20deg]",
               logoClass
            )}
          />
          {/* White film overlay for extra subtlety if needed, though opacity handles most of it.
              The user asked for "masked over with a white film".
              Let's add a subtle gradient overlay to ensure text readability. */}
           <div className="absolute inset-0 bg-white/40 pointer-events-none" />
        </>
      )}

      {/* Content wrapper to ensure it sits above the background */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

const Heading = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
  // logoClass removed from here
}) => {
  return (
    <div className={cn("flex flex-row justify-between items-start mb-4 gap-4", className)}>
      <h3 className="text-xl md:text-2xl font-bold font-terminal text-slate-800 text-left flex-grow pt-2">
        {children}
      </h3>
    </div>
  );
};

export const Card = { Root, Heading };

/** Consistent section header: mono eyebrow + terminal heading + gradient underline */
export const SectionTitle = ({
  eyebrow,
  children,
  className,
  dark = false,
}: {
  eyebrow?: string;
  children: ReactNode;
  className?: string;
  dark?: boolean;
}) => {
  return (
    <div className={cn("flex flex-col items-center mb-8", className)}>
      {eyebrow && (
        <span className={cn(
          "font-mono text-xs tracking-[0.3em] uppercase mb-2",
          dark ? "text-emerald-400" : "text-electric-blue"
        )}>
          {eyebrow}
        </span>
      )}
      <h1 className={cn(
        "text-3xl md:text-4xl font-terminal text-center",
        dark ? "text-slate-100" : "text-slate-800"
      )}>
        {children}
      </h1>
      <div className={cn(
        "mt-3 h-px w-16 bg-gradient-to-r from-transparent to-transparent",
        dark ? "via-emerald-400" : "via-electric-blue"
      )} />
    </div>
  );
};

export const Tag = ({ value }: { value: string }) => {
  return (
    <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-white/80 text-slate-600 border border-slate-200 shadow-sm hover:bg-electric-blue hover:text-white hover:border-electric-blue hover:shadow-electric-blue/20 transition-all duration-200">
      {value}
    </span>
  );
};
