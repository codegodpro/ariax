
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "var(--color-border)",
        input: "var(--color-input)",
        ring: "var(--color-ring)",
        background: "var(--color-background)",
        foreground: "var(--color-foreground)",
        primary: {
          DEFAULT: "var(--color-primary)",
          foreground: "var(--color-primary-foreground)",
        },
        secondary: {
          DEFAULT: "var(--color-secondary)",
          foreground: "var(--color-secondary-foreground)",
        },
        destructive: {
          DEFAULT: "var(--color-destructive)",
          foreground: "var(--color-destructive-foreground)",
        },
        muted: {
          DEFAULT: "var(--color-muted)",
          foreground: "var(--color-muted-foreground)",
        },
        accent: {
          DEFAULT: "var(--color-accent)",
          foreground: "var(--color-accent-foreground)",
        },
        popover: {
          DEFAULT: "var(--color-popover)",
          foreground: "var(--color-popover-foreground)",
        },
        card: {
          DEFAULT: "var(--color-card)",
          foreground: "var(--color-card-foreground)",
        },
        success: {
          DEFAULT: "var(--color-success)",
          foreground: "var(--color-success-foreground)",
        },
        warning: {
          DEFAULT: "var(--color-warning)",
          foreground: "var(--color-warning-foreground)",
        },
        error: {
          DEFAULT: "var(--color-error)",
          foreground: "var(--color-error-foreground)",
        },
        surface: "var(--color-surface)",
        'text-primary': "var(--color-text-primary)",
        'text-secondary': "var(--color-text-secondary)",
        cta: {
          DEFAULT: "var(--color-cta)",
          foreground: "var(--color-cta-foreground)",
        },
        conversion: {
          DEFAULT: "var(--color-conversion)",
          foreground: "var(--color-conversion-foreground)",
        },
        // Enhanced theme colors for rich experience
        'glass': {
          50: 'rgba(255, 255, 255, 0.05)',
          100: 'rgba(255, 255, 255, 0.1)',
          200: 'rgba(255, 255, 255, 0.2)',
          300: 'rgba(255, 255, 255, 0.3)',
        },
        'glass-dark': {
          50: 'rgba(0, 0, 0, 0.05)',
          100: 'rgba(0, 0, 0, 0.1)',
          200: 'rgba(0, 0, 0, 0.2)',
          300: 'rgba(0, 0, 0, 0.3)',
        },
        'neon': {
          purple: '#8B5FBF',
          pink: '#FF6B9D',
          blue: '#4ECDC4',
          green: '#45B7D1',
          yellow: '#FFA726',
        }
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
      fontFamily: {
        'headline': ['Playfair Display', 'serif'],
        'body': ['Inter', 'sans-serif'],
        'accent': ['Dancing Script', 'cursive'],
      },
      fontSize: {
        'hero': ['3.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display': ['2.5rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'heading': ['2rem', { lineHeight: '1.3' }],
        'subheading': ['1.5rem', { lineHeight: '1.4' }],
        'body-lg': ['1.125rem', { lineHeight: '1.6' }],
        'body': ['1rem', { lineHeight: '1.6' }],
        'body-sm': ['0.875rem', { lineHeight: '1.5' }],
        'caption': ['0.75rem', { lineHeight: '1.4' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
        'golden-xs': '0.5rem',
        'golden-sm': '0.8125rem',
        'golden-md': '1.3125rem',
        'golden-lg': '2.125rem',
        'golden-xl': '3.4375rem',
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "gentle-fade": "gentleFade 800ms cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards",
        "stagger-reveal": "staggerReveal 800ms cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards",
        "pulse-subtle": "pulseSubtle 3s ease-in-out infinite",
        "slide-in-left": "slideInLeft 400ms cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards",
        "slide-in-right": "slideInRight 400ms cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards",
        "float": "float 6s ease-in-out infinite",
        "glow": "glow 2s ease-in-out infinite alternate",
        "spin-slow": "spin 3s linear infinite",
        "bounce-slow": "bounce 2s infinite",
        "theme-switch": "themeSwitch 0.3s ease-in-out",
        "card-hover": "cardHover 0.3s ease-out",
        "glass-shimmer": "glassShimmer 2s ease-in-out infinite",
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
        "gentleFade": {
          from: {
            opacity: "0",
            transform: "translateY(30px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "staggerReveal": {
          from: {
            opacity: "0",
            transform: "translateY(20px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "pulseSubtle": {
          "0%, 100%": {
            transform: "scale(1)",
          },
          "50%": {
            transform: "scale(1.02)",
          },
        },
        "slideInLeft": {
          from: {
            opacity: "0",
            transform: "translateX(-20px)",
          },
          to: {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
        "slideInRight": {
          from: {
            opacity: "0",
            transform: "translateX(20px)",
          },
          to: {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
        "float": {
          "0%, 100%": {
            transform: "translateY(0px)",
          },
          "50%": {
            transform: "translateY(-20px)",
          },
        },
        "glow": {
          "0%": {
            boxShadow: "0 0 20px rgba(139, 95, 191, 0.5)",
          },
          "100%": {
            boxShadow: "0 0 40px rgba(139, 95, 191, 0.8), 0 0 60px rgba(139, 95, 191, 0.4)",
          },
        },
        "themeSwitch": {
          "0%": {
            transform: "rotate(0deg) scale(1)",
          },
          "50%": {
            transform: "rotate(180deg) scale(1.1)",
          },
          "100%": {
            transform: "rotate(360deg) scale(1)",
          },
        },
        "cardHover": {
          "0%": {
            transform: "translateY(0) rotateX(0deg) rotateY(0deg)",
          },
          "100%": {
            transform: "translateY(-8px) rotateX(5deg) rotateY(5deg)",
          },
        },
        "glassShimmer": {
          "0%": {
            backgroundPosition: "-200% 0",
          },
          "100%": {
            backgroundPosition: "200% 0",
          },
        },
      },
      boxShadow: {
        'brand': '0 4px 20px rgba(93, 78, 117, 0.08)',
        'brand-hover': '0 8px 30px rgba(93, 78, 117, 0.12)',
        'brand-focus': '0 0 0 3px rgba(247, 202, 201, 0.3)',
        'elevation-1': '0 2px 8px rgba(93, 78, 117, 0.06)',
        'elevation-2': '0 4px 16px rgba(93, 78, 117, 0.08)',
        'elevation-3': '0 8px 24px rgba(93, 78, 117, 0.10)',
        'glass': '0 8px 32px rgba(31, 38, 135, 0.37)',
        'glass-hover': '0 12px 40px rgba(31, 38, 135, 0.5)',
        '3d': '0 20px 40px rgba(0, 0, 0, 0.1), 0 8px 16px rgba(0, 0, 0, 0.06)',
        '3d-hover': '0 30px 60px rgba(0, 0, 0, 0.15), 0 12px 24px rgba(0, 0, 0, 0.1)',
        'neon': '0 0 20px rgba(139, 95, 191, 0.5)',
        'neon-hover': '0 0 40px rgba(139, 95, 191, 0.8)',
      },
      backdropBlur: {
        'brand': '10px',
        'glass': '16px',
        'heavy': '24px',
      },
      aspectRatio: {
        'transformation': '4/5',
        'hero': '16/9',
        'square': '1/1',
      },
      zIndex: {
        'header': '50',
        'sidebar': '40',
        'modal': '100',
        'tooltip': '110',
      },
      perspective: {
        '1000': '1000px',
        '2000': '2000px',
      },
      transformStyle: {
        '3d': 'preserve-3d',
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    function({ addUtilities }) {
      const newUtilities = {
        '.glass-card': {
          background: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(16px)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          boxShadow: '0 8px 32px rgba(31, 38, 135, 0.37)',
        },
        '.glass-card-dark': {
          background: 'rgba(0, 0, 0, 0.1)',
          backdropFilter: 'blur(16px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.37)',
        },
        '.transform-3d': {
          transformStyle: 'preserve-3d',
        },
        '.perspective-1000': {
          perspective: '1000px',
        },
        '.backface-hidden': {
          backfaceVisibility: 'hidden',
        },
      }
      addUtilities(newUtilities)
    }
  ],
}
