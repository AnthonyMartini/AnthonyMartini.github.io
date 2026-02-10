"use client";

export default function Footer() {
  return (
    <div id="footer" className="w-full h-20 flex flex-col md:flex-row justify-center items-center text-sm text-slate-500 bg-slate-50 border-t border-slate-200 gap-4">
      <div className="flex-1 text-center md:text-right px-4">
        Created by Anthony Martini, 2025
      </div>
      <div className="flex-1 flex justify-center md:justify-start gap-6 px-4">
        <a
          title="LinkedIn"
          className="LinkedIn opacity-70 hover:opacity-100 hover:scale-110 transition-all duration-300"
          href="https://www.linkedin.com/in/anthony-martini/"
          target="_blank"
          rel="noopener noreferrer"
        />
        <a
          title="GitHub"
          className="GitHub opacity-70 hover:opacity-100 hover:scale-110 transition-all duration-300"
          href="https://github.com/AnthonyMartini/"
          target="_blank"
          rel="noopener noreferrer"
        />
      </div>
    </div>
  );
}
