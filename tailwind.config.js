/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './app.js',
    './style.css'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        'xs': '400px'
      },
      colors: {
        obsidian: '#0A0A0C',
        charcoal: '#121216',
        velvet: '#18181F',
        alabaster: '#F8F9FA',
        cashmere: '#F4F3EF',
        champagne: '#C5A059',
        goldlight: '#DFBD78',
        sage: '#8A9A86'
      },
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Plus Jakarta Sans', 'sans-serif'],
        arabic: ['Alexandria', 'Readex Pro', 'sans-serif'],
        arabicSerif: ['Amiri', 'serif']
      }
    }
  },
  plugins: []
};
