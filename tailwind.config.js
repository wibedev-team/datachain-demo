/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}', './src/pages/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    container: {
      padding: {
        DEFAULT: '20px',
        sm: '20px',
        md: '35px',
        lg: '110px',
        xl: '130px',
      },
    },
    screens: {
      sm: '400px',
      md: '768px',
      lg: '1280px',
      xl: '1920px',
    },
    extend: {
      colors: {
        primary: '#ffffff',
        secondary: 'rgba(255, 255, 255, 0.60)',
        accent: '#B2EBF2',
        blue: '#00BCD4',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
