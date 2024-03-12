/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        base: '1240px',
      },
      colors:{
        br: {
          'pink': '#DE2E54',
          'blue': '#0EB4C1',
          'black': '#222'
        },
        spacing: {
          'pp': '120px'
        },
        margin: {
          '177': '177px',
          '56': '56px',
          '60': '60px',
          '8': '8px',
        },
        width: {
          'w': '500px',
          'ww': '864px'
        },
        fontSize: {
          '36': '36px',
          '16': '16px'
        },
      }
    },

  },
  plugins: [],
}