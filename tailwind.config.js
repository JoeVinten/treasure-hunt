/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#0F0D0E",
        "orangey-yellow": "#F2BD4C",
        cream: "#F8F4DD",
        "lighter-dark": "#221F20",
        "matte-pink": "#E590A3",
      },
    },
  },
  plugins: [],
};
