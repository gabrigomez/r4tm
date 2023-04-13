/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'rage': "url('https://www.thatericalper.com/wp-content/uploads/2022/07/Rage-Against-The-Machine-FirstOntario-Centre-%C2%A9-Minis-Memories-07-19-2022-0204.jpg')",
      }
    },
  },
  plugins: [],
}
