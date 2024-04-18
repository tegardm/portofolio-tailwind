/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    fontFamily : {
      Poppins : 'Poppins, sans-serif'
    },
    container : {
      padding: '2rem',
      center : true,
      screens : {
        lg : '1120px',
        xl : '1120px',
        '2xl' : '1120px'
      }
    },
    extend: {
      colors : {
        'bookmark-purple' : '#E4C59E',
        'bookmark-red' : '#AF8260',
        'bookmark-blue' : '#803D3B',
        'bookmark-grey' : '#9194A2',
        'bookmark-white' : '#F7F7F7'
      }
    },
  },
  plugins: [],
}
