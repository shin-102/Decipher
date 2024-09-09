/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        Alpha: {
          "DEFAULT": "#00E2FF"
        },
        Beta: {
          "DEFAULT": "#0F3243",
          "secondary": "#111828",
        },
        Dark: {
          "DEFAULT": "#1A1A1A",
          "light": "#323232"
        }
      },
      animation: {
        'spin-slow': 'spin 5s linear infinite',
      }
    },
  },
  plugins: [],
}

