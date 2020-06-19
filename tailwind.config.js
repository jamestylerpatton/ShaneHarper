module.exports = {
  purge: [
    './*.html',
  ],
  theme: {
    fontFamily: {
      display: ['Times', 'serif'],
      body: ['Times', 'serif'],
    },
    backgroundColor: theme => ({
     ...theme('colors'),
     'primary': '#ddaea2',
    }),
    extend: {
      colors: {
        primary: '#ddaea2',
      },
    },
  },
  variants: {},
  plugins: [],
}
