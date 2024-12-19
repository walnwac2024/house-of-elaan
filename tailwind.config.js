/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // This line tells Tailwind to scan these files for class names
  ],
  theme: {
    extend: {
      screens: {
        'xxs': '320px',  // Small Phones
        'xs': '480px',   // Phones
        'sm': '640px',   // Small Tablets
        'md': '768px',   // Tablets
        'lg': '1024px',  // Small Laptops
        'xl': '1280px',  // Desktops
        '2xl': '1536px', // Large Desktops
        '4k': '2560px',  // Ultra Wide Screens
      },
      spacing: {
        '18': '4.5rem',  // 72px
        '22': '5.5rem',  // 88px
        '36': '9rem',    // 144px
        '44': '11rem',   // 176px
        '52': '13rem',   // 208px
        '64': '16rem',   // 256px
        '72': '18rem',   // 288px
        '80': '20rem',   // 320px
        '96': '24rem',   // 384px
        '112': '28rem',  // 448px
        '128': '32rem',  // 512px
        '144': '36rem',  // 576px
        '160': '40rem',  // 640px
        '192': '48rem',  // 768px
        '224': '56rem',  // 896px
        '256': '64rem',  // 1024px
        '288': '72rem',  // 1152px
        '320': '80rem',  // 1280px
        '384': '96rem',  // 1536px
      },
      
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        zoom: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
        },
        zoomIn: {
          '0%': { 
            opacity: '0', 
            transform: 'scale(0.5)' 
          },
          '100%': { 
            opacity: '1', 
            transform: 'scale(1)' 
          }
        },
        float: 'float 4s ease-in-out infinite',
        zoom: 'zoom 3s ease-in-out infinite',
        pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        fontFamily: {
          gotham: ['Gotham Book', 'sans-serif'], // Add your font here
        },
        // 'zoom-pulse': {
        //   '0%, 100%': { transform: 'scale(1)' },
        //   '50%': { transform: 'scale(1.1)' },
        // },
        
      },
      
      animation: {
        'zoom-in': 'zoomIn 1.5s ease-out forwards',
        // 'zoom-pulse': 'zoom-pulse 3s ease-in-out infinite',
      },
      
    },
  },
  plugins: [],
}