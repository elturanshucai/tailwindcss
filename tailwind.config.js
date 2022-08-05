/** @type {import('tailwindcss').Config} */

const _ = require('lodash')
const plugin = require('tailwindcss/plugin')

module.exports = {
  content: ["./index.html"],
  darkMode: 'class',
  theme: {
    extend: {
      colors:{
        prototurk : '#32445a',
        twitter: '#1da1f2'
      },
      spacing: {
        '15': '3.75rem'
      },
      screens:{
        min: '1000px',
        scr: '550px'
      },
      zIndex: {
        '-1':'-1'
      } 
    },
  },
  plugins: [],
}