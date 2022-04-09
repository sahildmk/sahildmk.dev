module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      keyframes: {
        typewritter: {
          'to': {left: '100%'}
        }
      },
      animation: {
        typewritter: 'typewriter 3s ease infinite',
      }
    },
  },
  plugins: [],
}
