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
      fontFamily: {
        gotham: ['Gotham Book', 'Arial', 'sans-serif'],
      },
      fontSize: {
        'xs': '0.75rem',      // 12px ≈ 1ft
        'sm': '0.875rem',     // 14px ≈ 1.17ft
        'base': '1rem',       // 16px ≈ 1.33ft
        'lg': '1.125rem',     // 18px ≈ 1.5ft
        'xl': '1.25rem',      // 20px ≈ 1.67ft
        '2xl': '1.5rem',      // 24px ≈ 2ft
        '3xl': '1.875rem',    // 30px ≈ 2.5ft
        '4xl': '2.25rem',     // 36px ≈ 3ft
        '5xl': '3rem',        // 48px ≈ 4ft
        '6xl': '3.75rem',     // 60px ≈ 5ft
        '7xl': '4.5rem',      // 72px ≈ 6ft
        '8xl': '6rem',        // 96px ≈ 8ft
        '9xl': '8rem',        // 128px ≈ 10.67ft
        'custom-xxs': '0.65rem',  // 10.4px ≈ 0.87ft
        'custom-huge': '10rem',   // 160px ≈ 13.33ft
      },
      lineHeight: {
        'extra-tight': '0.8',  // Very tight
        'tight': '0.99',         // Slightly tight
        'normal': '1',          // Default
        'relaxed': '1.5',       // Relaxed spacing
        'loose': '2',           // Loose spacing
        'custom-1': '1.25',     // Custom line height
        'custom-2': '1.75',     // Custom relaxed line height
        'custom-3': '2.5',      // Extra loose
      },
      letterSpacing: {
        'extra-tight': '-0.03em', // Slightly tighter
        'tight': '-0.025em',      // Tighter
        'normal': '0em',          // Default
        'wide': '0.025em',        // Slightly wide
        'wider': '0.05em',        // Wider
        'extra-wide': '0.1em',    // Extra wide
        'custom-tight': '-0.02em', // Custom tight
        'custom-loose': '0.2em',   // Custom wide
      },
      fontWeight: {
        'extra-thin': '100',      // Extra thin
        'semi-thin': '200',       // Custom semi-thin
        'regular': '400',         // Default (regular)
        'semi-bold': '600',       // Custom semi-bold
        'extra-bold': '800',      // Extra bold
        'ultra-bold': '900',      // Ultra bold (heavier than 800)
        'custom-heavy': '950',    // Custom heavy (rarely used)
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
        
        
      },
      
      animation: {
        'zoom-in': 'zoomIn 1.5s ease-out forwards',
        // 'zoom-pulse': 'zoom-pulse 3s ease-in-out infinite',
      },
      
    },
  },
  plugins: [],
}