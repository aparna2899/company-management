/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/pages/Home.js','./src/pages/CompanyDetail.js'],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
};
