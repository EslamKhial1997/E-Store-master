/** @type {import('tailwindcss').Config} */
import blugin from "flowbite/plugin"
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {},
  },
  // eslint-disable-next-line no-undef
  plugins: [blugin],
};
