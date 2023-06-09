/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      textColor: {
        'black-base': '#414B55',
        'grey-mid': '#868E96',
        'grey-light': '#ADB5BD',
        'dark-main': '#4A4A4A',
      },
      backgroundColor: {
        'grey-base': '#F1F3F5',
        'blue-base': '#228be6',
      },
      borderColor: {
        'grey-base': '#F1F3F5',
        'grey-light': '#D9D9D9',
      },
    },
  },
  plugins: [],
};
