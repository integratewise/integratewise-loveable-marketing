import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        /* Canvas Layer */
        'iw-paper': '#F4F0E8',
        'iw-paper-warm': '#EBE5D8',
        'iw-paper-deep': '#E0D9C8',

        /* Typography Layer */
        'iw-ink': '#0C0C0C',
        'iw-ink-muted': '#5A5550',
        'iw-ink-ghost': '#8A8580',

        /* Structure Layer */
        'iw-border': '#C4BAA8',
        'iw-border-light': '#D8D0C0',

        /* Accent Layer - Forest */
        'iw-forest': '#1A3A2A',
        'iw-forest-mid': '#2D5A3D',
        'iw-forest-bright': '#3D7A50',

        /* Accent Layer - Gold */
        'iw-gold': '#B8943F',
        'iw-gold-light': '#D4AC5A',
        'iw-gold-pale': '#F0E0B0',

        /* Severity */
        'iw-red': '#8B2020',
        'iw-red-pale': '#F5E0E0',

        /* Secondary - Slate */
        'iw-slate': '#1A2E4A',
        'iw-slate-mid': '#2A4A6A',

        /* Semantic Aliases */
        'iw-bg': '#F4F0E8',
        'iw-bg-alt': '#EBE5D8',
        'iw-bg-deep': '#E0D9C8',
        'iw-bg-dark': '#1A3A2A',
        'iw-bg-dark-deep': '#0F1412',

        'iw-text': '#0C0C0C',
        'iw-text-secondary': '#5A5550',
        'iw-text-muted': '#8A8580',
        'iw-text-inverse': '#F4F0E8',

        'iw-primary': '#1A3A2A',
        'iw-primary-mid': '#2D5A3D',
        'iw-primary-bright': '#3D7A50',
        'iw-primary-muted': 'rgba(26, 58, 42, 0.08)',

        'iw-accent': '#B8943F',
        'iw-accent-light': '#D4AC5A',
        'iw-accent-muted': 'rgba(184, 148, 63, 0.10)',
        'iw-accent-pale': '#F0E0B0',

        'iw-success': '#3D7A50',
        'iw-warning': '#B8943F',
        'iw-critical': '#8B2020',
        'iw-critical-pale': '#F5E0E0',

        /* shadcn aliases */
        border: '#C4BAA8',
        input: '#D8D0C0',
        ring: '#1A3A2A',
        background: '#F4F0E8',
        foreground: '#0C0C0C',
        primary: { DEFAULT: '#1A3A2A', foreground: '#F4F0E8' },
        secondary: { DEFAULT: '#EBE5D8', foreground: '#0C0C0C' },
        muted: { DEFAULT: '#EBE5D8', foreground: '#5A5550' },
        accent: { DEFAULT: '#B8943F', foreground: '#0C0C0C' },
        destructive: { DEFAULT: '#8B2020', foreground: '#F4F0E8' },
        card: { DEFAULT: '#F4F0E8', foreground: '#0C0C0C' },
        popover: { DEFAULT: '#F4F0E8', foreground: '#0C0C0C' },
      },
      fontFamily: {
        'display': ['"Bebas Neue"', 'Impact', 'sans-serif'],
        'serif': ['"DM Serif Display"', 'Georgia', 'serif'],
        'body': ['"Instrument Sans"', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        'mono': ['"IBM Plex Mono"', 'SF Mono', 'Fira Code', 'monospace'],
      },
      borderRadius: {
        'card': '8px',
        'pill': '9999px',
        lg: '8px',
        md: '6px',
        sm: '4px',
      },
      spacing: {
        '0': '0px',
        '0.5': '4px',
        '1': '8px',
        '1.5': '12px',
        '2': '16px',
        '2.5': '20px',
        '3': '24px',
        '4': '32px',
        '5': '40px',
        '6': '48px',
        '8': '64px',
        '10': '80px',
        '12': '96px',
      },
      keyframes: {
        'stagger-fade': {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'metric-pulse': {
          '0%': { backgroundColor: 'var(--accent-signal-pale)' },
          '100%': { backgroundColor: 'transparent' },
        },
        'insight-arrive': {
          '0%': { opacity: '0', transform: 'translateX(20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'approval-pulse': {
          '0%, 100%': { borderColor: 'var(--accent-signal)' },
          '50%': { borderColor: 'var(--accent-signal-light)' },
        },
      },
      animation: {
        'stagger': 'stagger-fade 400ms ease-out forwards',
        'metric-pulse': 'metric-pulse 300ms ease-out',
        'insight-arrive': 'insight-arrive 400ms ease-out',
        'approval-pulse': 'approval-pulse 2s ease-in-out infinite',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
