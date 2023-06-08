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
      },
      backgroundColor: {
        'grey-base': '#F1F3F5',
      },
    },
  },
  plugins: [],
};
