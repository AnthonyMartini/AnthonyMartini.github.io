"use client";

export default function Footer() {
  return (
    <div className="static w-full h-[80px] flex flex-rpw text-center items-center text-[14px] text-slate-600 bg-slate-50">
      <div className="flex-1">Created by Anthony Martini, 2024</div>
      <div className="flex-1 flex justify-center">
        <a
          title="LinkedIn External Link"
          className="LinkedIn"
          href="https://www.linkedin.com/in/anthony-martini/"
          target="_blank"
          rel="noopener noreferrer"
        />
      </div>
    </div>
  );
}
