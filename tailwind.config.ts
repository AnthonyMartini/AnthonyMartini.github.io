import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "neon-green": "#009929", // Darker green for visibility on light bg
        "electric-blue": "#2563eb", // vibrant blue
        "light-bg": "#f8fafc", // slate-50
        "light-text": "#1e293b", // slate-800
        "glass-border": "rgba(0, 0, 0, 0.1)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "grid-pattern": "linear-gradient(rgba(0, 0, 0, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 0, 0, 0.05) 1px, transparent 1px)",
      },
      fontFamily: {
        'terminal': ['TerminalGrotesque', 'monospace'],
        'sans': ['Inter', 'sans-serif'],
      },
      animation: {
        'scanline': 'scanline 8s linear infinite',
        'blink': 'blink 1s step-end infinite',
        'float-slow': 'drift 18s ease-in-out infinite',
        'float-slower': 'drift 26s ease-in-out infinite reverse',
      },
      keyframes: {
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        drift: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '33%': { transform: 'translate(40px, -30px) scale(1.08)' },
          '66%': { transform: 'translate(-30px, 25px) scale(0.95)' },
        },
      },
    },
  },
  plugins: [],
};
export default config;
