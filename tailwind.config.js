/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        }
      },
      colors: {
        'slg-gray': '#6b7280',
        'slg-blue': '#1e4b89'
      },
      backgroundImage: {
        'car1': "url('../src/img/car1.jpg')",
        'car2': "url('../src/img/car2.jpg')",
        'car3': "url('../src/img/car3.jpg')"
      }
    },
  },
  plugins: [require('flowbite/plugin')],
}
