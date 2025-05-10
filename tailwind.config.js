/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary-cyan': '#2DE1E8',
        'primary-green': '#88F7A7',
        'primary-yellow': '#F7E353',
        'primary-pink': '#FF66C4',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        // Using the custom font-script class in CSS for the Dancing Script font
      },
    },
  },
  plugins: [],
};