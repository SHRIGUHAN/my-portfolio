/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        cabinet: ['Cabinet Grotesk','Ginebra'],
      },
      animation: {
        typing: 'typing 3s steps(20, end) forwards',
      },
      keyframes: {
        typing: {
          '0%': { width: '0' },
          '100%': { width: '100%' },
        },
      },
      colors: {
        background: '#FFFFC5',
        textColor: '#000000',
      },
      backgroundImage: {
        'pattern-dots': "url('https://www.transparenttextures.com/patterns/fancy-deboss.png')",
      },
    },
  },
 
  plugins: [],
}


