const colorThemeLight = require('yummyui-react');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./.storybook/preview.cjs",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("yummyui-react")['default']],
  yummyui: {
    themes: [
      {
        light: {
          ...colorThemeLight.colorTheme['[data-theme=light]'],
          primary: "blue",
          "primary-focus": "mediumblue",
        },
      },
    ],
  },
}
