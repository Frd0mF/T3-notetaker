/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    //typography
    require("@tailwindcss/typography"),
    //daisy
    require("daisyui"),
  ],
};
