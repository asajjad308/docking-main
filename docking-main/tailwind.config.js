/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      primary: 'white', // Main color for headers and buttons
      secondary: '#e96a28', // Secondary color for accents
      blue: ' 	#ADD8E6',
      fourth: 'rgb(226 232 240)',
      background: '#e96a28', // Background color
      optional: 'black',
      text: '#333333', // Text color
      border: 'red',
      back: 'black',
      newback:'#22c55e',
  
      btnTextp: '#ffffff',
      hover: {
        primary: '#247BA0', // Hover color for primary elements
        secondary: '#FFD700', // Hover color for secondary elements
        third: '#d4551c',
      },
    },
    fontFamily: {
      heading: ['Montserrat', 'sans-serif'], // Font family for headings
      body: ['Open Sans', 'sans-serif'], // Font family for body text
    },
    fontSize: {
      xs: '0.75rem', // 12 Extra small
      sm: '0.875rem', //  14 Small
      base: '1rem', // 16 Base (default)
      lg: '1.125rem', //18  Large
      xl: '1.25rem', // 20 Extra large
      '2xl': '1.5rem', // 24 2x Extra large
      '3xl': '1.875rem', // 30 3x Extra large
      '4xl': '2.25rem', // 4x Extra large
      '5xl': '3rem', // 5x Extra large
      // You can add more custom font sizes here
    },
    extend: {},
  },
  plugins: [],
};
