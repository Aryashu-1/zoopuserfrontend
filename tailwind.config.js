/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      dropShadow: {
        '3xl': '0 6px 2px rgba(0, 0, 10, 0.25)'
      },
      boxShadow: {
        '3xl': '0 4px 2px rgba(0, 0, 0, 0.25)'

    },
    colors: {
      zoop:"#38bdf8",
      gray: {
        '300': '#b0b0b0',
      },
    },
  },   
  },
  plugins: [],
}