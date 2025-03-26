module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
    "app/**/*.{ts,tsx}",
    "components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "character-primaryinverse": "var(--character-primaryinverse)",
        "character-secondary-45": "var(--character-secondary-45)",
        "characterdisabled-placeholder-25":
          "var(--characterdisabled-placeholder-25)",
        "charactertitle-85": "var(--charactertitle-85)",
        "conditional-sider-background": "var(--conditional-sider-background)",
        "dust-red-5": "var(--dust-red-5)",
        "geek-blue-7": "var(--geek-blue-7)",
        "geek-blue6": "var(--geek-blue6)",
        "geek-blue7": "var(--geek-blue7)",
        hitbox: "var(--hitbox)",
        "neutral-1": "var(--neutral-1)",
        "neutral-2": "var(--neutral-2)",
        "neutral-3": "var(--neutral-3)",
        "neutral-5": "var(--neutral-5)",
        "primary-1": "var(--primary-1)",
        "primary-6": "var(--primary-6)",
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
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
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
      },
      fontFamily: {
        "body-regular": "var(--body-regular-font-family)",
        "footnote-system-monospace":
          "var(--footnote-system-monospace-font-family)",
        "h4-medium": "var(--h4-medium-font-family)",
        "h5-medium": "var(--h5-medium-font-family)",
        "h5-regular": "var(--h5-regular-font-family)",
        sans: [
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
      boxShadow: {
        "drop-shadow-0-15": "var(--drop-shadow-0-15)",
        "drop-shadow-button-primary": "var(--drop-shadow-button-primary)",
        "drop-shadow-button-secondary": "var(--drop-shadow-button-secondary)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
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
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
    container: { center: true, padding: "2rem", screens: { "2xl": "1400px" } },
  },
  plugins: [],
  darkMode: ["class"],
};