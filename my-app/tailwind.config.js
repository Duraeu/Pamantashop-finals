/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [    './src/**/*.{js,ts,jsx,tsx}',
  './public/index.html',],
  theme: {
    colors: { transparent: 'transparent',
              current: 'currentColor',
              plmlogin: '#A4826D',
              plmbg: '#FFF2E7',},
    extend: {},
  },
  plugins: [],
}

