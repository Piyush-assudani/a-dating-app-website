/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        knot: {
          bg: '#FAF8F5',
          card: '#FFFFFF',
          dark: '#18181B',
          muted: '#71717A',
          subtle: '#A1A1AA',
          border: '#E4E4E7',
          rose: '#E11D48',
          gold: '#C5A059',
          goldLight: '#F5E6CA',
          champagne: '#DFBA73',
          sand: '#F4EFE6',
        },
      },
      fontFamily: {
        serif: [
          'Fraunces',
          'Playfair Display',
          'Didot',
          'Bodoni MT',
          'Georgia',
          'Cambria',
          'serif',
        ],
        sans: [
          'Plus Jakarta Sans',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'sans-serif',
        ],
      },
      boxShadow: {
        'luxury': '0 25px 50px -12px rgba(24, 24, 27, 0.08)',
        'luxury-lg': '0 35px 60px -15px rgba(24, 24, 27, 0.12)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.04)',
        'glow': '0 0 35px -5px rgba(197, 160, 89, 0.25)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
