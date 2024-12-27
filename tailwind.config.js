/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],Bebas_Neue: ['Bebas Neue'],Inter:["Inter"]// Add ,your Google Font here
      },
      
    },
    
  },
  plugins: [],
}

