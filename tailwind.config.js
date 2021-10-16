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
        nodejs: '#3C873A',
        reactjs: '#60DAFB',
        javascript: '#f7df1e',
        html5: '#f06529',
        solidity: '#656565',
        rust: '#CE412B',
        typescript: '#007ACC',
        mobxjs: '#DE5C16',
        css3: '#2965F1',
        typescript: "#007acc"
      }
    }
  },
  variants: {
    extend: {
      backgroundColor: ['even', 'odd'],
      textColor: ['active', 'visited'],
      boxShadow: ['active'],
      filter: ['hover', 'group-hover'],
    }
  },
  plugins: [],
}