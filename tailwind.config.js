/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/html/utils/withMT");
module.exports = withMT({
  content: ['./public/**/*.{html,js}'],
  theme: {
    extend: {
      fontFamily: {
        mont: [ 'Montserrat'],
      
      },
    },
  },
  plugins: [],
});

