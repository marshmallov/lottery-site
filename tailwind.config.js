/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  extend: {
    fontFamily: {
      creative: ['"Playfair Display"', 'serif'],
    },
  },
  plugins: [],
}