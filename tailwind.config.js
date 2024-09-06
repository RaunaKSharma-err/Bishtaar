/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        BLACK: "#000000",
        PINK: "#F72798",
        ORANGE: "#F57D1F",
        YELLOW: "#EBF400",
        LightBlack: "#151515",
        Gold: "#FFB200",
      },
    },
  },
  plugins: [require("daisyui")],
};
