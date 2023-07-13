/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        azeret: ["Azeret Mono", "monospace"],
        fasthand: ["Fasthand", "cursive"],
        sirin: ["Sirin Stencil", "cursive"],
        java: ["Noto Sans Javanese", "sans-serif"],
        sunda: ["Noto Sans Sundanese", "sans-serif"],
        hiroshima: ["Hiroshima", "sans-serif"],
        samurai: ["Funny Samurai", "sans-serif"],
        japan: ["Kong Japanese", "sans-serif"],
      },
    },
  },
  plugins: [],
};
