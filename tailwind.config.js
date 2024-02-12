/** @type {import('tailwindcss').Config} */
export default {
  content: [  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
  "./node_modules/tw-elements-react/dist/js/**/*.js"],
  theme: {
      extend: {
      colors: {
        textColor:'#90ADC6', 
          DarkBlue: '#E9EAEC',
          secondaryColor: '#fffdff0',
          whiteLilac: "#f8f8f9",
          BlueDark: "#111439",
          Gold: "#957c3d",
          Gold2: "#fcd14e",
          textBlack :"#000000"
          
        },
    },
  },
  plugins: [
    
  ],
}

