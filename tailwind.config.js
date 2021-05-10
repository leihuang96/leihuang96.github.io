module.exports = {
  mode: 'jit',
  purge: ['./*.html', './public/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      // custom font
      fontFamily: {
        orelega: ['Orelega One'],
        roboto: ['Roboto'],
      },
      height: (theme) => ({
        'screen-1/3': '33vh',
        'screen-1/2': '50vh',
        'screen-2/3': '66vh',
        'screen-3/4': '75vh',
        'screen-4/5': '80vh',
      }),
      minHeight: {
        'screen-1/3': '33vh',
        'screen-1/2': '50vh',
        'screen-2/3': '66vh',
        'screen-3/4': '75vh',
        'screen-4/5': '80vh',
      },
      backgroundImage: (theme) => ({
        'me-bg': "url('/src/imgaes/me.jpg')",
      }),
      // custom wiggle animation
      // scroll fade in
      animation: {
        fadeIn: 'fadeIn 2s ease-in forwards',
        wiggle: 'wiggle 0.7s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-4deg)' },
          '50%': { transform: 'rotate(4deg)' },
        },
      },
    },

    variants: {
      extend: {},
    },
    plugins: [],
  },
};
