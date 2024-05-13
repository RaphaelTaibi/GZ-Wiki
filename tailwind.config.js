/** @type {import('tailwindcss').Config} */
module.exports = {

  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      spacing: {
        '368': '368px',
        '565': '565px',
        '268': '268px',
        '351': '351px',
        '177': '177px',
        '30': '30px',
        '27': '27px',
      },
      colors: {
        'background': '#1B1D26',
        'frame-border': '#3C3F4C',
        'button-background': '#3C3F4C',
        'french-blue': '#0052B4',
        'french-red': '#D80027',
        'french-white': '#F0F0F0',
      },
      fontSize: {
        'base': '16px',
      },
      fontFamily: {
        'outfit': ['Outfit', 'sans-serif'],
      },
    },
  },
  plugins: [
      require('@tailwindcss/typography'),
    ],
  }
