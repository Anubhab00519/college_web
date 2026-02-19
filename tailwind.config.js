/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#6366f1',
        'primary-dark': '#4f46e5',
        secondary: '#ec4899',
        accent: '#14b8a6',
        dark: '#0f172a',
        'dark-secondary': '#1e293b',
      },
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
        syne: ['Syne', 'sans-serif'],
      },
    },
  },
  plugins: [],
}