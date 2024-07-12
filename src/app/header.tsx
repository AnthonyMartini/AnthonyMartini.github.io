"use client";
import React, { ForwardedRef, forwardRef, LegacyRef, Ref } from "react";

const Header = forwardRef((props, ref: ForwardedRef<HTMLDivElement>) => {
  return (
    <div className="header h-[300px] md:h-[450px] p-4" ref={ref}>
      <div className="text-center font-bold text-white">
        <h1 className="text-[28px]">Anthony Martini</h1>
        <h2 className="text-[16px] font-semibold">
          Computer Engineering Student at the University of South Florida
        </h2>
        <h2 className="text-[16px] font-semibold">
          Software Engineering Intern at Procter & Gamble
        </h2>
      </div>
    </div>
  );
});
Header.displayName = "Header";
export default Header;
