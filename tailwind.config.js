/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}', './src/pages/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '20px',
      },
    },
    screens: {
      sm: '768px',
      md: '1280px',
      lg: '1920px',
      // xl: '1920px',
    },
    extend: {
      colors: {
        primary: '#ffffff',
        secondary: 'rgba(255, 255, 255, 0.60)',
        accent: '#B2EBF2',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
