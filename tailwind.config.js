/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-blue': '#3B82F6',
        'accent-blue': '#60A5FA',
        'dark-blue': '#1E40AF',
      },
      fontFamily: {
        'merriweather': ['Merriweather', 'serif'],
        'helvetica': ['Helvetica Neue', 'Arial', 'sans-serif'],
        'garnet': ['Anton', 'Impact', 'Arial Black', 'sans-serif'],
      },
      keyframes: {
        'slide-up': {
          '0%': { transform: 'translateY(100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      animation: {
        'slide-up': 'slide-up 1s ease-out forwards',
      },
    },
  },
  plugins: [],
}
