/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Custom dark theme colors
        'dark-bg': '#111827',           // Gray-Blue Dark - main background
        'dark-surface': '#1F2937',      // Slightly Lighter Gray-Blue - cards, containers
        'dark-text': '#F3F4F6',        // Off-White - primary text
        'dark-accent': '#38BDF8',       // Sky Blue - accent color

        // Also add semantic color mapping
        background: {
          DEFAULT: '#111827',
          secondary: '#1F2937',
        },
        text: {
          DEFAULT: '#F3F4F6',
          secondary: '#9CA3AF',
        },
        accent: {
          DEFAULT: '#38BDF8',
          hover: '#0EA5E9',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px #38BDF8' },
          '100%': { boxShadow: '0 0 20px #38BDF8, 0 0 30px #38BDF8' },
        },
      },
    },
  },
  plugins: [],
}
