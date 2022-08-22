// @ts-check
const colors = require('./scripts/color.js');
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors,
    },
  },
  plugins: [],
}
