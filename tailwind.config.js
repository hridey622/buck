/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2E9452',
          dark: '#1E7A3D'
        },
        background: {
          light: '#FFFFFF',
          dark: '#1A1A1A'
        },
        text: {
          primary: '#1A1A1A',
          secondary: '#666666'
        },
        border: '#E5E7EB'
      },
      boxShadow: {
        'soft': '0 2px 15px rgba(0, 0, 0, 0.05)',
      },
      animation: {
        "background-gradient": "background-gradient var(--background-gradient-speed, 15s) cubic-bezier(0.445, 0.05, 0.55, 0.95) infinite",
        "background-shine": "background-shine 2s linear infinite",
        "text-gradient": "text-gradient 5s linear infinite",
        "border-width": "border-width 3s infinite alternate"
      },
      keyframes: {
        "background-gradient": {
          "0%, 100%": {
            backgroundSize: "200% 200%",
            backgroundPosition: "left center"
          },
          "50%": {
            backgroundSize: "200% 200%",
            backgroundPosition: "right center"
          }
        },
        "background-shine": {
          from: { backgroundPosition: "200% 0" },
          to: { backgroundPosition: "-200% 0" }
        },
        "text-gradient": {
          to: {
            backgroundPosition: "200% center"
          }
        },
        "border-width": {
          from: { width: "10px", opacity: "0" },
          to: { width: "100px", opacity: "1" }
        }
      },
    },
  },
  plugins: [],
}