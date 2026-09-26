/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        surface: '#0a0a0a',
        background: '#0a0a0a',
        muted: '#121316',
        card: '#121316',
        'card-foreground': '#f5f5f7',
        border: 'rgba(255, 255, 255, 0.1)',
        'surface-raised': '#111111',
        'surface-card': '#161616',
        'text-primary': '#f5f5f7',
        'text-secondary': '#86868b',
        'text-tertiary': '#48484a',
        accent: '#2997ff',
        'accent-hover': '#52a9ff',
        divider: 'rgba(255,255,255,0.06)',
      },
      fontFamily: {
        sans: [
          '"SF Pro Display"',
          '"SF Pro Text"',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Inter"',
          'system-ui',
          'sans-serif',
        ],
        mono: [
          '"JetBrains Mono"',
          '"SF Mono"',
          'ui-monospace',
          'monospace',
        ],
        rounded: [
          '"Aribau Rounded"',
          '"Nunito"',
          'system-ui',
          '-apple-system',
          'sans-serif',
        ],
        aribau: [
          '"Aribau Rounded"',
          '"Nunito"',
          'system-ui',
          '-apple-system',
          'sans-serif',
        ],
      },
      maxWidth: {
        page: '1080px',
      },
      letterSpacing: {
        'tight': '-0.025em',
        'snug': '-0.015em',
      },
    },
  },
  plugins: [],
}
