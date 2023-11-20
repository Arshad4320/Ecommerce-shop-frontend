/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        secondary: "#3C2CED",
        warning: "#EBB943",
        primary: "#080246",
      },
      backgroundColor: {
        primary: "#080246",
        warning: "#EBB943",
        secondary: "#3C2CED",
      },
    },
  },
  plugins: [],
};
