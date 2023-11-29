/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'purple': '#7e22ce',
        'gray':'#838383',
        'black-rgba': 'rgba(0, 0, 0, 0.8)',
      }
    },
  },
  plugins: [],
}