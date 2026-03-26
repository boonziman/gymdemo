/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./layouts/**/*.html",
    "./content/**/*.{html,md}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#CCFF00",
        "background-light": "#f8f8f6",
        "background-dark": "#0A0A0A",
        "surface": "#171717",
        "surface-dark": "#121212",
        "muted": "#737373",
        "muted-dark": "#737373",
        "accent": "#FF3366",
        "text-light": "#F5F5F5",
        "text-dark": "#F5F5F5",
        "text-muted": "#525252",
      },
      fontFamily: {
        "display": ["Space Grotesk", "sans-serif"],
        "heading": ["Oswald", "sans-serif"],
        "body": ["Space Grotesk", "sans-serif"],
      },
      borderRadius: {
        "DEFAULT": "0px",
        "sm": "0px",
        "lg": "0px",
        "xl": "0px",
        "full": "0px",
      },
      animation: {
        'pulse-fast': 'pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'check-pop': 'check-pop 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards',
        'volt-pulse': 'volt-pulse 2s infinite ease-in-out',
        'pulse-glow-red': 'pulse-glow-red 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'scanline-move': 'scanline-move 8s linear infinite',
      },
      keyframes: {
        'check-pop': {
          '0%': { transform: 'scale(0) rotate(-10deg)', opacity: '0' },
          '100%': { transform: 'scale(1) rotate(0)', opacity: '1' },
        },
        'volt-pulse': {
          '0%, 100%': { backgroundColor: '#CCFF00' },
          '50%': { backgroundColor: '#d8ff33' },
        },
        'pulse-glow-red': {
          '0%, 100%': { boxShadow: '0 0 10px rgba(255, 0, 51, 0.3), inset 0 0 5px rgba(255, 0, 51, 0.2)' },
          '50%': { boxShadow: '0 0 30px rgba(255, 0, 51, 0.7), inset 0 0 15px rgba(255, 0, 51, 0.4)' },
        },
        'scanline-move': {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/container-queries'),
  ],
}
