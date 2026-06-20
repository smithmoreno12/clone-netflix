/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,tsx}',
    './components/**/*.{js,ts,tsx}',
    './core/**/*.{js,ts,tsx}', // 👈 agrega esto
    './src/**/*.{js,ts,tsx}', // si tienes carpeta src también
  ],

  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        primary: '#E10913',
        secondary: '#161616',
        dark: '#000000',
        button: '#3D393A',
        mid: '#282824',
        white: '#FFFFFF',
      },
      fontFamily: {
        'netflix-regular': ['NetflixSans-Regular'],
        'netflix-medium': ['NetflixSans-Medium'],
        'netflix-medium-italic': ['NetflixSans-MediumItalic'],
      },
      fontSize: {
        9: '9px',
        11: '11px',
        13: '13px',
        15: '15px',
        16: '16px',
        18: '18px',
        20: '20px',
        22: '22px',
      },
    },
  },
  plugins: [],
};
