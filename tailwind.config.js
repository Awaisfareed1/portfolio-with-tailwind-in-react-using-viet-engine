/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#9CFE4F",
        secondary: "#222222",
        light: "#FFFFFF",
        serClr: '#D9D9D9'
      },
      fontFamily: {
        jost: "Jost",
        anta: "Anta"
      },
      backgroundImage: {
        'herobg' : 'url(/src/assets/images/herobg.png)'
      }
    },
  },
  plugins: [],
}