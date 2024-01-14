/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        Asia: '#ffcb05',
        Africa: '#3d7dca',
        Oceania: '#003a70',
        Europe: '#A8A77A',
        NorthAmerica: '#EE8130',
        // water: '#6390F0',
        // electric:'#dfbc30',
        // grass: '#7AC74C',
        // ice: '#97d4d2',
        // fighting: '#b83e3a',
        // poison: '#A313A1',
        // ground: '#E2BF65',
        // flying: '#918FF3',
        // psychic: '#F95587',
        // bug: '#A6B91A',
        // rock: '#B6A136',
        // ghost: '#735797',
        // dragon: '#6F35FC',
        // dark: '#705746',
        // steel: '#B7B7CE',
        // fairy: '#D685AD',
        // none: '#BfBfBf',
        // aaa: '#BfBfBe',
      }
    },
  },
  darkMode: 'class',
  plugins: [],
}