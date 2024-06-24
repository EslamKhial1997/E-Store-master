/** @type {import('tailwindcss').Config} */
export default {
  content: [
           "./node_modules/flowbite/**/*.js",
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  // eslint-disable-next-line no-undef
  plugins: [   require('flowbite/plugin')],
}