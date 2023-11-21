/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#27005D",
        secondary: "#9400FF",
        warning: "#E8F9FD",
      },
      backgroundColor: {
        primary: "#27005D",
        secondary: "#9400FF",
        warning: "#E8F9FD",
      },
    },
  },
  plugins: [],
};
