/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sand: '#E6E2D3',
        paper: '#F1EDE1',
        forest: '#2D3A27',
        orange: '#FF5C00',
        'border-hard': '#2D3A27',
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        mono: ['"JetBrains Mono"', 'Consolas', 'monospace'],
      },
      boxShadow: {
        'hard': '8px 8px 0px #2D3A27',
        'hard-sm': '4px 4px 0px #2D3A27',
        'hard-orange': '8px 8px 0px #FF5C00',
        'hard-hover': '4px 4px 0px #2D3A27',
      },
      letterSpacing: {
        'tighter': '-0.04em',
      },
      lineHeight: {
        'none': '1',
        'tightest': '1.05',
        'tight': '1.1',
      },
    },
  },
  plugins: [],
}