/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-primary': '#1A202C', // main background
        'gold-primary': '#D4AF37', // main gold
        'gold-light': '#F0E68C', // secondary gold
        'teal': '#40AEC0', // subtle accent
        'deep-navy': '#0A1425',
        'muted-blue-gray': '#1D283D',
        'luminous-gold': '#DBC49A',
        'warm-parchment': '#E8D5B1',
        'soft-cream': '#DED6C4',
        'rich-blue': '#192038', // extra rich blue
        'dark-blue': '#101624',
        'gray-subtle': '#2D3748',
      },
      fontFamily: {
        serif: ['Georgia', 'Times New Roman', 'serif'],
        display: ['Montserrat', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        gold: '0 4px 24px 0 rgba(212, 175, 55, 0.15)',
      },
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        'slide-up': {
          '0%': { transform: 'translateY(40px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
      },
      animation: {
        'fade-in': 'fade-in 1s ease-out',
        'slide-up': 'slide-up 0.7s cubic-bezier(0.4,0,0.2,1)',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}