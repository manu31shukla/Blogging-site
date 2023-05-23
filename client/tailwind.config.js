{import('tailwindcss').Config} 
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '28': '7rem',
        '32': '8rem',
        '36': '9rem',
        '40': '10rem',
        '50': '32rem',
      },
    },
  },
  plugins: [
    
  ],
}