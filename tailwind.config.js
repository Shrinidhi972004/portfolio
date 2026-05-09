/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ['JetBrains Mono', 'monospace'],
        sans: ['Syne', 'sans-serif'],
      },
      colors: {
        bg: '#0a0e17',
        bg2: '#0f1420',
        bg3: '#151b2d',
        accent: '#00d4aa',
        accent2: '#4f8ef7',
        accent3: '#f7c948',
        muted: '#7a8499',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease forwards',
        'blink': 'blink 1s step-end infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: 0, transform: 'translateY(30px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        blink: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0 },
        },
      },
    },
  },
  plugins: [],
}