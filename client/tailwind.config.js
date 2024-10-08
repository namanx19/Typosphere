import typography from "@tailwindcss/typography";
import daisyui from "daisyui";
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
  plugins: [typography, daisyui],
  daisyui: {
    themes: [], // true: all themes | false: only light + dark | array: specific themes like this ["light", "dark", "cupcake"]
    base: false, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: "d-",
  },
};
