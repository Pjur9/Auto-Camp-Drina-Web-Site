/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
      colors: {
        primary: {
          DEFAULT: '#022c22',
          light: '#064e3b', 
          dark: '#011c16', 
        },
        secondary: {
          DEFAULT: '#2dd4bf',
          light: '#ccfbf1',   
        },
        accent: {
          DEFAULT: '#f97316',
          hover: '#ea580c',   
        },
        surface: {
          DEFAULT: '#f4f4f5', 
          muted: '#e4e4e7',   
        } 
      },
        fontFamily: {
          sans: ['Montserrat', 'sans-serif'],
        },
        animation: {
          'fade-in': 'fadeIn 0.3s ease-out forwards',
          'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        },
        keyframes: {
          fadeIn: { '0%': { opacity: '0' }, '100%': { opacity: '1' } },
          fadeInUp: { '0%': { opacity: '0', transform: 'translateY(20px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
        }
      },
    },
    plugins: [],
  }