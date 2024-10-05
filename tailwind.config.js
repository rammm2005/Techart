/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': "#0077FF",         // Biru muda
        'secondary': "#75C9BF",       // Biru hijau
        'primer': '#B3ECEC',          // Biru muda pastel
        'black': "#000000",           // Hitam
        'white': '#FFFFFF',           // Putih
        'gray': '#808080',            // Abu-abu
      },
      fontSize: {
        '3xl': '1.953rem',
        '4xl': '2.441rem',
        '5xl': '3.052rem',
        '6xl': '3.441rem',
        '7xl': '4.052rem',
        '8xl': '4.441rem',
        '9xl': '5.052rem',
      },
      lineHeight: {
        '11': '2.6rem',
        '12': '2.8rem',
        '13': '3rem',
        '14': '3.2rem',
        '15': '3.4rem',
        '16': '3.6rem',
        '17': '3.8rem',
        '18': '4rem',
        '19': '4.2rem',
      },
    },
  },
  plugins: [],
}

