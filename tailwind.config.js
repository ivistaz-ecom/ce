/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './node_modules/flowbite-react/lib/**/*.js',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './utils/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Lato', 'sans-serif'],
      },
      colors: {
        'ce-green': '#00963E',
        'ce-vivid-green': '#16A101',
        'ce-vivid-md-green': '#17A100',
        'ce-olive': '#72852A',
        'ce-light-green': '#BCD55D',
        'ce-orange': '#FFF3DE',
        'ce-brown': '#6E180C',
        'ce-gray': '#5C5C5C',
        'ce-red': '#E3000F',
        'ce-orange': '#E36200',
        'ce-black': '#06180C',
        'ce-carmine': '#AE3F39',
        'ce-purple': '#622F88',
      },
    },
  },
  plugins: [require('flowbite/plugin')],
}
