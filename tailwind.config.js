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
        'bookmark-purple' : '#3CCF4E',
        'bookmark-red' : '#FA5959',
        'bookmark-blue' : '#242A45',
        'bookmark-grey' : '#9194A2',
        'bookmark-white' : '#F7F7F7'
      }
    },
  },
  plugins: [],
}
