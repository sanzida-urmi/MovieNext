/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}", // যদি app folder root এ থাকে
  ],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
}