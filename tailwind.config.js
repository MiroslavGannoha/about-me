const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      display: ['Inter', 'system-ui', 'sans-serif'],
      body: ['Inter', 'system-ui', 'sans-serif'],
    },
    extend: {
      colors: {
        primary: colors.green,
        secondary: colors.blue,
      }
    }
  },
  variants: {
    extend: {
      backgroundColor: ['even', 'odd'],
      textColor: ['active', 'visited'],
    }
  },
  plugins: [],
}