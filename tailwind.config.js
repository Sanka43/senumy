/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', '"SF Pro Text"', '"SF Pro Display"', 'sans-serif'],
      },
      colors: {
        senumy: {
          navy: '#00006d',
          blue: '#20207f',
          accent: '#00adf0',
          link: '#006fd1',
        },
        base: 'var(--bg-base)',
        'base-elevated': 'var(--bg-elevated)',
        glass: {
          fill: 'var(--glass-fill)',
          'fill-strong': 'var(--glass-fill-strong)',
          border: 'var(--glass-border)',
          'border-focus': 'var(--glass-border-focus)',
          highlight: 'var(--glass-highlight)',
        },
        surface: {
          primary: 'var(--text-primary)',
          secondary: 'var(--text-secondary)',
          tertiary: 'var(--text-tertiary)',
        },
      },
      borderRadius: {
        'ios': '12px',
        'ios-lg': '20px',
      },
      boxShadow: {
        'card': '0 1px 3px 0 rgb(0 0 0 / 0.08), 0 1px 2px -1px rgb(0 0 0 / 0.08)',
        'glass-inner': 'inset 1px 1px 0 0 var(--glass-highlight)',
        'glow-accent': '0 0 20px rgba(0, 173, 240, 0.25)',
      },
    },
  },
  plugins: [],
}
