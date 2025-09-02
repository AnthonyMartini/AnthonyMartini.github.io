"use client";
import React, { ForwardedRef, forwardRef, LegacyRef, Ref } from "react";

const Header = forwardRef((props, ref: ForwardedRef<HTMLDivElement>) => {
  return (
    <div className="header h-screen p-4 relative" ref={ref}>
      <div className="text-center font-bold text-white">
        <h1 className="text-[74px] font-TerminalGrotesque font-normal">
          Anthony Martini
        </h1>
        <h2 className="text-[16px] font-semibold">
          Computer Engineering Student at the University of South Florida
        </h2>
        <h2 className="text-[16px] font-semibold">
          Experienced Software Engineering Intern
        </h2>
      </div>
      <a
        href="/AnthonyMartiniResume.pdf"
        download
        className="mt-6 inline-block px-6 py-2 bg-[#a2a2a29f] hover:bg-[#6b6b6b9f] text-white rounded-xl shadow  transition"
      >
        Get My Résumé!
      </a>
      <a
        href="#about-me-section"
        className="absolute left-1/2 -translate-x-1/2 bottom-8 cursor-pointer"
        aria-label="Scroll to About Me"
      >
        <svg
          className="animate-blink w-10 h-10 text-white"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </a>
    </div>
  );
});
Header.displayName = "Header";
export default Header;
