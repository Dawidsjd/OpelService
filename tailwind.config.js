// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/daisyui/dist/**/*.js',
  ],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
};
