/** @type {import('tailwindcss').Config} */
export default {
  content: [
    
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    
  ],
  theme: {
    extend: {
      backgroundImage:{
        'home': 'url(./assets/escrevendo.jpg)'
      },
      backgroundColor:{
        'overlay': 'rgba(0,0,0,0.50)'
      },
      fontFamily:{
        'fontPoppins': ['Poppins']
      },
    },
  },
  plugins: [],
}

