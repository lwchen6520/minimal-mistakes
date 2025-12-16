import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './content/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        tech: {
          50: '#eef4ff',
          100: '#d9e6ff',
          200: '#b7cfff',
          300: '#93b7ff',
          400: '#6c9fff',
          500: '#4a7fe0',
          600: '#3a63b0',
          700: '#2d4a85',
          800: '#233b69',
          900: '#1e3258',
        },
        warmth: {
          50: '#fff5ef',
          100: '#ffe7d9',
          200: '#ffd3b7',
          300: '#ffb98f',
          400: '#ff9f67',
          500: '#f58a4f',
          600: '#d86f3a',
          700: '#b4562e',
          800: '#8f4327',
          900: '#733821',
        },
        stone: {
          950: '#0b1020',
        },
      },
      boxShadow: {
        subtle: '0 10px 40px -20px rgba(15, 23, 42, 0.35)',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.25rem',
      },
      backgroundImage: {
        'grid-tech': 'radial-gradient(circle at 1px 1px, rgba(74, 127, 224, 0.35) 1px, transparent 0)',
        'grid-warm': 'radial-gradient(circle at 1px 1px, rgba(245, 138, 79, 0.3) 1px, transparent 0)',
      },
    },
  },
  plugins: [],
};

export default config;
