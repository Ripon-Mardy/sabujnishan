/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}",
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  
  theme: {
    container: {
      center: true,
    },    
    extend: {
      screens: {        
        colors: {
          'custom-gray': '#e2e2e2', // Example custom color
        },
        borderColor: theme => ({
          default: theme('colors.gray.300', 'currentColor'),
          'custom': theme('colors.custom-gray', 'currentColor'), // Apply custom color
        }),
      }
    },
    fontSize: {
      sm: '0.8rem',
      base: '1.2rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
    },
  },
  plugins: [],
}

// content: ["./src/**/*.{html,js}"], * = wildcard