/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'lexend giga': ['Lexend Giga', 'sans-serif'],
      }
    },
  },
  plugins: [],
}