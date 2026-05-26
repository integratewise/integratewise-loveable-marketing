/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        /* ── shadcn/ui compatibility ── */
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive) / <alpha-value>)",
          foreground: "hsl(var(--destructive-foreground) / <alpha-value>)",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },

        /* ── IntegrateWise Semantic Tokens ── */
        iw: {
          bg: 'var(--color-bg)',
          'bg-alt': 'var(--color-bg-alt)',
          surface: 'var(--color-surface)',
          'surface-2': 'var(--color-surface-2)',
          'surface-3': 'var(--color-surface-3)',
          border: 'var(--color-border)',
          'border-subtle': 'var(--color-border-subtle)',
          'border-strong': 'var(--color-border-strong)',
          text: 'var(--color-text)',
          'text-secondary': 'var(--color-text-secondary)',
          'text-muted': 'var(--color-text-muted)',
          'text-faint': 'var(--color-text-faint)',
          'text-inverse': 'var(--color-text-inverse)',
          primary: 'var(--color-primary)',
          'primary-hover': 'var(--color-primary-hover)',
          'primary-active': 'var(--color-primary-active)',
          'primary-soft': 'var(--color-primary-soft)',
          'primary-muted': 'var(--color-primary-muted)',
          accent: 'var(--color-accent)',
          'accent-hover': 'var(--color-accent-hover)',
          'accent-soft': 'var(--color-accent-soft)',
          'accent-muted': 'var(--color-accent-muted)',
          success: 'var(--color-success)',
          'success-soft': 'var(--color-success-soft)',
          warning: 'var(--color-warning)',
          'warning-soft': 'var(--color-warning-soft)',
          error: 'var(--color-error)',
          'error-soft': 'var(--color-error-soft)',
        },
      },
      fontFamily: {
        display: ['"Bebas Neue"', '"Manrope"', 'sans-serif'],
        serif: ['"DM Serif Display"', 'serif'],
        sans: ['"Instrument Sans"', '"Inter"', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
      borderRadius: {
        xl: "var(--radius-xl)",
        lg: "var(--radius-lg)",
        md: "var(--radius-md)",
        sm: "var(--radius-sm)",
        pill: "var(--radius-full)",
      },
      spacing: {
        'iw-1': 'var(--space-1)',
        'iw-2': 'var(--space-2)',
        'iw-3': 'var(--space-3)',
        'iw-4': 'var(--space-4)',
        'iw-5': 'var(--space-5)',
        'iw-6': 'var(--space-6)',
        'iw-8': 'var(--space-8)',
        'iw-10': 'var(--space-10)',
        'iw-12': 'var(--space-12)',
        'iw-16': 'var(--space-16)',
        'iw-20': 'var(--space-20)',
        'iw-24': 'var(--space-24)',
      },
      maxWidth: {
        'content-narrow': 'var(--content-narrow)',
        'content-default': 'var(--content-default)',
        'content-wide': 'var(--content-wide)',
      },
      boxShadow: {
        sm: 'var(--shadow-sm)',
        md: 'var(--shadow-md)',
        lg: 'var(--shadow-lg)',
        xl: 'var(--shadow-xl)',
      },
      transitionTimingFunction: {
        'iw-standard': 'var(--ease-standard)',
        'iw-bounce': 'var(--ease-bounce)',
      },
      transitionDuration: {
        'iw-fast': 'var(--duration-fast)',
        'iw-base': 'var(--duration-base)',
        'iw-slow': 'var(--duration-slow)',
        'iw-slower': 'var(--duration-slower)',
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "caret-blink": {
          "0%,70%,100%": { opacity: "1" },
          "20%,50%": { opacity: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "caret-blink": "caret-blink 1.25s ease-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
