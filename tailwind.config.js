const colors = require('tailwindcss/colors')
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    './views/**/*.ejs'
  ],
  theme: {
    extend: {
      colors:{
        'cyan': colors.cyan,
        'teal': colors.teal,
        'purple': colors.purple,
        'pink': colors.pink
      }
    },
  },
  plugins: [],
}

