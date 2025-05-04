/** @type {import('tailwindcss').Config} */
import scrollbar from "tailwind-scrollbar";
import scrollbarHide from "tailwind-scrollbar-hide";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "rebecca-purple": "#663399",
        "screen-sm": "#ff4d4d", // red
        "screen-md": "#ffbb33", // amber
        "screen-lg": "#15803d",
        "sea-shell": "#fcf5f3",
        mustard: "#fece51", // purple
        "spanish-gray": "#999999",
        "light-yellow": "#fecd5170",
      },
      spacing: {
        1366: "1366px",
        1280: "1280px",
        768: "768px",
        640: "640px",
      },
      screens: {
        sm: { max: "737px" }, // Adjusted to be exclusive of the next breakpoint
        md: { min: "738px", max: "1023px" }, // Adjusted to be exclusive of the next breakpoint
        lg: { min: "1024px", max: "1365px" }, // Adjusted to have a minimum and maximum
        xl: { min: "1366px" }, // Added an explicit xl breakpoint for clarity
      },
    },
  },
  plugins: [scrollbar, scrollbarHide],
};
