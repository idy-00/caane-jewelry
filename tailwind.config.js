/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        cream:  '#F3ECDD',
        noir:   '#0A0A08',
        gold:   '#C8A96E',
      },
      fontFamily: {
        playfair:  ['"Playfair Display"', 'serif'],
        cormorant: ['"Cormorant Garamond"', 'serif'],
        jost:      ['Jost', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
