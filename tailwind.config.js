/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Custom dark theme colors
        "dark-bg": "#1A202C",
        "dark-surface": "#2D3748",
        "dark-text": "#F7FAFC",
        "dark-accent": "#48BB78",

        // Direct color definitions
        background: {
          DEFAULT: "#1A202C",
          secondary: "#2D3748",
        },
        surface: {
          DEFAULT: "#2D3748",
          dark: "#1A202C",
        },
        text: {
          DEFAULT: "#F7FAFC",
          secondary: "#9CA3AF",
          muted: "#6B7280",
        },
        accent: {
          DEFAULT: "#48BB78",
          hover: "#38A169",
          light: "#68D391",
        },
      },
      backgroundColor: {
        "dark-bg": "#1A202C",
        "dark-surface": "#2D3748",
        "dark-accent": "#48BB78",
      },
      textColor: {
        "dark-text": "#F7FAFC",
        "dark-accent": "#48BB78",
        "accent-hover": "#38A169",
      },
      borderColor: {
        "dark-surface": "#2D3748",
        "dark-accent": "#48BB78",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.5s ease-out",
        glow: "glow 2s ease-in-out infinite alternate",
        float: "float 3s ease-in-out infinite",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        glow: {
          "0%": { boxShadow: "0 0 5px #48BB78" },
          "100%": { boxShadow: "0 0 20px #48BB78, 0 0 30px #48BB78" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "pulse-glow": {
          "0%, 100%": { boxShadow: "0 0 5px rgba(72, 187, 120, 0.5)" },
          "50%": { boxShadow: "0 0 20px rgba(72, 187, 120, 0.8)" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
