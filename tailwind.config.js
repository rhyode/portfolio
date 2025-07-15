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
        "dark-bg": "#111827",
        "dark-surface": "#1F2937",
        "dark-text": "#F3F4F6",
        "dark-accent": "#38BDF8",

        // Direct color definitions
        background: {
          DEFAULT: "#111827",
          secondary: "#1F2937",
        },
        surface: {
          DEFAULT: "#1F2937",
          dark: "#111827",
        },
        text: {
          DEFAULT: "#F3F4F6",
          secondary: "#9CA3AF",
          muted: "#6B7280",
        },
        accent: {
          DEFAULT: "#38BDF8",
          hover: "#0EA5E9",
          light: "#7DD3FC",
        },
      },
      backgroundColor: {
        "dark-bg": "#111827",
        "dark-surface": "#1F2937",
        "dark-accent": "#38BDF8",
      },
      textColor: {
        "dark-text": "#F3F4F6",
        "dark-accent": "#38BDF8",
        "accent-hover": "#0EA5E9",
      },
      borderColor: {
        "dark-surface": "#1F2937",
        "dark-accent": "#38BDF8",
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
          "0%": { boxShadow: "0 0 5px #38BDF8" },
          "100%": { boxShadow: "0 0 20px #38BDF8, 0 0 30px #38BDF8" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "pulse-glow": {
          "0%, 100%": { boxShadow: "0 0 5px rgba(56, 189, 248, 0.5)" },
          "50%": { boxShadow: "0 0 20px rgba(56, 189, 248, 0.8)" },
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
