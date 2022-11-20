/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      fontFamily: {
        lexend: ['Lexend', "sans-serif"],
        body: ['Lexend', "sans-serif"],
      },
      fontSize: {
        sm: '0.8rem',
        base: '14px',
        xl: '18px',
        xl2: '20px',
        xl3: '24px',
        xl4: '32px',
        xl5: '40px',
      },
      fontWeight: {
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
      },
      colors: {
        greenPrimary: '#10B981',
        greenSecondary: '#D1FAE5',
        pureWhite: '#FFFFFF',
        blackPrimary: '#0E1735',
        blackSecondary: '#3C4563',
        grayPrimary: '#1B1C57',
        graySecondary: '#626687',
        grayNeutral: '#888B97',
        whitePurePrimary: 'rgba(255, 255, 255, 0.1)',
        whitePureSecondary: 'rgba(255, 255, 255, 0.3)'
      },
      borderRadius: {
        'pill': '32px',
        'circle': '50%'
      }
    },
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '16px',
        md: '32px',
        lg: '60px',
      },
    },
  },
  plugins: [],
}