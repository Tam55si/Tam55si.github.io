/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: '640px',

      md: '760px',

      lg: '1024px',

      xl: '1280px',

      '2xl': '1536px',

    },
    fontFamily: {
      
    },
    extend: {
      colors: {
        gray: {
          '100': '#F8F8F8',
          '200': '#E0E0E0',
          '300': '#C8C8C8',
          '400': '#888888',
          '500': '#707070',
          '600': '#505050',
          '700': '#383838',
          '800': '#282828',
          '900': '#101010',
        }
      },
    
    animation: {
      fadeIn: "fadeIn 2s ease-in forwards"
    },
    variants: {
      animation: ["motion-safe"]
  },
    keyframes: {
      fadeIn: {
        "0%": { opacity: 0 },
        "100%": { opacity: 1 }
      }
    },
  }
},
  plugins: [
    require('tailwindcss-animated')
  ],
};

