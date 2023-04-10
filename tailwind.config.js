/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      display: ["group-hover"]
    },
    fontFamily: {
      'heading': ['Sawarabi Mincho'],
      'logo': ['Titan One']
    },
    colors: {
      'grey': '#929292',
      'white': '#F0F0F5',
      'black': '#0F0C0C',
      'green': '#9CCD62',
      'red': '#E54640',
      'lightgrey': '#E0E0E0',
      'blue': '#4285F4'
    },
    backgroundImage: {
      'athlete': "https://i.pinimg.com/564x/c0/5c/da/c05cdab1aedd7d248b1f3f43485e9ab8.jpg"
    },
    screens: {
      'sm': '380px',
      'new': '480px',
      'md': '660px',
      'lg': '810px',
      'xl': '1330px'
    }
  },
  plugins: [],
}

