/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Circular", "arial"],
      },
      colors: {
        primary: "#5CC76E",
      },
    },
  },
  plugins: [],
};
