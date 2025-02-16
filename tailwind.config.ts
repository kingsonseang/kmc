import type { Config } from "tailwindcss";

export default {
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
        primary: "hsl(var(--primary))",
        secondary: "hsl(var(--secondary))",
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

                fontSize: "2.5rem",
              },
              h2: {
                marginBottom: "0.175em",

                fontSize: "2rem",
              },
            },
          ],
        },
        base: {
          css: [
            {
              h1: {
                fontSize: "3.5rem",
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
                fontSize: "4.5rem",
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
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
} satisfies Config;
