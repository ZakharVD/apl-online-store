/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  mode: 'jit',
  theme: {
    extend: {
      display: ["group-hover"],
      colors: {
        "brand-gradient": "linear-gradient(90deg, #337cd5 0%, #66db9f 100%)"
      }
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
      'blue': '#4285F4',
      'mainbg': 'whitesmoke',
      'orange': '#FF6A18'
    },
    screens: {
      'sm': '380px',
      'new': '480px',
      'md': '660px',
      'lg': '810px',
      'formain': '1000px',
      'xl': '1330px'
    },
  },
  plugins: [],
}

