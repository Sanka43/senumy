/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Outfit', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      colors: {
        senumy: {
          navy: '#0f0f3d',
          blue: '#1e1e5c',
          accent: '#00c2ff',
          'accent-dim': '#00a3d9',
          link: '#38bdf8',
        },
        base: 'var(--bg-base)',
        'base-subtle': 'var(--bg-subtle)',
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
          muted: 'var(--text-muted)',
        },
      },
      borderRadius: {
        'ios': 'var(--radius-sm)',
        'ios-md': 'var(--radius-md)',
        'ios-lg': 'var(--radius-lg)',
        'ios-xl': 'var(--radius-xl)',
        'ios-2xl': 'var(--radius-2xl)',
      },
      boxShadow: {
        'card': 'var(--shadow-card)',
        'glass': 'var(--shadow-glass)',
        'soft': 'var(--shadow-soft)',
        'glass-inner': 'inset 1px 1px 0 0 var(--glass-highlight)',
        'glow-accent': 'var(--glow-accent)',
      },
      backdropBlur: {
        'glass': 'var(--glass-blur)',
        'glass-strong': 'var(--glass-blur-strong)',
        'glass-panel': 'var(--glass-blur-panel)',
      },
      maxWidth: {
        'content': 'var(--content-max)',
      },
    },
  },
  plugins: [],
}
