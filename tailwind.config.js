/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        secondary: "#14274E",
        warning: "#E8F9FD",
        primary: "#080246",
      },
      backgroundColor: {
        primary: "#080246",
        warning: "#E8F9FD",
        secondary: "#14274E",
      },
    },
  },
  plugins: [],
};
