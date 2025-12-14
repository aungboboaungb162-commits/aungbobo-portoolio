// tailwind.config.ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Our custom colors for maritime theme
        'navy': {
          50: '#e6f0ff',
          100: '#cce0ff',
          200: '#99c2ff',
          300: '#66a3ff',
          400: '#3385ff',
          500: '#0066ff',
          600: '#0052cc',
          700: '#003d99',
          800: '#002966',
          900: '#0A2463', // Our primary navy blue
        },
        'gold': {
          50: '#fef9e7',
          100: '#fcf3cf',
          200: '#f9e79f',
          300: '#f7dc6f',
          400: '#f4d03f',
          500: '#f1c40f',
          600: '#c19d0c',
          700: '#D4AF37', // Our secondary gold
          800: '#7a5c08',
          900: '#523c05',
        },
        'sea': {
          50: '#E6F3FF', // Our light blue accent
          100: '#d1e7ff',
          200: '#a3cfff',
          300: '#75b8ff',
          400: '#47a0ff',
          500: '#1a88ff',
          600: '#006ce6',
          700: '#0054b3',
          800: '#003c80',
          900: '#00244d',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
      backgroundImage: {
        'wave-pattern': "url('/wave.svg')",
        'navy-gradient': 'linear-gradient(135deg, #0A2463 0%, #003d99 100%)',
        'gold-gradient': 'linear-gradient(135deg, #D4AF37 0%, #f1c40f 100%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'fade-in': 'fadeIn 0.5s ease-in-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        }
      }
    },
  },
  plugins: [],
}

export default config