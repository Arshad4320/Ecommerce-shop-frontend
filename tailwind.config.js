/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#05AD3B",
        secondary: "#747E72",
      },
      backgroundColor: {
        primary: "#05AD3B",
        secondary: "#747E72",
      },
    },
  },
  plugins: [],
};
