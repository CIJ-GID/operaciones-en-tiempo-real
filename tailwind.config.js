const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      base: "#1C1C1C",
      primary: "#006473",
      enfasis: "#005F71",
      containers: "#262626",
      white: colors.white,
      black: colors.black,
      gray: colors.gray,
      slate: colors.slate,
    },
    extend: {},
  },
  plugins: [],
};
