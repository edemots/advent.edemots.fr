const colors = require('tailwindcss/colors')

module.exports = {
  purge: {
    enabled: true,
    content: ['./src/**/*.svelte', './src/**/*.html'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      ...colors,
    },
    fontFamily: {
      display: ['Poppins', 'system-ui', 'sans-serif'],
    },
    extend: {
      gridTemplateColumns: {
        login: '100%',
        'login-sm': '1fr minmax(min-content,640px) 1fr',
        'login-xl': '2rem 1fr 52.5% 2rem',
      },
      gridTemplateRows: {
        login: 'auto auto',
        'login-xl': 'auto 2.5rem auto 2.5rem',
      },
      height: {
        112: '28rem',
        128: '32rem',
      },
      spacing: {
        full: '100%',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
