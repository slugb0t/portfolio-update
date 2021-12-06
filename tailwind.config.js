module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      padding: {
        '1/3': '33.33333%',
        '2/3': '66.66667%'
      },
      colors: {
        'body': '#131313',
        'selected-text-': '#A3A3FF',
        'theme': '#663399',
        'nav': '#404053',
        'secondary': '#3F3F51',
        'badge': '#3F3F51',
        'input-border': '#565666',
        'input': '#2A2A35',
      },
      fontFamily: {
        'poppins': ["'Poppins'", 'sans-serif'],
        'share-tech': ["'Share-Tech-Mono'", 'sans-serif']
      }
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
  variants: {
    extend: {},
  },
}
