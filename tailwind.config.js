/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./views/**/*.ejs",       // all EJS files in /views
    "./public/**/*.{html,js}" // any HTML/JS in /public
  ],
  theme: {
    extend: {},
  },
  plugins: [], // ❌ removed @tailwindcss/typography and daisyui
}
