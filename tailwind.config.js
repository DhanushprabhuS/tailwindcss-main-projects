/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*html'],
  theme: {
    fontFamily:{
      sans: ['Open Sans'],
    },
    extend: {
      backgroundImage:{
        'hero-pattern':"url('../images/sun-tornado.svg')"
      }
    },
  },
  plugins: [],
}

