/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx}'],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        primary: '#070d07',
        secondary: '#b9dccc',
        tertiary: '#103018',
        'black-100': '#0a1c11',
        'black-200': '#032510',
        'white-100': '#f3f3f3'
      },
      boxShadow: {
        card: '0px 35px 120px -15px #1e3527'
      },
      screens: {
        xs: '450px',
        xxs: '390px'
      },
      backgroundImage: {
        'hero-pattern': "url('/src/assets/herobg2.png')"
      }
    }
  },
  plugins: []
}
