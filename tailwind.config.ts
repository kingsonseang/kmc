import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
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
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      typography: ({}) => ({
        DEFAULT: {
          css: [
            {
              "--tw-prose-body": "var(--text)",
              "--tw-prose-headings": "var(--text)",
              h1: {
                fontWeight: "normal",
                marginBottom: "0.2em",
                fontSize: "2rem",
              },
              h2: { marginBottom: "0.175em", fontSize: "2rem" },
            },
          ],
        },
        base: {
          css: [
            {
              h1: {
                fontSize: "3.1rem",
                marginBottom: "0.2em",
                lineHeight: "1.2",
              },
              h2: {
                fontSize: "2.8rem",
                marginBottom: "0.175em",
                lineHeight: "1.2",
              },
            },
          ],
        },
        md: {
          css: [
            {
              h1: {
                fontSize: "4rem",
                whiteSpace: "wrap",
                marginBottom: "0.2em",
              },
              h2: { fontSize: "3.75rem" },
              h3: { fontSize: "3rem" },
              h4: { fontSize: "2.5rem" },
              h5: { fontSize: "2rem" },
              h6: { fontSize: "1.5rem" },
            },
          ],
        },
      }),
      keyframes: {
        "fade-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(10px)",
          },
          "80%": {
            opacity: "0.6",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0px)",
          },
        },
        "fade-down": {
          "0%": {
            opacity: "0",
            transform: "translateY(-10px)",
          },
          "80%": {
            opacity: "0.6",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0px)",
          },
        },
        "fade-all-down": {
          "0%": {
            opacity: "0",
            transform: "translateY(-100%)",
          },
          "80%": {
            opacity: "0.6",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0px)",
          },
        },
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "fade-up": "fade-up 0.5s",
        "fade-down": "fade-down 0.5s",
        "fade-all-down": "fade-all-down 0.5s",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [
    require("tailwindcss-animate"),
    require("@tailwindcss/typography"),
    function ({ addUtilities }: { addUtilities: any }) {
      addUtilities(
        {
          ".scrollbar-thin": {
            scrollbarWidth: "8px",
            scrollbarColor: "rgb(31 29 29) white",
          },
          ".scrollbar-webkit": {
            "&::-webskit-scrollbar": {
              width: "8px",
            },
            "&::-webskit-scrollbar-track": {
              background: "white",
            },
            "&::-webskit-scrollbar-thumb": {
              backgroundColor: "rbg(31 41 55)",
              borderRadius: "20px",
              border: "1px solid white",
            },
          },
        },
        ["responsive", "hover"]
      );
    },
  ],
} satisfies Config;
