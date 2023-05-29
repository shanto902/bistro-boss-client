/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      textShadow: {
        md: '2px 2px 4px rgba(0, 0, 0, 0.4)',
      },
      fontFamily: {
        cinzel: ['Cinzel', 'serif'],
        inter: ['Inter', 'sans-serif'],
        raleway: ['Raleway', 'sans-serif']
      }
    },
  },
  plugins: [require("daisyui")],
}

