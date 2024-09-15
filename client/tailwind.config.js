import typography from "@tailwindcss/typography";
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1565D8",
        dark: {
          hard: "#0D2436",
          soft: "#183B56",
          light: "#5A7184",
        },
      },
      fontFamily: {
        courierprime: ["Courier Prime", "monospace"],
        opensans: ["Open Sans", "sans - serif"],
      },
    },
  },
  plugins: [typography],
};
