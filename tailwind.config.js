/** @type {import('tailwindcss').Config} */
module.exports = {

  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'custom-blue': '#007ace',
         'custom-gray': {
        100: '#f5f5f5',
        800: '#333333',
      },
    },
    fontFamily: {
      sans: ['Segoe UI', 'Tahoma', 'Geneva', 'Verdana', 'sans-serif'],
    },
  },
  plugins: [
      require('@tailwindcss/typography'),
    ],
  }
}
