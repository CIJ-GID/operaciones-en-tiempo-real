const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      base: "#1C1C1C",
      primary: "#006473",
      darkPrimary: "#014A5B",
      principalTextColor: "#6BBED0",
      enfasis: "#005F71",
      containers: "#262626",
      success: "#287300",
      white: colors.white,
      black: colors.black,
      gray: colors.gray,
      slate: colors.slate,
      red: colors.red,
    },
    screens: {
      xs: "200px", //Celular
      sm: "350px", // Celular M/L
      md: "640px", // Tablet
      xl: "1024px", // Laptop
      "2xl": "2000px", // Desktop
    },
    fontFamily: {
      display: ["Oxanium", "cursive"],
    },
    transitionDuration: {
      DEFAULT: "300ms",
    },
    extend: {},
  },
  plugins: [],
};
