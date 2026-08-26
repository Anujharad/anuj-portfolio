/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        base: {
          900: "#050505",
          800: "#09090b",
          700: "#101012",
          600: "#151518",
          500: "#202024",
          400: "#2a2a30",
        },
        accent: {
          DEFAULT: "#ff3045",
          light: "#ff6070",
          dark: "#c91f31",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
        serif: ["Instrument Serif", "serif"],
      },
      letterSpacing: {
        tightest: "-0.04em",
      },
    },
  },
  plugins: [],
};
