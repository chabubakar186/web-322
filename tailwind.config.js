/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./views/**/*.ejs",       // all EJS files in /views (including subfolders)
    "./public/**/*.{html,js}" // any HTML/JS in /public
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/typography"), // for better text styling
    require("daisyui"),                 // for ready-to-use UI components
  ],
  daisyui: {
    themes: ["dim"], // you can use any DaisyUI theme you like
  },
}
