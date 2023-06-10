/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    fontFamily: {
      'sans': ['Rubik', 'sans-serif'],
      'lato': ['Lato', 'sans-serif']
    },
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
        'sgl-gray': '#6b7280',
        'sgl-blue': '#1e4b89',
        'sgl-blue-trans': 'rgb(30 75 137 / 65%)',
        'sgl-black': '#282526'
      },
      backgroundImage: {
        'car1': "url('../src/img/car1.jpg')",
        'car2': "url('../src/img/car2.jpg')",
        'car3': "url('../src/img/car3.jpg')",
        'bg1': "url('../src/img/bgimg-1.png')",
        'bg2': "url('../src/img/bgimg-2.png')",
        'bg3': "url('../src/img/bgimg-3.png')",
        'bg4': "url('../src/img/bgimg-4.jpg')",
        'bg5': "url('../src/img/bgimg-5.png')",
      }
    },
  },
  plugins: [require('flowbite/plugin')],
}
