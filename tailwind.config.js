const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/daisyui/dist/**/*.js',
  ],
  darkMode: "class",
  theme: {
    extend: {},
  },
  daisyui: {
    themes: ["dark"],
  },
  plugins: [
    require('daisyui'),
    addVariablesForColors,  // Dodanie pluginu, który konwertuje kolory na zmienne CSS
  ],
};

// Plugin, który dodaje każdy kolor Tailwind jako globalną zmienną CSS
function addVariablesForColors({ addBase, theme }) {  // Usunięte adnotacje typów
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
