/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './index.html',
  ],
  theme: {
    extend: {
      backgroundImage:{
        "header": "url('/bg.jpg')",
      }
    },
  },
  plugins: [],
}


