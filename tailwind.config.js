// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // scan all React files
  ],
  theme: {
    extend: {
      colors: {
        // Borders
        border: "var(--color-border)", // => border-border
        "border-focus": "var(--color-border-focus)", // => border-border-focus

        // Brand palette
        primary: {
          DEFAULT: "var(--color-primary)",
          50: "var(--color-primary-50)",
          100: "var(--color-primary-100)",
          500: "var(--color-primary-500)",
          700: "var(--color-primary-700)",
          900: "var(--color-primary-900)",
        },
        secondary: {
          DEFAULT: "var(--color-secondary)",
          100: "var(--color-secondary-100)",
          200: "var(--color-secondary-200)",
          300: "var(--color-secondary-300)",
          600: "var(--color-secondary-600)",
          700: "var(--color-secondary-700)",
        },
        accent: {
          DEFAULT: "var(--color-accent)",
          100: "var(--color-accent-100)",
          500: "var(--color-accent-500)",
          600: "var(--color-accent-600)",
        },

        // Status
        success: {
          DEFAULT: "var(--color-success)",
          100: "var(--color-success-100)",
          500: "var(--color-success-500)",
        },
        warning: {
          DEFAULT: "var(--color-warning)",
          100: "var(--color-warning-100)",
          500: "var(--color-warning-500)",
        },
        error: {
          DEFAULT: "var(--color-error)",
          100: "var(--color-error-100)",
          500: "var(--color-error-500)",
        },

        // UI backgrounds
        background: "var(--color-background)",
        surface: "var(--color-surface)",

        // Text
        text: {
          primary: "var(--color-text-primary)",
          secondary: "var(--color-text-secondary)",
        },
          },
        borderColor: {
        DEFAULT: "var(--color-border)",     // normal border
        border: "#F1F4F8",                  // 👈 this generates `border-border`
        focus: "var(--color-border-focus)",// 👈 this generates `border-focus`
      },

      fontFamily: {
        body: ["Inter", "sans-serif"],
        heading: ["Inter", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },

      // Add spacing scale enhancements
      spacing: {
        128: "32rem",
        144: "36rem",
      },

      // Add custom radius
      borderRadius: {
        "4xl": "2rem",
      },

      // Add keyframes + animations
      keyframes: {
        "toast-slide-in": {
          from: { transform: "translateX(100%)", opacity: "0" },
          to: { transform: "translateX(0)", opacity: "1" },
        },
        "skeleton-loading": {
          "0%": { backgroundPosition: "200% 0" },
          "100%": { backgroundPosition: "-200% 0" },
        },
      },
      animation: {
        "toast-slide-in": "toast-slide-in 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        skeleton: "skeleton-loading 1.5s ease-in-out infinite",
      },

      // Add shadows for elevation system
      boxShadow: {
        "elevation-1": "0 2px 4px rgba(0,0,0,0.05)",
        "elevation-2": "0 4px 8px rgba(0,0,0,0.08)",
        "elevation-3": "0 8px 16px rgba(0,0,0,0.1)",
        "elevation-4": "0 16px 24px rgba(0,0,0,0.12)",
        "elevation-5": "0 24px 32px rgba(0,0,0,0.15)",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"), // for better styled forms
    require("@tailwindcss/typography"), // for prose utilities
    require("@tailwindcss/aspect-ratio"), // for responsive images/videos
  ],
};
