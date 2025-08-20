const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1863ab', // Academic Blue
          light: '#418cce',
          dark: '#104583',
        },
        secondary: {
          DEFAULT: '#20ae58', // Academic Green
          light: '#35e07a',
          dark: '#17783c',
        },
        accent: '#f6f9fc',
        neutral: '#eaeaea',
        darkbg: '#15213a', // Custom dark background
      },
      fontFamily: {
        sans: ['Inter', ...fontFamily.sans],
        display: ['Nunito', ...fontFamily.sans],
      },
      borderRadius: {
        xl: '1rem',
        '2xl': '1.5rem',
      },
    },
  },
  plugins: [require('@headlessui/tailwindcss')],
};
