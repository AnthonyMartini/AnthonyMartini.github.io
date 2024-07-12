"use client";
import React, { LegacyRef, useEffect, useState } from "react";
import { cn } from "./helper/helpers";

interface Option {
  name: string;
  object: HTMLDivElement;
}
interface MenuBarProps {
  items: Option[];
}

export default function MenuBar({ items }: MenuBarProps) {
  const [bgClass, setBgClass] = useState("bg-opacity-0");

  useEffect(() => {
    if (window.scrollY > 350) {
      setBgClass("bg-opacity-100");
    } else {
      setBgClass("bg-opacity-0");
    }
    const onScroll = () => {
      if (window.scrollY > 350) {
        setBgClass("bg-opacity-100");
      } else {
        setBgClass("bg-opacity-0");
      }
    };
    // clean up code
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={cn(
        "  h-[41px] w-full sticky top-0 mt-[-41px] z-10 bg-[#3068a8]  border-black transition-all duration-1000",
        bgClass
      )}
    >
      <div className=" flex justify-center h-full text-white  text-center">
        {items.map((item) => (
          <div
            key={item.name}
            className=" hover:text-[#ff722c] px-2 h-full content-center cursor-pointer text-[13px] sm:text-[14px] overflow-hidden"
            onClick={() =>
              item.object!.scrollIntoView({
                behavior: "smooth",
                block: "start",
              })
            }
          >
            {item.name}
          </div>
        ))}
      </div>
    </div>
  );
}
