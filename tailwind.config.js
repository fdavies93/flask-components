/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./static/**/*.{html,js}",
  "./templates/**/*.{html,js}",
  "./node_modules/flowbite/**/*.js",
    ],
  theme: {
    extend: {},
  },
  plugins: [
    require("flowbite/plugin"),
    require("@sira-ui/tailwind"),
  ],
}