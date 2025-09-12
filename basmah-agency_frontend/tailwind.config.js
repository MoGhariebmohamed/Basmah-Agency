/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
      "./app/**/*.{js,ts,tsx,jsx}",
    ],

    theme: {
      extend: {
        colors: {
          primary: {
          50:  '#f0f9fb',
          100: '#d9f0f4',
          200: '#b3e1e9',
          300: '#80c9d9',
          400: '#4db2c8',
          500: '#0097b2', 
          600: '#00839a',
          700: '#006f82',
          800: '#005b6a',
          900: '#004753',
        },
        secondary: {
          50:  '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316', 
          600: '#ea580c',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
      },
    },
  },
},
    plugins: [],
  }
  